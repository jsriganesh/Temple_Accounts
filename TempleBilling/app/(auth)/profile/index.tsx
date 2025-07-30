import HomeScreenBanner from '@/components/banner';
import DonutPieChart from '@/components/donutChart';
import Header from '@/components/header';
import ScreenWrapper from '@/components/screenWrapper';
import { localizationText } from '@/constants/commonMenthod';
import { appColors, commonImages } from '@/constants/constant';
import { pieDataProps } from '@/interface/commonInterface';
import { useAppSelector } from '@/redux/store';
import { postRequest } from '@/services/axiosService';
import { EndPoint } from '@/services/endPoint';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { Link, useRouter } from 'expo-router';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  const router = useRouter()
  const isFocused = useIsFocused();

  const [pieData, setPieData] = useState<pieDataProps[]>([]);
  const [holdingAmount, setHoldingAmount] = useState<number>(0);



  const { categorys, userDetails } = useAppSelector((state) => state.commonData)
  // console.log('userDetails =',userDetails)
  return (
    <ScreenWrapper>

      <View>
      {/* <ImageBackground source={{uri:'https://as2.ftcdn.net/v2/jpg/09/29/22/09/1000_F_929220908_r7PN6SU6u5f4NPmAA47p6XgNqNNn9deK.jpg'}} style={{width:'100%'}}> */}

        <View style={{ padding: 16, }}>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{localizationText('Common', 'profile')}</Text>
          </View>
          
          <View style={{justifyContent:"center",alignItems:"center",width:'70%',alignSelf:"center"}}>
          <TouchableOpacity onPress={()=>{
            router.push({
              pathname: '/(auth)/createTemple',
              params: { isEditTemple:'true'}
              ,
            });
          
            }}>
          <Image
            source={{ uri:userDetails.templeDetails[0].templeImage || commonImages.loginPageImage }} 
            style={styles.profileImage}
          />
          </TouchableOpacity>
          <View style={{position:'absolute',marginLeft:100}}>
          <Ionicons name="pencil" size={24} color='black' />
          </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold',marginTop:16 }}>{userDetails.templeDetails[0].templeName}</Text>
            <Text style={{ fontSize: 14, fontWeight: '600',marginTop:8,textAlign:"center" }}>{userDetails.templeDetails[0].address}</Text>
          </View>
        </View>

        <View>
          
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Profile

const styles = StyleSheet.create({
  categopryContainer: {
    marginTop: 8, alignItems: 'center',
  },
  imageRound: {
    height: 50, backgroundColor: appColors.themeColor, borderRadius: 100, margin: 10, width: 50, justifyContent: "center", alignItems: "center"
  },
  iconStyle: {
    height: 25, width: 25
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})