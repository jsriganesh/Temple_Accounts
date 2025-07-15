// filepath: /Users/sriganesh/Project/karthik/TempleBilling/app/index.tsx
import { commonImages } from '@/constants/constant'
import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import './../localization/localizationUtils'


const index = () => {
  const router = useRouter()
  useEffect(() => {

    setTimeout(() => {
      router.push('/(auth)/login')
    }, 2000);

  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Image style={{height:'100%',width:'100%'}}  resizeMode='cover' source={{ uri: commonImages.splashScreenImage }}/>
    </View>
  )
}

export default index