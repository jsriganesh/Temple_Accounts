import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LanguageSelect from './languageDropDown'


interface PageHeaderProps {
title:string
}
const PageHeader = ({title}:PageHeaderProps) => {
            const router = useRouter()
    
    return (
        <View style={styles.header}>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => {router.back()}}>
                    <Ionicons name='arrow-back' size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.appName}>{title}</Text>
            </View>
            <View style={{height:40}}>
                <LanguageSelect />
            </View>
        </View>

    )
}

export default PageHeader

const styles = StyleSheet.create({
    header: {
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        width:'100%'
        // backgroundColor: '#f8f8f8',
        // borderBottomWidth: 1,
        // borderBottomxColor: '#ddd',
    },
    appName: {
        fontSize: 18,
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