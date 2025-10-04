import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import CustomCheckBox from '../components/CustomCheckBox'
import { Image } from 'expo-image'
import Header from '../components/Header'
import { ForgotPasswordcreenProbs } from '../App'

const ForgotPassword:React.FC<ForgotPasswordcreenProbs> = ({ navigation }) => {
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
      <Header>
        <Text style={{color:"#fff",fontSize:18,fontWeight:"600"}}>Forgot Password</Text>
      </Header>
      <View style={{paddingHorizontal:18,paddingVertical:24,gap:8}}> 
      <View style={{paddingTop:16}}>
        <Text style={{color:"#585858ff",textAlign:"justify"}}>
          Enter your email associated with your account and we will send an email with a code to reset your password.
        </Text>
      </View>
        <CustomInput placeholder='Enter your email' onChangeText={()=>{}} label='Email' />
        <CustomButton onPress={submitHandler}>
          <Text style={{fontWeight:"bold",fontSize:18,color:"#fff",textAlign:"center"}}>Send</Text>
        </CustomButton>
      </View>
      <StatusBar style="light" hidden />
    </View>
  )
}

export default ForgotPassword


const styles = StyleSheet.create({})