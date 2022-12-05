import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'


export default function login() {
  return (
    <View>
        <Image style={styles.ımage}
        source={require('../image/1.jpg')}
        />
        
        
        <View style={styles.textınput}>
        <View>
        <TextInput style={{fontSize:12,fontWeight:'200'}}>Username or email address</TextInput>
        </View>
        </View>
     
     
     <View style={styles.textınput}>
        <View>
        <TextInput style={{fontSize:12,fontWeight:'200'}}>Password</TextInput>
        </View>
      </View>
     <TouchableOpacity>
      <View style={styles.logın}>
        <View style={styles.main}>
        <Text style={styles.text}>Log In</Text>
        </View>
      </View>
      </TouchableOpacity>
      <View>
      <TouchableOpacity>
      <View style={styles.signup}>
        <View style={styles.main}>
        <Text style={styles.text}>Sign Up</Text>
        </View>
      </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textınput:{
    height:29,
    width:242,
    backgroundColor:'#E4E4E4',
    alignContent:'center',
    justifyContent:'center',
    borderRadius:5,
    marginTop:10,

  },
  logın:{
    marginTop:30,
    height:29,
    width:242,
    backgroundColor:'#C13061',
    alignContent:'center',
    justifyContent:'center',
    borderRadius:5,


  },
  text:{
    color:'white',
    fontStyle:'Raleway',
    fontSize:16,
  },
  main:{
    justifyContent:'center',
    alignItems:'center',
  },
  signup:{
    height:29,
    width:242,
    backgroundColor:'#ABABAB',
    alignContent:'center',
    justifyContent:'center',
    borderRadius:5,
    marginTop:10,

  },
  ımage:{
    width:253,
    height:158,
  }
  
})