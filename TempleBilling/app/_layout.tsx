import { store } from '@/redux/store';
import { Stack } from 'expo-router';
import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';

const _layout = () => {
  return (
  <Provider store={store}>
    <MenuProvider>
  <Stack screenOptions={{headerShown:false}}></Stack>
  </MenuProvider>
  </Provider>)
}

export default _layout