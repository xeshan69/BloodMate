import { View, Text,Image } from 'react-native'
import React from 'react'


const InfoCard2 = ()=> {
  return (
    <View className='  justify-center items-center  bg-[#f6f6f6] rounded-3xl w-[345px] h-[200px]'>
        <View className='flex-1 flex-row justify-between'>
        
      <View className="flex-1 max-w-52  gap-2 pl-10 pt-10">
        <Text className='font-UbuntuBold text-lg text-secondary '>YOUR BLOOD</Text>
        <Text className='font-UbuntuBold text-3xl text-primary w-40 '>MAKE SOMEONE HAPPY</Text>
        <Text className='font-UbuntuBold text-sm text-gray '>READ STORY</Text>
      </View>
      <View className=''>
            <Image source={require(`../assets/images/cardImage2.png`)} className='rounded-br-3xl' />
        </View>
    </View>
        
    </View>
  )
}

export default InfoCard2