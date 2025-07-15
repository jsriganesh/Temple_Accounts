import React from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native';
import Footer from './footer';
import { useKeyboardStatus } from './useKeyboardStatus';
import { SafeAreaView } from 'react-native-safe-area-context';
interface ScreenWrapperProps {
  styles?: any;
  children?: React.ReactNode;
  hideFooter?: boolean;
}

const {height} = Dimensions.get('window');

const ScreenWrapper = ({styles,children,hideFooter}:ScreenWrapperProps) => {
    const keyboardVisible = useKeyboardStatus();  

    let paddingTop = Platform.OS === 'ios' ? height * 0.06 : 0 ;
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, paddingTop: paddingTop, backgroundColor: '#fff', ...styles }}>
        <StatusBar barStyle={'dark-content'}/>
        <View style={{ flex: 1, paddingBottom: Platform.OS === 'ios' ? 0 : 10 }}>
        {children}
        </View>
      {!keyboardVisible && !hideFooter && <Footer/>}
    </View>
    </SafeAreaView>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})