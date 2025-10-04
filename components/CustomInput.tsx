import { StyleSheet, Text, View,TextInput } from 'react-native'
import GlobalStyles from '../styles'
interface Probs{
  placeholder:string,
  label:string,
  onChangeText:(text:string)=>void
}
const CustomInput = ({placeholder,onChangeText,label}:Probs) => {
  return (
        <View style={{display:"flex",flexDirection:"column",gap:4}}>
          <Text style={{fontSize:16}}>{label}</Text>
          <View style={{width:'100%',
            height:48,
            borderColor:"#7e7e7e4d",
            borderWidth:1,
            overflow:"hidden",
            borderRadius:8,
            
          }}>
          <TextInput style={{flex:1,backgroundColor:"#92929223",paddingHorizontal:8,color:"#464646a2"}} onChangeText={onChangeText} placeholder={placeholder} />
        </View>
        </View>
        
  )
}

export default CustomInput

const styles = StyleSheet.create({})