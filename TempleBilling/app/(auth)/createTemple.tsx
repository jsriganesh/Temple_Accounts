import ScreenWrapper from '@/components/screenWrapper';
import { localizationText } from '@/constants/commonMenthod';
import { appColors } from '@/constants/constant';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CreateTemple = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()
      const router = useRouter()

    const [image, setImage] = useState<string | null>(null);


    const onSubmit = (data: any) => {
        router.push('/(auth)/home')
        // Alert.alert('Form Submitted', JSON.stringify(data))
    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
        <ScreenWrapper hideFooter>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // padding for iOS, height for Android
                keyboardVerticalOffset={50 }
                 // adjust offset if using header
                >
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{localizationText('Common', 'createTemple')}</Text>
                    {/* Temple Logo (Optional) */}
                    <Text style={styles.label}>{localizationText('CreateTemple', 'templeLogo')}</Text>
                    <TouchableOpacity onPress={pickImage} >
                        {image ? <Image source={{ uri: image }} style={styles.image} /> :
                            <View style={styles.image}><Text style={{ color: '#888', fontSize: 16 }}>{'No image'}</Text></View>}
                    </TouchableOpacity>

                    {/* Temple Name */}
                    <Text style={styles.label}>{localizationText('CreateTemple', 'templeName')}</Text>
                    <Controller
                        control={control}
                        name="templeName"
                        rules={{
                            required: localizationText('CreateTemple', 'templeNameRequired'),
                            minLength: { value: 5, message: localizationText('ValidationMsg', 'minLengthIs5'), },
                            maxLength: { value: 50, message: localizationText('ValidationMsg', 'maxLengthIs50') },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder={localizationText('CreateTemple', 'enterTempleName')}
                                style={[styles.input, errors.templeName && styles.errorInput]}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    {errors?.templeName?.message && <Text style={styles.errorText}>{String(errors.templeName.message)}</Text>}

                    {/* Temple Address */}
                    <Text style={styles.label}>{localizationText('CreateTemple', 'templeAddress')}</Text>
                    <Controller
                        control={control}
                        name="templeAddress"
                        rules={{
                            required: localizationText('CreateTemple', 'templeAddressRequired'),
                            minLength: { value: 5, message: localizationText('ValidationMsg', 'minLengthIs5') },
                            maxLength: { value: 200, message: localizationText('ValidationMsg', 'maxLengthIs200') },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder={localizationText('CreateTemple', 'enterTempleAddress')}
                                style={[styles.input, errors.templeAddress && styles.errorInput]}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />
                    {errors.templeAddress && <Text style={styles.errorText}>{String(errors.templeAddress.message)}</Text>}

                    {/* Mobile No */}
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
                            required: localizationText('CreateTemple', 'emailRequired'),
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

                    {/* Submit Button */}
                    <Button title={localizationText('CreateTemple', 'submit')} onPress={handleSubmit(onSubmit)} color={appColors.themeColor} />
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </ScreenWrapper>
    )
}

export default CreateTemple

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:16,
        padding: 16,
        backgroundColor: '#fff',
    },
    image: {
        height: 150, width: 150, backgroundColor: '#f0f0f0', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 20, alignSelf: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
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
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
})