import { View, Text,Image, ImageBackground, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const index = () => {
  return (
    <View className='flex-1  bg-white items-center '>
        <StatusBar style='dark' translucent={true}/>       
        <View className=' w-full h-[60%] ' style={{ borderBottomRightRadius: 140 }}>
            <ImageBackground 
            className=' bg-[#f7f7f7] flex-1 '             
            source={require("../../assets/images/background.png")}
            resizeMode='cover'
            imageStyle={{ borderBottomRightRadius: 140 }}
            style={{borderBottomRightRadius:140}} >
            <Image className='flex-1 'style={{ borderBottomRightRadius: 140 }} source={require("../../assets/images/getStartFemale.png")} />   
            </ImageBackground>              
        </View>
        <View className='flex-1 justify-evenly w-full '>
            <View className='items-center justify-between '>
            <Text  className='font-UbuntuRegular text-[14px] text-[#666666] mb-2'>BLOOD DONATION IS A</Text>
            <Text  className='font-UbuntuMedium text-[20px] text-[#666666]'>GREAT ACT OF KINDNESS</Text>
            </View>
            <View className=' justify-center  items-center'>
                <CustomButton title='NEXT' 
                className='bg-primary rounded-full w-52 h-16'
                TextStyle='text-white'/>

                <CustomButton title='SKIP TO HOME'
                className=' w-52 h-12 mt-6'
                TextStyle='text-gray '/>
            </View>
           
        </View>
    </View>
  )
}

export default index