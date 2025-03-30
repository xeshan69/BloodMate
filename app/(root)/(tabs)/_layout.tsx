import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'

const _layout = () => {



  return (
   <Tabs 
   initialRouteName='index'
   screenOptions={{
    headerShown:false,
    tabBarActiveTintColor:"#FF0052",
    tabBarStyle:{
    // position:"absolute",
    bottom:20,
    // left: 20,
    // right: 20,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "white",
    borderRadius: 50,
    height: 55,
    elevation: 5,
    }
   }}>
    <Tabs.Screen name="index" 
    options={{ 
        headerShown: false,
        animation:"shift",
        title:"",
        tabBarIcon:({focused})=>{
            return (
                <View className={`flex flex-row items-center justify-center `}>
                    <FontAwesome6 name="house" size={26} color={`${focused? "#FF0052":"#CCCCCC"}`} />
                </View>
            )
        },
        tabBarItemStyle:{            
            justifyContent:"center",
            alignItems:"center",
            elevation: 5,
        }
     }} />

    <Tabs.Screen name="donate" 
    options={{
        title:"",
        headerShown:false,
        tabBarIcon:({focused})=> {
            return(
                <View
                className='bg-primary rounded-full h-24 w-24 items-center justify-center '>
                    <Ionicons name="water-outline" size={30} color="white" />
                </View>
            )
        },
        animation:"shift",
        tabBarItemStyle:{
            justifyContent:"center",
            alignItems:"center",
            elevation: 5,
        }
        }}/>

    <Tabs.Screen name="profile" 
    options={{
        headerShown:false,
        animation:"shift",
        title:"",
        tabBarIcon:({focused})=>{
            return (
                <View className={`flex flex-row items-center justify-center `}>
                    <Ionicons name="person" size={26} color={`${focused? "#FF0052":"#CCCCCC"}`} />
                </View>
            )
        }
        }}/>
   </Tabs>
  )
}

export default _layout