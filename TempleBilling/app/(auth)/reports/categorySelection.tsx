import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useAppSelector } from '@/redux/store'
import { categorieProps } from '@/interface/commonInterface'

interface CategorySelectionProps {
    selectedCategory:categorieProps | null
    setSelectedCategory:(data : categorieProps | null) => void
}
const CategorySelection = ({selectedCategory,setSelectedCategory}:CategorySelectionProps) => {
      const { categorys } = useAppSelector((state) => state.commonData)
    
  return (
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
  )
}

export default CategorySelection

import { StyleSheet } from 'react-native'
import { appColors } from '@/constants/constant'
import { localizationText } from '@/constants/commonMenthod'

const styles = StyleSheet.create({
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
      inactiveText: {
        color: "black",
      },
      activeText: {
        color: "white",
      },
    
})