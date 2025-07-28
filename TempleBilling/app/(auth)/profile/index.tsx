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
import { useIsFocused } from '@react-navigation/native';
import { Link, useRouter } from 'expo-router';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  const router = useRouter()
  const isFocused = useIsFocused();

  const [pieData, setPieData] = useState<pieDataProps[]>([]);
  const [holdingAmount, setHoldingAmount] = useState<number>(0);



  const { categorys, userDetails } = useAppSelector((state) => state.commonData)
  console.log('userDetails =',userDetails)
  return (
    <ScreenWrapper>

      <View>
        <View style={{ backgroundColor: 'pink', padding: 16, }}>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{localizationText('Common', 'profile')}</Text>
          </View>

          <View style={{justifyContent:"center",alignItems:"center",width:'70%',alignSelf:"center"}}>
          <Image
            source={{ uri:userDetails.templeDetails[0].templeImage || commonImages.loginPageImage }} 
            style={styles.profileImage}
          />
          {/* <View style={{ marginHorizontal: 10 }}> */}
            <Text style={{ fontSize: 16, fontWeight: 'bold',marginTop:16 }}>{userDetails.templeDetails[0].templeName}</Text>
            <Text style={{ fontSize: 14, fontWeight: '600',marginTop:8,textAlign:"center" }}>{userDetails.templeDetails[0].address}</Text>
          {/* </View> */}
          </View>
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