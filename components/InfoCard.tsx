import { View, Text,Image } from 'react-native'
import React from 'react'


const InfoCard = ()=> {
  return (
    <View className='  justify-center items-center p-10 bg-[#f6f6f6] rounded-3xl w-[345px] h-[200px]'>
        <View className='flex-1 flex-row justify-between'>
        <View className='flex-1 py-4 '>
            <Image source={require(`../assets/images/cardImage1.png`)} className='w-20 h-28  ' />
        </View>
      <View className="flex-1 max-w-52  gap-2">
        <Text className='font-UbuntuBold text-2xl w-40 '>BLOOD DONATION DRIVE</Text>
        <Text className='font-UbuntuBold text-lg text-white bg-secondary rounded-lg w-20 pl-2 '>31 JULY</Text>
        <Text className='font-UbuntuBold text-sm  '>10:00 AM ONWARDS</Text>
      </View>
        </View>
        
    </View>
  )
}

export default InfoCard