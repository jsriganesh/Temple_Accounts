import { localizationText } from '@/constants/commonMenthod'
import { AppName, commonImages } from '@/constants/constant'
import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'





const Login = () => {

      const router = useRouter()
    
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
      />
      <TextInput
        placeholder={localizationText('Common', 'password')}
        secureTextEntry
        style={styles.input}
      />

      {/* Submit Button */}
      <Button title={localizationText('Common', 'submit')} onPress={() => {router.push('/(auth)/createTemple')}} />

      {/* Login with Google Button */}
      <View style={styles.googleButton}>
        <Button title={localizationText('Common', 'loginWithGoogle')} onPress={() => {}} />
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