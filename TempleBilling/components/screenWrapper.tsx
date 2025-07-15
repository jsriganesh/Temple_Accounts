import React from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native';
import Footer from './footer';

interface ScreenWrapperProps {
  styles?: any;
  children?: React.ReactNode;
  hideFooter?: boolean;
}

const {height} = Dimensions.get('window');

const ScreenWrapper = ({styles,children,hideFooter}:ScreenWrapperProps) => {
    let paddingTop = Platform.OS === 'ios' ? height * 0.06 : 0 ;
  return (
    <View style={{ flex: 1, paddingTop: paddingTop, backgroundColor: '#fff', ...styles }}>
        <StatusBar barStyle={'light-content'}/>
        <View style={{ flex: 1, paddingBottom: Platform.OS === 'ios' ? 0 : 10 }}>
        {children}
        </View>
      {!hideFooter && <Footer/>}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({})