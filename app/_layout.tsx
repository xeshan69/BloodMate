import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {  Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function _layout()  {

  const [loaded,error] = useFonts({
    UbuntuBold:require('../assets/fonts/Ubuntu-Bold.ttf'),
    UbuntuBoldItalic:require('../assets/fonts/Ubuntu-BoldItalic.ttf'),
    UbuntuLight:require('../assets/fonts/Ubuntu-Light.ttf'),
    UbuntuMedium:require('../assets/fonts/Ubuntu-Medium.ttf'),
    UbuntuRegular:require('../assets/fonts/Ubuntu-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded||error) {
      SplashScreen.hideAsync();
    }
  }, [loaded,error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown:false}}/>
      <Stack.Screen name='(auth)' options={{headerShown:false}}/>
      <Stack.Screen name='(root)' options={{headerShown:false}}/>
      
    </Stack>
  )
}

