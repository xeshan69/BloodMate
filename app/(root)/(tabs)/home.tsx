import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import InfoCard from '@/components/InfoCard'
import { StatusBar } from 'expo-status-bar'
import InfoCard2 from '@/components/InfoCard2'

const index = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar style="dark"  />
      <View className='flex flex-row justify-between pl-4 '>
        <View className=''>
          <Text className='text-black text-lg font-UbuntuRegular mb-3'>WELCOME</Text>
          <Text className='text-black text-2xl font-UbuntuBold'>ZEESHAN MALIK</Text>
        </View>
        <TouchableOpacity className='pr-6 pt-3'>
          <FontAwesome name="bell" size={28} color="gray" />
        </TouchableOpacity>
      </View>

      <ScrollView 
      horizontal={true}>
        <View className='gap-4 flex-row bg-green-300 p-2'>
        <InfoCard />
        <InfoCard2 />
        </View>
      </ScrollView>
      
    </SafeAreaView>


  )
}

export default index