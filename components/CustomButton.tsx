import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import GlobalStyles from '../styles'
const CustomButton = ({title,onPress}:{title:string,onPress:()=>void}) => {
  return (
    <TouchableOpacity style={[GlobalStyles.btn]} onPress={onPress}>
      <Text style={{fontWeight:"bold",fontSize:18,color:"#fff",textAlign:"center"}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})