import { StyleSheet, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login'
import Mainpage from './src/Mainpage'
import CreateAccount from './src/CreateAccount';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
             
        <Stack.Screen options={{ headerShown:false }} name='CreateAccount' component={CreateAccount}/>
       <Stack.Screen  name='Mainpage' component={Mainpage}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  login:{
    alignItems:'center',
    justifyContent:'center',
    
  },
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})