import { localizationText } from '@/constants/commonMenthod'
import { AppName, commonImages } from '@/constants/constant'
import { updateUserDetails } from '@/redux/slices/commonSlice'
import { useAppDispatch } from '@/redux/store'
import { postRequest } from '@/services/axiosService'
import { EndPoint } from '@/services/endPoint'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

const Login = () => {
  const dispatch = useAppDispatch();

  const [emailID,setEmailID]=useState<string>('test@gmail.com')
  const [ password, setPassword ]=useState<string>('a12345')
  const router = useRouter()

  const doLogin=()=>{
    postRequest(EndPoint.login, { emailID: emailID, password: password }, (data) => {
      console.log('Login successful:', data);
      dispatch(updateUserDetails(data));
      if( data?.templeDetails?.length > 0 ){
        router.push('/(auth)/home')
      }else{
        router.push('/(auth)/createTemple')
      }
      // Handle successful login, e.g., navigate to home screen
    }
      , (error) => {
      console.error('Login failed:', error);
      // Handle login error, e.g., show an error message
    });
  }

  return (
    <View style={styles.container}>

      {/* App Name */}
      <Text style={styles.appName}>{AppName}</Text>

      {/* Top Center Image */}
      <Image
        source={{ uri: commonImages.loginPageImage }} // Replace with your image URL
        style={styles.image}
      />

      {/* Input Fields */}
      <TextInput
        placeholder={localizationText('Common', 'userName')}
        style={styles.input}
        value={emailID}
        onChangeText={(text) => setEmailID(text)}
      />
      <TextInput
        placeholder={localizationText('Common', 'password')}
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Submit Button */}
      <Button title={localizationText('Common', 'save')} onPress={() => {  doLogin() }} />

      {/* Login with Google Button */}
      <View style={styles.googleButton}>
        <Button title={localizationText('Common', 'loginWithGoogle')} onPress={() => { }} />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  googleButton: {
    marginTop: 20,
    width: '80%',
  },
})