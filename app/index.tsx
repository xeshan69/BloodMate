import { Redirect } from 'expo-router';
import '../global.css'
import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (

        <SafeAreaView>
          <StatusBar translucent={true}/>
          <View className=''>
          <Text className='text-black'>saasf</Text>
        </View>
        <Redirect href={"/(root)/(tabs)"} />
        </SafeAreaView>
  );
}
