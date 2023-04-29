import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CreateAccount = () => {
  return (
    
    <View >
    
    
    <View style={{}}> 
            <Text></Text>
    </View>
    
    
    <View style={{justifyContent:'center',alignItems:'center',}}>
    <View>
      <Text>CreateAccount</Text>
    </View>
    <View>
        <TextInput 
        placeholder='User Name'
        />
    </View>
    <View>
        <TextInput 
        placeholder='Birthday'
        />
    </View>
    <View>
        <TextInput 
        placeholder='Gender'
        />
    </View>
    </View>
    
    </View>
  
  )
}

export default CreateAccount

const styles = StyleSheet.create({})