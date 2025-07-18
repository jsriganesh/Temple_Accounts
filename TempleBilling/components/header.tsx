import { commonImages } from '@/constants/constant'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LanguageSelect from './languageDropDown'
import { useAppSelector } from '@/redux/store'

const Header = () => {
    const { userDetails } = useAppSelector((state) => state.commonData);
  
  return (
    <View style={styles.header}>
    {/* App Name */}
    <Text style={styles.appName}>Temple Billing</Text>

    {/* Icons */}
    <View style={styles.iconsContainer}>
      {/* Language Change Icon */}
      <View>
<LanguageSelect />
      </View>

      {/* Profile Image */}
      <TouchableOpacity onPress={() => console.log('Profile')}>
        <Image
          source={{ uri:userDetails.templeDetails[0].templeImage || commonImages.loginPageImage }} 
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  </View>

  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        // backgroundColor: '#f8f8f8',
        // borderBottomWidth: 1,
        // borderBottomxColor: '#ddd',
      },
      appName: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#333',
      },
      iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        // marginRight: 16,
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
})