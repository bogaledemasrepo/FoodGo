import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtpInput } from 'react-native-otp-entry'
import { VerifyOtpProbs } from '../App'
import Header from '../components/Header'
import CustomButton from '../components/CustomButton'

const VerifyOtp:React.FC<VerifyOtpProbs>= ({ navigation }) => {
 const  handleOtpChange=(text:string)=>{
console.log(text)
  }
  const handleVerifyOtp=()=>{
    
  }
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header>
        <Text style={{color:"#fff",fontSize:18,fontWeight:"600"}}>Verify Otp</Text>
      </Header>
      <View style={{paddingHorizontal:18,paddingVertical:24,gap:8}}> 
            <View style={{paddingTop:16}}>
              <Text style={{color:"#585858ff",textAlign:"justify"}}>
               Enter your otp wich has been sent to your email and completlyverify your account.
              </Text>
            </View>
            
        <OtpInput numberOfDigits={6} onTextChange={handleOtpChange}   theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle:{height:50,borderWidth:0,borderBottomWidth:2,borderRadius:0}
        }} />
        <Text style={{color:"#585858ff",textAlign:"center"}}>
               The code has beed sent to your email.
        </Text>
        <CustomButton onPress={handleVerifyOtp}>
          <Text style={{fontWeight:"bold",fontSize:18,color:"#fff",textAlign:"center"}}>Confirm</Text>
        </CustomButton>
      </View>
    </View>
  )
}

export default VerifyOtp

const styles = StyleSheet.create({
  container:{
    marginVertical:32
  }
})