import HomeScreenBanner from '@/components/banner';
import Header from '@/components/header';
import ScreenWrapper from '@/components/screenWrapper';
import { localizationText } from '@/constants/commonMenthod';
import { appColors } from '@/constants/constant';
import { useAppSelector } from '@/redux/store';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const router = useRouter()

  const {categorys} = useAppSelector((state) => state.commonData)

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