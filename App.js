import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/login'

export default function App() {
  return (
    <View>
      <View style={styles.logın}>
      <Login />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logın:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,
    
  }
})