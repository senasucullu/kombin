import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 



export default function login() {
  return (
    <View>
        <Image style={styles.ımage}
        source={require('../image/1.jpg')}
        />
        
        
        <View style={styles.main}>
        <View style={styles.textınput}>
        <TextInput style={{fontSize:12,fontWeight:'300'}} 
        placeholder='Username or email address' />
        </View>
        </View>
     
     
     <View style={styles.main}>
        <View style={styles.textınput}>
        <TextInput style={{fontSize:12,fontWeight:'300'}}
        placeholder='Password'
       />
        </View>
      </View>
     <TouchableOpacity>
      <View style={styles.logın}>
        <View style={styles.main}>
        <Text style={styles.text}>Sign In </Text>
        </View>
      </View>
      </TouchableOpacity>
      <View>
      <TouchableOpacity>
        <View style={{marginTop:15,alignItems:'center'}}>
          <Text style={{fontSize:12,fontWeight:'300'}}>Forgot Password?</Text>
        </View>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'pink'}}>
        <View >
        <AntDesign name="googleplus" size={24} color="black" />
        <Text>Sign In with Google </Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textınput:{
    
    width:'100%',
    backgroundColor:'#E4E4E4',
    alignContent:'center',
    justifyContent:'center',
    borderRadius:5,
    marginTop:10,

  },
  logın:{
    marginTop:30,
    width:'100%',
    backgroundColor:'#C13061',
    alignContent:'center',
    justifyContent:'center',
    borderRadius:5,
    padding:2,


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
  ımage:{
    width:253,
    height:158,
  },
  google:{
    marginTop:30,
    width:'100%',
    backgroundColor:'rgba(236, 236, 236, 0.5)',
    borderRadius:5,
    padding:2,
    flexDirection:'row',   

  }
  
})