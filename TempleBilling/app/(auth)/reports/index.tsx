import Header from '@/components/header';
import PageFilterDates from '@/components/pageFilterDates';
import ScreenWrapper from '@/components/screenWrapper';
import { converNumberToRupee, localizationText } from '@/constants/commonMenthod';
import { appColors } from '@/constants/constant';
import { receiptsReportData } from '@/constants/sampleResponces';
import { categorieProps, categoriesOptionsProps, FilterDatesProps, ReportDataProps } from '@/interface/commonInterface';
import { useAppSelector } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { generatePDF } from './pdfTemplate';
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

const Reports = () => {
  const [repotDetails,setRepotDetails]=useState<ReportDataProps| null>(null)
  const { categorys, userDetails } = useAppSelector((state) => state.commonData)
  const [dates, setDates] = useState<FilterDatesProps>({ fromDate: new Date(), toDate: new Date() })
  const [selectedOption, setSelectedOption] = useState<categoriesOptionsProps | null>();

  const [selectedCategory, setSelectedCategory] = useState<categorieProps | null>(categorys[0]);
  const options = selectedCategory && selectedCategory.id ? categorys.find((cat) => cat.id == selectedCategory.id)?.options || []
  : []

  const generateReports = () => {

    const templeDetails = {
      templeName: "அருள் மிகு ஸ்ரீ தட்சிணாமூர்த்தி கோவில்",
      templeAddress: "திருவாரூர் மாவட்டம், திருவாரூர்",
      templeImage: "https://thumbs.dreamstime.com/b/indian-temple-3396438.jpg",
    }

    const data = {
      templeDetails: templeDetails,
      // reportType: localizationText('Common', 'incomeType'),
      reportType: 'Income Type',
      report: receiptsReportData,
      reportHeaders: [
        // localizationText('ReportHeaders', 'id'),
        // localizationText('ReportHeaders', 'date'),
        // localizationText('ReportHeaders', 'name'),
        // localizationText('ReportHeaders', 'type'),
        // localizationText('ReportHeaders', 'amount'),
        // localizationText('ReportHeaders', 'paymentType'),
        // localizationText('ReportHeaders', 'comments'),
        'ID',
        'Date',
        'Name',
        'Type',
        'Amount',
        'Payment Type',
        'Comments',
      ]
    }
    generatePDF(data)
  }

  console.log(repotDetails, 'repotDetails?.list.length');
  const getReport = () => {

    const fromDate = dates.fromDate
    const clonedDate = new Date(fromDate.getTime()); // Clone using getTime()
    clonedDate.setDate(clonedDate.getDate() - 1);
    const data = {
      fromDate: moment(clonedDate).format('YYYY-MM-DD') + 'T:18:30.00Z',
      toDate: moment(dates.toDate).format('YYYY-MM-DD') + 'T:18:29.59Z',
      userID: userDetails.userID,
      templeID: userDetails.templeDetails[0].templeID,
      categoryID: selectedCategory?.id,
      typeID: selectedOption ? selectedOption.id : '',
    }

    postRequest(EndPoint.billHistory, data, (responce) => {
        if (responce.list.length > 0) {
          console.log('receiptsReportData', responce);
          setRepotDetails(responce);
        } else {
          setRepotDetails(null);
        }
    }
      , (error) => {
        console.log('error', error);
      }
    )
  }

  useEffect(() => {
    getReport()
  }, [selectedCategory, dates,selectedOption]);


  return (
    <ScreenWrapper>
      <Header />

      <View style={styles.container}>
        <ScrollView>
          <View>
            <ScrollView horizontal>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                {
                  categorys.map((category, index) => (
                    <TouchableOpacity style={selectedCategory?.id == category.id ? styles.categopryContainer : styles.categopryInactiveContainer} onPress={() => {
                      setSelectedCategory(category)
                    }} key={index}>
                      <View style={selectedCategory?.id == category.id ? styles.activeImageRound : styles.activeInImageRound}>
                        <Image source={category.image} style={styles.iconStyle} tintColor={selectedCategory?.id == category.id ? "white" : 'black'} />
                      </View>
                      <Text style={selectedCategory?.id == category.id ? styles.activeText : styles.inactiveText}>{localizationText(category.labelParentKey, category.labelChildKey)}</Text>
                    </TouchableOpacity>
                  ))
                }
              </View>
            </ScrollView>
          </View>

          <View>
          <Menu>
                <MenuTrigger customStyles={triggerStyles}>
                    <View
                        style={styles.filterButtonStyle}>
                        <Text style={{ color: appColors.themeColor, marginRight: 10 ,fontSize:14}}>
                            { selectedOption ? localizationText(selectedOption.labelParentKey,selectedOption.labelChildKey) : localizationText('Common','selectType')}
                        </Text>

                        <Ionicons
                            name='chevron-down'
                            size={20}
                            color={appColors.themeColor}
                        />
                    </View>
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles}>
                          <MenuOption
                                key={-1}
                                onSelect={() =>setSelectedOption(null)}>
                                <Text style={{fontSize:12}}>{localizationText('Common','selectType')}</Text>
                            </MenuOption>
                    {options.map((data, index) => {
                        return (
                            <MenuOption
                                key={index}
                                onSelect={() =>setSelectedOption(data)}>
                                <Text style={{fontSize:12}}>{localizationText(data.labelParentKey,data.labelChildKey)}</Text>
                            </MenuOption>
                        );
                    })}
                </MenuOptions>
            </Menu>

          </View>

          <PageFilterDates
            generateReports={generateReports}
            filterDateDetails={(date) => {
              setDates(date);
              console.log('date', date);
            }} />

          <View style={{ marginTop: 16, flex: 1 }}>
            <ScrollView horizontal>
              <View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <View style={styles.fCollumn1}><Text style={styles.headerText}>{localizationText('Common', 'date')}</Text></View>
                  <View style={styles.fCollumn3}><Text style={styles.headerText}>{localizationText('Donation', 'donationType')}</Text></View>

                  <View style={[styles.fCollumn2,selectedCategory?.id != 3 && {display:'none'}]}><Text style={styles.headerText}>{localizationText('Common', 'name')}</Text></View>
                  <View style={styles.fCollumn3}><Text style={styles.headerText}>{localizationText('Common', 'amount')}</Text></View>
                  <View style={styles.fCollumn4}><Text style={styles.headerText}>{localizationText('Common', 'paymentType')}</Text></View>
                  <View style={styles.fCollumn5}><Text style={styles.headerText}>{localizationText('Common', 'comments')}</Text></View>
                </View>
                {repotDetails?.list.map((data, index) => {
                  return (
                    <View key={index} style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}>
                      <View style={styles.fCollumn1}><Text>{moment(data.createdDate).format('YYYY-MM-DD')}</Text></View>
                      <View style={styles.fCollumn3}><Text>{data.typeName}</Text></View>
                      <View style={[styles.fCollumn2,selectedCategory?.id != 3 && {display:'none'}]}><Text>{data.personName || '-'}</Text></View>
                      <View style={styles.fCollumn3}><Text>{converNumberToRupee(data.amount)}</Text></View>
                      <View style={styles.fCollumn4}><Text>{data.paymentType}</Text></View>
                      <View style={styles.fCollumn5}><Text>{data.comments}</Text></View>
                    </View>
                  )
                })}
              </View>
            </ScrollView>
          </View>
          {/* }  */}
        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

export default Reports

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  categopryContainer: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 30,
    backgroundColor: appColors.themeColor,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: appColors.themeColor,
  },


  categopryInactiveContainer: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 30,
    // backgroundColor: appColors.themeColor,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: appColors.themeColor,
  },


  activeImageRound: {
    // backgroundColor: appColors.themeColor, borderRadius: 5, margin: 5, justifyContent: "center", alignItems: "center"
  },
  activeInImageRound: {
    //  borderWidth: 2, borderColor: appColors.themeColor, borderRadius: 5, margin: 5, justifyContent: "center", alignItems: "center"
  },
  iconStyle: {
    height: 20, width: 20,
    marginRight: 10
  },

  label: {
    marginTop: 16,
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },

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
    width: 100
  },
  fCollumn3: {
    width: 100
  },
  fCollumn4: {
    width: 100
  },

  fCollumn5: {
    width: 200
  },

  inactiveText: {
    color: "black",
  },
  activeText: {
    color: "white",
  },
  filterButtonStyle: {
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
