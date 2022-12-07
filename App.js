import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/login'

export default function App() {
  return (
    <View style={styles.main}>
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
    
  },
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})