import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image,KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from '../firebase'
import { useNavigation } from '@react-navigation/native';


export default function Login() {


const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const navigation = useNavigation()

useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged(user=> {
    if(user){
      navigation.navigate("Mainpage")
    }
  })
  return unsubscribe
},[])


const handleCreateAccount = () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    console.log('Account created!')
    const user = userCredential.user;
    console.log(user)
  })
  .catch(error => {console.log(error);})
}

const handleLogIn =()=>{
  signInWithEmailAndPassword(auth,email,password)
  .then(()=>{
    console.log('Signed!')
    const user = userCredential.user;
    console.log(user)
  })
  .catch(error => {console.log(error);})
}

return (
  <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}>
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Image style={styles.ımage}
        source={require('../image/1.jpg')}
        />
        
        
        <View style={styles.main}>
        <View style={styles.textınput}>
        <TextInput style={{fontSize:12,fontWeight:'300'}} 
        placeholder='Username or E-mail'
        value={email}
        onChangeText = {text => setEmail(text)}
        
        />
        </View>
        </View>
     
     
     <View style={styles.main}>
        <View style={styles.textınput}>
        <TextInput style={{fontSize:12,fontWeight:'300'}}
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
       />
        </View>
      </View>
      
      
   
      <View style={styles.login}>
      <TouchableOpacity
     onPress={handleLogIn}
     >
     <View style={[styles.main]}>
   
        <Text style={styles.text}>Log In </Text>
        
     
      </View>
      </TouchableOpacity>
      </View>
      
      <View style={{marginTop:30}}>

      <TouchableOpacity>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:12,fontWeight:'300'}}>Forgot Password?</Text>
        </View>
      </TouchableOpacity>
      </View>
      
      
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity>
        <View style={styles.google} >
        <AntDesign name="googleplus" size={24} color="black" style={{marginLeft:10}} />
        <Text style={{marginRight:50,}}>Sign In with Google </Text>
        </View>
        </TouchableOpacity>
        </View>
      
      <View style={{flexDirection:'row',marginTop:30,justifyContent:'center'}}>
        <View>
          <Text style={{fontSize:12}}>Don’t have an account? </Text>
        </View>
        <TouchableOpacity>
        <View>
          <Text style={{fontSize:12,color:'blue'}}>Create One</Text>
        </View>
        </TouchableOpacity>
      </View>

    </View>
    </KeyboardAvoidingView>
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
  login:{
    backgroundColor:'#C13061',
    justifyContent:'center',
    borderRadius:5,
    padding:2,
    alignItems:'center',
    width:'60%',
    marginTop:30,
    
    


  },
  text:{
    color:'white',
    fontStyle:'Raleway',
    fontSize:16,
    width:'100%',
    
  },
  main:{
    justifyContent:'center',
    alignItems:'center',
    width:'60%'

  },
  ımage:{
    width:253,
    height:158,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'pink'
  },
  google:{
    width:'55%',
    backgroundColor:'#E4E4E4',
    borderRadius:5,
    padding:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:50,

  },
  container:{
    flex:1,

  }
  
})