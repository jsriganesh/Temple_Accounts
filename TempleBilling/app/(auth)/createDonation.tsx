import PageHeader from '@/components/pageHeader';
import ScreenWrapper from '@/components/screenWrapper';
import { localizationText } from '@/constants/commonMenthod';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';



import { appColors } from '@/constants/constant';
import { categorieProps } from '@/interface/commonInterface';
import { useAppSelector } from '@/redux/store';
import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { postRequest } from '@/services/axiosService';
import { EndPoint } from '@/services/endPoint';


const CreateDonation = () => {
        // const { userDetails } = useAppSelector((state) => state.commonData);
      const router = useRouter()
    
    const params = useLocalSearchParams() as unknown as categorieProps;
    const { categorys,userDetails } = useAppSelector((state) => state.commonData)

    const category = params;
    const options = category.id ? categorys.find((cat) => cat.id == category.id)?.options || []
        : []

    // console.log('params', params);
    console.log('params', params);
    // console.log('category', category);
    const [selectedDonationType, setSelectedDonationType] = useState('cash');
    const [selectedType, setSelectedType] = useState(options.length > 0 ? options[0].id : '');

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [image, setImage] = useState<string | null>(null);


    console.log('errors', errors)
    const onSubmit = (data: any) => {
        const formData = {
            userID:parseInt(userDetails.userID),
            templeID:parseInt(userDetails.templeDetails[0].templeID),
            categoryName:category.name,
            categoryID: parseInt(category.id.toString()),
            amount: parseInt(data.donationAmount),
            paymentType: selectedDonationType,
            
            typeName:options.find((opt) => opt.id == selectedType)?.name || '',
            typeID:parseInt(selectedType.toString()),
            comments: data.comments || '',

            personName: data.personName || '',
            mobileNo: data.mobileNo || '',
            email: data.email || '',
        }

        postRequest(EndPoint.bills, formData, (response) => {
            console.log('Donation created successfully:', response);
            Alert.alert('Donation created successfully');
            router.push('/(auth)/home')
        }, (error) => {
            console.error('Error creating donation:', error);
            // Alert.alert('Form Error', JSON.stringify(error))
            // Alert.alert(localizationText('Common', 'error'), localizationText('Donation', 'errorCreatingDonation'));
        });

        // Alert.alert('Form Submitted', JSON.stringify(data))
    }

    // && category?.options ? category?.options :[]
    console.log('optionsoptions', JSON.parse(JSON.stringify(options)))



    return (
        <ScreenWrapper>
            <PageHeader title={localizationText(category.labelParentKey, category.labelChildKey)} />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // padding for iOS, height for Android
                keyboardVerticalOffset={50 }
                 // adjust offset if using header
                >
            <ScrollView>
                <View style={styles.container}>

                    {/* Select Options */}
                    <Text style={styles.label}>{localizationText('Common', 'selectType')}</Text>
                    <Controller
                        control={control}
                        name="donationType"
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.pickerContainer}>
                                <Picker
                                    style={styles.picker}
                                    dropdownIconColor="#666" // optional: customize arrow icon
                                    selectedValue={value}
                                    onValueChange={(itemValue) => {
                                        setSelectedType(itemValue);
                                        onChange(itemValue);
                                    }}
                                >
                                    {
                                        options.length > 0 && options.map((option) => (
                                            <Picker.Item key={option.id} label={localizationText(option.labelParentKey, option.labelChildKey)} value={option.id} />
                                        ))
                                    }
                                </Picker>
                            </View>
                        )}
                    />

                    {category.id == 3 &&
                        <>
                            {/* Temple Name */}
                            <Text style={styles.label}>{localizationText('Donation', 'personName')}</Text>
                            <Controller
                                control={control}
                                name="personName"
                                rules={{
                                    required: localizationText('Donation', 'personNameRequired'),
                                    minLength: { value: 5, message: localizationText('ValidationMsg', 'minLengthIs5'), },
                                    maxLength: { value: 50, message: localizationText('ValidationMsg', 'maxLengthIs50') },
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder={localizationText('Donation', 'enterPersonName')}
                                        style={[styles.input, errors.personName && styles.errorInput]}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors?.personName?.message && <Text style={styles.errorText}>{String(errors.personName.message)}</Text>}


                            <Text style={styles.label}>{localizationText('CreateTemple', 'mobileNo')}</Text>
                            <Controller
                                control={control}
                                name="mobileNo"
                                rules={{
                                    required: localizationText('CreateTemple', 'mobileNoRequired'),
                                    minLength: { value: 10, message: localizationText('ValidationMsg', 'mobileNoMust10Digits') },
                                    maxLength: { value: 10, message: localizationText('ValidationMsg', 'mobileNoMust10Digits') },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: localizationText('ValidationMsg', 'mobileNoMustBeNumeric'),
                                    },
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder={localizationText('CreateTemple', 'enterMobileNo')}
                                        keyboardType="numeric"
                                        style={[styles.input, errors.mobileNo && styles.errorInput]}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors.mobileNo?.message && <Text style={styles.errorText}>{String(errors.mobileNo.message)}</Text>}

                            {/* Email */}
                            <Text style={styles.label}>{localizationText('CreateTemple', 'email')}</Text>
                            <Controller
                                control={control}
                                name="email"
                                rules={{
                                    minLength: { value: 5, message: localizationText('ValidationMsg', 'minLengthIs5') },
                                    maxLength: { value: 50, message: localizationText('ValidationMsg', 'maxLengthIs50') },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: localizationText('CreateTemple', 'emailMustBeValid'),
                                    },
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        placeholder={localizationText('CreateTemple', 'enterEmail')}
                                        keyboardType="email-address"
                                        style={[styles.input, errors.email && styles.errorInput]}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors.email && <Text style={styles.errorText}>{String(errors.email.message)}</Text>}

                        </>}

                    <Text style={styles.label}>{localizationText('Donation', 'donationAmount')}</Text>
                    <Controller
                        control={control}
                        name="donationAmount"
                        rules={{
                            required: localizationText('Donation', 'donationAmountRequired'),
                            minLength: { value: 1, message: localizationText('ValidationMsg', 'valueMust1Digits') },
                            maxLength: { value: 6, message: localizationText('ValidationMsg', 'minLengthIs6') },
                            pattern: {
                                value: /^[0-9]+$/,
                                message: localizationText('ValidationMsg', 'vauleMustBeNumeric'),
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder={localizationText('Donation', 'enterDonationAmount')}
                                keyboardType="numeric"
                                style={[styles.input, errors.mobileNo && styles.errorInput]}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    {errors.donationAmount?.message && <Text style={styles.errorText}>{String(errors.donationAmount.message)}</Text>}

                    <Text style={styles.label}>{localizationText('Donation', 'donationType')}</Text>
                    <Controller
                        control={control}
                        name="donationType"
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.pickerContainer}>
                                <Picker
                                    style={styles.picker}
                                    dropdownIconColor="#666" // optional: customize arrow icon
                                    selectedValue={value}
                                    onValueChange={(itemValue) => {
                                        setSelectedDonationType(itemValue);
                                        onChange(itemValue);
                                    }}
                                >
                                    {/* <Picker.Item label={localizationText('Donation', 'selectDonationType')} value="" /> */}
                                    <Picker.Item label="Cash" value="cash" />
                                    <Picker.Item label="Cheque" value="cheque" />
                                    <Picker.Item label="UPI" value="upi" />
                                </Picker>
                            </View>
                        )}
                    />


                    <Text style={styles.label}>{localizationText('Common', 'comments')}</Text>
                    <Controller
                        control={control}
                        name="comments"

                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput

                                multiline
                                placeholder={localizationText('Donation', 'enterComments')}
                                style={[styles.commentsinput]}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Button title={localizationText('Common', 'save')} onPress={handleSubmit(onSubmit)} color={appColors.themeColor}/>

                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </ScreenWrapper>
    )
}

export default CreateDonation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop:16,
        padding: 16,
        backgroundColor: '#fff',
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    commentsinput: {
        textAlignVertical: 'top',
        height: 80,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    picker: {
        fontSize: 14,
        paddingHorizontal: 10,
    },

})