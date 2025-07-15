import Header from '@/components/header';
import PageFilterDates from '@/components/pageFilterDates';
import ScreenWrapper from '@/components/screenWrapper';
import { converNumberToRupee, localizationText } from '@/constants/commonMenthod';
import { appColors } from '@/constants/constant';
import { receiptsReportData } from '@/constants/sampleResponces';
import { categorieProps } from '@/interface/commonInterface';
import { useAppSelector } from '@/redux/store';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Reports = () => {
  const { categorys } = useAppSelector((state) => state.commonData)
  // const [options, selectOptions] = useState<categoriesOptionsProps[] | []>([]);
  // const [selectedType, setSelectedType] = useState('');

  const [selectedCategory, setSelectedCategory] = useState<categorieProps | null>(categorys[0]);

  // useEffect(() => {
  //   if (categorys && categorys.length > 0) {
  //     setSelectedCategory(categorys[0]);
  //   }
  // }, [categorys]);



  // useEffect(() => {
  //   if (selectedCategory && selectedCategory.id) {
  //     const options = categorys.find((cat) => cat.id === selectedCategory.id)?.options || [];
  //     selectOptions(options);
  //   }
  // }, [selectedCategory]);


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
                    <TouchableOpacity style={selectedCategory?.id == category.id ?  styles.categopryContainer : styles.categopryInactiveContainer} onPress={() => {
                      console.log('category', category);
                      console.log('categorys', categorys);
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

          <PageFilterDates filterDateDetails={(date) => {
            console.log('date', date);
          }} />

          {/* {selectedCategory?.id != 3 ? 
          <View style={{ marginTop: 16,flex:1 }}>
              <View style={{ display: 'flex',flexDirection:'row' }}>
                <View style={styles.collumn1}><Text style={styles.headerText}>{localizationText('Common','date')}</Text></View>
                <View style={styles.collumn2}><Text style={styles.headerText}>{localizationText('Common','amount')}</Text></View>
                <View style={styles.collumn3}><Text style={styles.headerText}>{localizationText('Common','paymentType')}</Text></View>
                <View style={styles.collumn4}><Text style={styles.headerText}>{localizationText('Common','comments')}</Text></View>
              </View>
              {inComeReportData.map((data,index)=>{
                return (
                  <View key={index} style={{ display: 'flex',flexDirection:'row' ,marginVertical: 5}}>
                    <View style={[styles.collumn1]}><Text>{data.date}</Text></View>
                    <View style={styles.collumn2}><Text>{converNumberToRupee(data.amount)}</Text></View>
                    <View style={styles.collumn3}><Text>{data.paymentType}</Text></View>
                    <View style={styles.collumn4}><Text>{data.comments}</Text></View>
                  </View>
                )
              })}
          </View>
            : */}
           <View style={{ marginTop: 16,flex:1 }}>
              <ScrollView horizontal>
                <View>
                <View style={{ display: 'flex',flexDirection:'row' }}>
                  <View style={styles.fCollumn1}><Text style={styles.headerText}>{localizationText('Common','date')}</Text></View>
                  <View style={styles.fCollumn2}><Text style={styles.headerText}>{localizationText('Common','name')}</Text></View>
                  <View style={styles.fCollumn3}><Text style={styles.headerText}>{localizationText('Common','amount')}</Text></View>
                  <View style={styles.fCollumn4}><Text style={styles.headerText}>{localizationText('Common','paymentType')}</Text></View>
                  <View style={styles.fCollumn5}><Text style={styles.headerText}>{localizationText('Common','comments')}</Text></View>
                </View>
                {receiptsReportData.map((data,index)=>{
                  return (
                    <View key={index} style={{ display: 'flex',flexDirection:'row' ,marginVertical: 5}}>
                      <View style={styles.fCollumn1}><Text>{data.date}</Text></View>
                      <View style={styles.fCollumn2}><Text>{data.name}</Text></View>
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
    // marginTop: 16,
    padding: 16,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  // categopryContainer: {
  //   marginRight: 16,
  //   alignItems: 'center',
  // },
  // activeImageRound: {
  //   height: 40,width: 40,  backgroundColor: appColors.themeColor, borderRadius: 100, margin: 5, justifyContent: "center", alignItems: "center"
  // },
  // activeInImageRound: {
  //   height: 40, width: 40, borderWidth: 2, borderColor: appColors.themeColor, borderRadius: 100, margin: 5, justifyContent: "center", alignItems: "center"
  // },
  // iconStyle: {
  //   height: 25, width: 25
  // },


  categopryContainer: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
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
    flexDirection:'row',
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
    marginRight:10
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
    flex:0.24
  },

  collumn2: {
    flex:0.23
  },
  collumn3: {
    flex:0.25
  },
  collumn4: {
    flex:0.28
  },



  fCollumn1: {
    width:100
  },

  fCollumn2: {
    width:100
  },
  fCollumn3: {
    width:100
  },
  fCollumn4: {
    width:100
  },

  fCollumn5: {
    width:200
  },

  inactiveText:{
    color:"black",
  },
  activeText:{
    color:"white",
  }
})
