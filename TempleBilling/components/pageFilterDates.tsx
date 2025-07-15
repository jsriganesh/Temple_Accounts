import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
// import { colors } from  '../../utils/colors';
// import {
//     Text10PXSemiBold,
//     Text12PXBold,
//     Text14PXBold,
// } from '../styledComponents/labels';
// import { TouchableOpacity } fro÷m "react-native-gesture-handler";
// import Icons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

// import { DateFilterOptions } from '../../utils/constant';

import moment from 'moment';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger,
} from 'react-native-popup-menu';
// import DateTimePickerComponent from '../dateAndTimePicker';
// import { FilterDatesProps } from '../../interface/common';
import { localizationText } from '@/constants/commonMenthod';
import { appColors, DateFilterOptions } from '@/constants/constant';
import { FilterDatesProps } from '@/interface/commonInterface';
import DateTimePickerComponent from './dateAndTimePicker';

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

interface PageFilterDatesProps {
    onClickAdd?: () => void;
    hideTopProfileDetails?: boolean;
    hideActiveInactive?: boolean;
    showDateFilter?: boolean;
    filterDateDetails:(dates:FilterDatesProps)=> void
    generateReports?: () => void;
}
const PageFilterDates = ({
    filterDateDetails,
    generateReports
}: PageFilterDatesProps) => {

    const [fromDate, setFromDate] = useState<Date>(new Date())
    const [toDate, setToDate] = useState<Date>(new Date())
    const [showDatePickerKey, setShowDatePickerKey] = useState<string>('')

    useEffect(()=>{
        filterDateDetails({fromDate,toDate})
    },[fromDate,toDate])

    const  getStartAndEndDate=(option: string):FilterDatesProps =>{
        const today = new Date();
        let fromDate: Date;
        let toDate: Date = new Date(today);
    
        switch (option) {
            case 'today':
                fromDate = new Date(today);
                break;
            case 'yesterday':
                fromDate = new Date(today);
                fromDate.setDate(today.getDate() - 1);
                toDate = new Date(fromDate);
                break;
            case 'last7days':
                fromDate = new Date(today);
                fromDate.setDate(today.getDate() - 7);
                break;
            case 'this month':
                fromDate = new Date(today.getFullYear(), today.getMonth(), 1);
                break;
            case 'last month':
                fromDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                toDate = new Date(today.getFullYear(), today.getMonth(), 0);
                break;
            case 'last 2 months':
                fromDate = new Date(today.getFullYear(), today.getMonth() - 2, 1);
                toDate = new Date(today.getFullYear(), today.getMonth(), 0);
                break;
            case 'last 3 months':
                fromDate = new Date(today.getFullYear(), today.getMonth() - 3, 1);
                toDate = new Date(today.getFullYear(), today.getMonth(), 0);
                break;
            case 'last 6 months':
                fromDate = new Date(today.getFullYear(), today.getMonth() - 6, 1);
                toDate = new Date(today.getFullYear(), today.getMonth(), 0);
                break;
            case 'this year':
                fromDate = new Date(today.getFullYear(), 0, 1);
                break;
            default:
                throw new Error('Invalid filter option');
        }

        setFromDate(fromDate)
        setToDate(toDate)
        return { fromDate, toDate };
    }
    


    return (

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', }} onPress={()=>setShowDatePickerKey('from')}>

                    <Ionicons
                        name="calendar"
                        size={25}
                        color={appColors.themeColor}
                    />
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ color: 'black',fontSize:10 }}>{localizationText('Common','fromDate')}</Text>
                        <Text style={{ color: appColors.themeColor ,fontSize:12}}>{moment(fromDate).format('DD-MM-YYYY')}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', marginLeft: 18 }} onPress={()=>setShowDatePickerKey('to')}>

                    <Ionicons
                        name="calendar"
                        size={25}
                        color={appColors.themeColor}
                    />
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ color: 'black' ,fontSize:10}}>{localizationText('Common','toDate')}</Text>
                        <Text style={{ color: appColors.themeColor ,fontSize:12}}>{moment(toDate).format('DD-MM-YYYY')}</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <Menu>
                <MenuTrigger customStyles={triggerStyles}>
                    <View
                        // onPress={()=>{ }}
                        style={styles.filterButtonStyle}>
                        <Text style={{ color: appColors.themeColor, marginRight: 10 ,fontSize:14}}>
                            {localizationText('Common','filter')}
                        </Text>

                        <Ionicons
                            name="filter-circle-outline"
                            size={20}
                            color={appColors.themeColor}
                        />
                    </View>
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles}>
                    {DateFilterOptions.map((data, index) => {
                        return (
                            <MenuOption
                                key={index}
                                onSelect={() =>getStartAndEndDate(data.key)}>
                                <Text style={{fontSize:12}}>{localizationText(data.parentKey,data.childKey)}</Text>
                            </MenuOption>
                        );
                    })}
                </MenuOptions>
            </Menu>


            <TouchableOpacity onPress={() => {generateReports && generateReports()}}>
            <Ionicons
                            name="cloud-download"
                            size={22}
                            color={appColors.themeColor}
                        />
            </TouchableOpacity>

            {showDatePickerKey && (
                        <DateTimePickerComponent
                            minimumDate={showDatePickerKey === 'from' ? undefined :fromDate}
                            maximumDate={showDatePickerKey === 'from' ? toDate :undefined}
                            mode="date"
                            updateDate={(date) => {
                                if(showDatePickerKey){
                                if (showDatePickerKey === 'from') {
                                    setFromDate(date)
                                } else {
                                    setToDate(date)
                                }
                                setShowDatePickerKey('');
                            }
                            }}
                            date={showDatePickerKey === 'from' ? fromDate:toDate}
                        />
                    )}
        </View>

    );
};

export default PageFilterDates;

const styles = StyleSheet.create({
    filterButtonStyle: {
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: appColors.themeColor,
        borderWidth: 0.5,
        paddingVertical: 5,
    }
});
