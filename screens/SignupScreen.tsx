import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { Image } from 'expo-image'
import Header from '../components/Header'
import { SignupScreenProbs } from '../App'

const SignupScreen:React.FC<SignupScreenProbs> = ({ navigation }) => {
  const onForgotPassword=()=>{
    navigation.navigate('forgotPassword');
  }
   const onSignUp=()=>{
    navigation.navigate('signup');
  }

  const submitHandler=()=>{
    console.log("Form submitted.")
  }
  
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
    <SafeAreaView >
      <Header>
        <Text style={{color:"#fff",fontSize:18,fontWeight:"600"}}>Sign Up</Text>
      </Header>
      <View style={{paddingHorizontal:8,paddingVertical:24,gap:8}}> 
        <CustomInput placeholder='Enter your email' onChangeText={()=>{}} label='Email' />
        <CustomInput placeholder='Enter your password' onChangeText={()=>{}} label='Password' />
         <CustomInput placeholder='Enter your password' onChangeText={()=>{}} label='Confirm password' />
        <CustomButton onPress={submitHandler}>
          <Text style={{fontWeight:"bold",fontSize:18,color:"#fff",textAlign:"center"}}>Sign Up</Text>
        </CustomButton>
        <View style={{width:'100%',height:32,display:"flex",position:'relative',alignItems:"center",justifyContent:"center"}}>
          <View style={{width:"100%",height:2,backgroundColor:"#8d8d8d44",position:"absolute",marginVertical:23}}></View>
          <Text style={{fontSize:18,fontWeight:"600",backgroundColor:"#fff",padding:4,color:"#646464ff"}}>Or</Text>
        </View>
        <CustomButton bg="#fff" onPress={()=>{}}>
          <View style={{flex:1,display:"flex",flexDirection:"row",gap:8,alignItems:"center",justifyContent:"center"}}>

          <Image source={require("../assets/images/google.png")} style={{width:28,height:"100%"}}/>
          <Text style={{fontWeight:"500",fontSize:16,textAlign:"center"}}>Continue with google</Text>
          </View>
        </CustomButton>
        <CustomButton  bg="#fff"  onPress={()=>{}}>
          <View style={{flex:1,display:"flex",flexDirection:"row",gap:8,alignItems:"center",justifyContent:"center"}}>

          <Image source={require("../assets/images/facebook.png")} style={{width:28,height:"100%"}}/>
          <Text style={{fontWeight:"500",fontSize:16,textAlign:"center"}}>Continue with facebook</Text>
          </View>
        </CustomButton>
      </View>
      <StatusBar style="light" hidden />
    </SafeAreaView>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})