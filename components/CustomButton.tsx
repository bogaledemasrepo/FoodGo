import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import GlobalStyles from '../styles'
import { ReactNode } from 'react'
const CustomButton = ({children,onPress,bg}:{children:ReactNode,onPress:()=>void,bg?:string}) => {
  return (
    <TouchableOpacity style={bg?[GlobalStyles.btn,{backgroundColor:bg}]:[GlobalStyles.btn]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})