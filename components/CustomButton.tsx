import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import {  CustomButtonProps } from '@/types/types'

const CustomButton = ({className,title,onPress,TextStyle}:CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View className={`w-52 h-12  justify-center items-center ${className}`}>
            <Text className={`text-lg font-UbuntuBold  ${TextStyle}`}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CustomButton