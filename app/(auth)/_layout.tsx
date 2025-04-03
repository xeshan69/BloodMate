import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='onboarding1' options={{headerShown:false}}/> 
        <Stack.Screen name='onboarding2' options={{headerShown:false}}/> 
    </Stack>
  )
}

export default _layout