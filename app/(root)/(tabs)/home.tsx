import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import InfoCard from '@/components/InfoCard'

const index = () => {
  return (
    <SafeAreaView className='flex-1'>
      
      <View className='flex-1 flex-row justify-between pl-2'>
        <View className=''>
          <Text className='text-black text-lg font-UbuntuRegular mb-3'>WELCOME</Text>
          <Text className='text-black text-2xl font-UbuntuBold'>ZEESHAN MALIK</Text>
        </View>
        <TouchableOpacity className='pr-6 pt-3'>
          <FontAwesome name="bell" size={28} color="gray" />
        </TouchableOpacity>
      </View>

      <View className='flex-1 flex-row justify-between pl-2'>
        <InfoCard title=''/>
      </View>
    </SafeAreaView>


  )
}

export default index