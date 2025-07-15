import Header from '@/components/header';
import ScreenWrapper from '@/components/screenWrapper';
import { localizationText } from '@/constants/commonMenthod';
import { appColors } from '@/constants/constant';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const AddressBook = () => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [address, setAddress] = useState<Location.LocationGeocodedAddress | null>(null);


  console.log('errors', errors)
  const onSubmit = (data: any) => {
    const getAddress = {
      data,city:address?.city, 
      country: address?.country, 
      formattedAddress: address?.formattedAddress, 
      postalCode: address?.postalCode,  
      street: address?.street}
      console.log('Form Data:', getAddress);

    Alert.alert('Form Submitted', JSON.stringify(getAddress));
  }


  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log('Location permission status:', status);
    if (status !== 'granted') {
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log('Location status:', location);
  }

  useEffect(() => {
    (async () => {
      if (location) {
        const { latitude, longitude } = location.coords;
        let reverseGeocode = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        if (reverseGeocode && reverseGeocode.length > 0) {
          console.log('Reverse Geocode:', reverseGeocode);
          setAddress(reverseGeocode[0]);
          // [{
          //     "city": "Kallar R.F.", 
          //     "country": "India", 
          //     "district": null, 
          //     "formattedAddress": "7WVF+2Q8, Mettuppalaiyam, Kallar R.F., Tamil Nadu 641305, India", 
          //     "isoCountryCode": "IN", 
          //     "name": "7WVF+2Q8", 
          //     "postalCode": "641305", 
          //     "region": "Tamil Nadu", 
          //     "street": null, 
          //     "streetNumber": null, 
          //     "subregion": "Kallar R.F", 
          //     "timezone": null
          // }]
        }
      }
    })();
  }, [location]);



  return (
    <ScreenWrapper>
      {/* Header */}
      <Header />

      <View style={styles.container}>
        <Text style={styles.title}>{localizationText('Common', 'createAddress')}</Text>

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


        <Text style={styles.label}>{localizationText('Common', 'address')}</Text>
        <Controller
          control={control}
          name="address"

          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              placeholder={localizationText('Donation', 'enterComments')}
              style={[styles.addressInput]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />


        {/* Submit Button */}
        <Button title={localizationText('Common', 'save')} onPress={handleSubmit(onSubmit)} color={appColors.themeColor} />
      </View>
    </ScreenWrapper>
  )
}

export default AddressBook

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 16,
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
  addressInput: {
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

})