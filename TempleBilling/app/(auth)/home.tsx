import HomeScreenBanner from '@/components/banner';
import DonutPieChart from '@/components/donutChart';
import Header from '@/components/header';
import ScreenWrapper from '@/components/screenWrapper';
import { localizationText } from '@/constants/commonMenthod';
import { appColors } from '@/constants/constant';
import { pieDataProps } from '@/interface/commonInterface';
import { useAppSelector } from '@/redux/store';
import { postRequest } from '@/services/axiosService';
import { EndPoint } from '@/services/endPoint';
import { useIsFocused } from '@react-navigation/native';
import { Link, useRouter } from 'expo-router';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const router = useRouter()
  const isFocused = useIsFocused();

  const [pieData, setPieData] = useState<pieDataProps[]>([]);
  const [holdingAmount, setHoldingAmount] = useState<number>(0);

  

  const {categorys,userDetails} = useAppSelector((state) => state.commonData)
  useEffect(()=>{
    getDashboardDatas()
  },[isFocused])
  const getDashboardDatas = ()=>{   
    // console.log('responce ----->,1')
 
    const today = new Date();
    let toDate: Date = new Date(today);
    const fromDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const clonedDate = new Date(fromDate.getTime()); // Clone using getTime()
        clonedDate.setDate(clonedDate.getDate() - 1);
        const data = {
          fromDate: moment(clonedDate).format('YYYY-MM-DD') + 'T:18:30.00Z',
          toDate: moment(toDate).format('YYYY-MM-DD') + 'T:18:29.59Z',
          userID: userDetails.userID,
          templeID: userDetails.templeDetails[0].templeID,
        }
        postRequest(EndPoint.dashboard, data, (responce) => {
          // console.log('responce ----->,',responce)
            if (responce.chartData) {
              // console.log('receiptsReportData', responce);
              setPieData(responce.chartData);
              setHoldingAmount(responce.holdingAmount)
            } else {
              setPieData([]);
            }
        }
          , (error) => {
            console.log('error', error);
          }
        )
  }
  // const categories: categorieProps[] = [...categoriedData];
  // console.log('categorys****',categorys);
  return (
    <ScreenWrapper>
      {/* Header */}
      <Header />

      <View>
        {Platform.OS === 'ios' || Platform.OS === 'android' && <HomeScreenBanner />}

        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{localizationText('Common', 'catrgories')}</Text>
        </View>
        <ScrollView horizontal>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            {
              categorys.map((category,index) => (
                <Link key={index} href={{ pathname: '/(auth)/createDonation', params: category as any }} push asChild>
                  <TouchableOpacity style={styles.categopryContainer}>
                    <View style={styles.imageRound}>
                      <Image source={category.image} style={styles.iconStyle} />
                    </View>
                    <Text style={{fontSize:12}}>{localizationText(category.labelParentKey, category.labelChildKey)}</Text>
                  </TouchableOpacity>
                </Link>
              ))
            }
          </View>
        </ScrollView>

        <View style={{ marginHorizontal: 10,marginTop:16 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{localizationText('Common', 'monthlyReport')}</Text>
        </View>
       {pieData.length > 0 && <DonutPieChart pieData={pieData} holdingAmount={holdingAmount}/>}
      </View>
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({
  categopryContainer: {
    marginTop: 8, alignItems: 'center',
  },
  imageRound: {
    height: 50, backgroundColor: appColors.themeColor, borderRadius: 100, margin: 10, width: 50, justifyContent: "center", alignItems: "center"
  },
  iconStyle: {
    height: 25, width: 25
  }
})