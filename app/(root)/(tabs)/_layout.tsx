import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'

const _layout = () => {



  return (
   <Tabs 
   initialRouteName='home'
   screenOptions={{
    headerShown:false,
    tabBarActiveTintColor:"#FF0052",
    tabBarStyle:{   
    bottom:22,
    backgroundColor: "white",
    borderRadius: 50,
    height: 55,
    
    }
   }}>
    <Tabs.Screen name="home" 
    options={{ 
        headerShown: false,
        animation:"shift",
        title:"",
        tabBarIcon:({focused})=>{
            return (
                <View className={`flex flex-row items-center justify-center `}>
                    <FontAwesome6 name="house" size={26} color={`${focused? "#FF0052":"#333333"}`} />
                </View>
            )
        },
        
        tabBarItemStyle:{            
            alignItems:"center",
            height:50,
            // backgroundColor:"yellow", 
            flex:1,
           
        }
     }} />

    <Tabs.Screen name="donate" 
    options={{
        title:"",
        headerShown:false,
        tabBarIcon:({focused})=> {
            return(
                <View
                className={`${focused?'bg-primary':'bg-secondary'} rounded-full h-24 w-24 items-center justify-center`}>
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
                    <Ionicons name="person" size={26} color={`${focused? "#FF0052":"#333333"}`} />
                </View>
            )
        }
        }}/>
   </Tabs>
  )
}

export default _layout