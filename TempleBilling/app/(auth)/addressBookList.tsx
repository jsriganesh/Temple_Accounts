import Header from '@/components/header';
import PageFilterDates from '@/components/pageFilterDates';
import ScreenWrapper from '@/components/screenWrapper';
import { converNumberToRupee, localizationText } from '@/constants/commonMenthod';
import { appColors } from '@/constants/constant';
import { receiptsReportData } from '@/constants/sampleResponces';
import {  AddressBookProps, categorieProps, categoriesOptionsProps, FilterDatesProps, ReportDataProps } from '@/interface/commonInterface';
import { useAppSelector } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import { postRequest } from '@/services/axiosService';
import { EndPoint } from '@/services/endPoint';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Ionicons } from '@expo/vector-icons';


export const triggerStyles = {
  triggerTouchable: {
      underlayColor: appColors.themeColor,
      borderRadius: 10,
      activeOpacity: 0.5,
  },
};

export const optionsStyles = {
  optionsContainer: {
      borderRadius: 6,
      paddingVertical: 5,
      marginTop: 30,
      width: 120,
      alignItems: 'center' as 'center',
  },
  optionWrapper: {
      paddingHorizontal: 10,
      paddingVertical: 5,
  },
  optionTouchable: {
      underlayColor: appColors.themeColor,
      activeOpacity: 0.5,
  },
};

const AddressBookList = () => {
  const { categorys, userDetails } = useAppSelector((state) => state.commonData)
  const [dates, setDates] = useState<FilterDatesProps>({ fromDate: new Date(), toDate: new Date() })
  const [addressList, setAddressList] = useState<AddressBookProps[]>([])

  
  useEffect(() => {
    getAllAddressBook()
  }, [dates]);

  const getAllAddressBook=()=>{
     const fromDate = dates.fromDate
        const clonedDate = new Date(fromDate.getTime()); // Clone using getTime()
        clonedDate.setDate(clonedDate.getDate() - 1);
        const data = {
          fromDate: moment(clonedDate).format('YYYY-MM-DD') + 'T:18:30.00Z',
          toDate: moment(dates.toDate).format('YYYY-MM-DD') + 'T:18:29.59Z',
          userID: userDetails.userID,
        }
    
        postRequest(EndPoint.addressBookSearch, data, (responce) => {
            if (responce.list.length > 0) {
              console.log('receiptsReportData', responce.list);
              setAddressList(responce.list);
            } else {
              // setRepotDetails(null);
            }
        }
          , (error) => {
            console.log('error', error);
          }
        )
  }

  return (
    <ScreenWrapper>
      <Header />

      <View style={styles.container}>
        <ScrollView>
          <PageFilterDates
            filterDateDetails={(date) => {
              setDates(date);
              console.log('date', date);
            }} />

          <View style={{ marginTop: 16, flex: 1 }}>
            <ScrollView horizontal>
              <View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <View style={styles.fCollumn1}><Text style={styles.headerText}>{localizationText('ReportHeaders', 'name')}</Text></View>
                  <View style={styles.fCollumn2}><Text style={styles.headerText}>{localizationText('CreateTemple', 'mobileNo')}</Text></View>
                  <View style={[styles.fCollumn3]}><Text style={styles.headerText}>{localizationText('CreateTemple', 'email')}</Text></View>
                  <View style={styles.fCollumn4}><Text style={styles.headerText}>{localizationText('ReportHeaders', 'address')}</Text></View>
                  <View style={styles.fCollumn5}><Text style={styles.headerText}>{localizationText('ReportHeaders', 'pincode')}</Text></View>
                  <View style={styles.fCollumn6}><Text style={styles.headerText}>{localizationText('ReportHeaders', 'location')}</Text></View>
                </View>
               {addressList?.map((data, index) => {
                                 return (
                                   <View key={index} style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
                                     <View style={styles.fCollumn1}><Text>{data.name}</Text></View>
                                     <View style={styles.fCollumn2}><Text>{data.mobileNo}</Text></View>
                                     <View style={styles.fCollumn3}><Text>{data.emailID}</Text></View>
                                     <View style={styles.fCollumn4}><Text>{data.userAddress}</Text></View>
                                     <View style={styles.fCollumn5}><Text>{data.pincode}</Text></View>
                                     <View style={styles.fCollumn6}>
                                            <Image style={{height:30,width:30}}  source={require('../../assets/images/gps.png')}/>
                                      
                                     </View>
                                   </View>
                                 )
                               })}
              </View>
            </ScrollView>
          </View>

        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

export default AddressBookList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  // categopryContainer: {
  //   marginRight: 16,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   height: 30,
  //   backgroundColor: appColors.themeColor,
  //   borderWidth: 2,
  //   paddingHorizontal: 10,
  //   borderRadius: 5,
  //   borderColor: appColors.themeColor,
  // },


  // categopryInactiveContainer: {
  //   marginRight: 16,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   height: 30,
  //   // backgroundColor: appColors.themeColor,
  //   borderWidth: 2,
  //   paddingHorizontal: 10,
  //   borderRadius: 5,
  //   borderColor: appColors.themeColor,
  // },


  // activeImageRound: {
  //   // backgroundColor: appColors.themeColor, borderRadius: 5, margin: 5, justifyContent: "center", alignItems: "center"
  // },
  // activeInImageRound: {
  //   //  borderWidth: 2, borderColor: appColors.themeColor, borderRadius: 5, margin: 5, justifyContent: "center", alignItems: "center"
  // },
  // iconStyle: {
  //   height: 20, width: 20,
  //   marginRight: 10
  // },

  // label: {
  //   marginTop: 16,
  //   fontSize: 16,
  //   marginBottom: 5,
  //   color: '#333',
  // },

  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    height: 40,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  picker: {
    fontSize: 14,
    paddingHorizontal: 10,
  },

  headerText: {
    fontWeight: 'bold',
  },

  collumn1: {
    flex: 0.24
  },

  collumn2: {
    flex: 0.23
  },
  collumn3: {
    flex: 0.25
  },
  collumn4: {
    flex: 0.28
  },



  fCollumn1: {
    width: 100
  },

  fCollumn2: {
    width: 110
  },
  fCollumn3: {
    width: 110
  },
  fCollumn4: {
    width: 120
  },

  fCollumn5: {
    width: 70
  },
  fCollumn6: {
    width: 70
  },



  inactiveText: {
    color: "black",
  },
  activeText: {
    color: "white",
  },
  filterButtonStyle: {
    width:150,
    marginTop:16,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    borderColor: appColors.themeColor,
    borderWidth: 0.5,
    paddingVertical: 5,
}

})
