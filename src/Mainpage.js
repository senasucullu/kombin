import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Mainpage() {
  return (
    <View>
        <View >
            
            <Text>The 10 Fashion Trends You Need to Know About This Winter</Text>
            <Image 
            style={styles.image1}
            source={require('../image/1.png')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image1:{
        width:282,
        height:108,        

    }
})