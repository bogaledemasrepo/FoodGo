import { StyleSheet, Text, View,TextInput } from 'react-native'
import GlobalStyles from '../styles'
interface Probs{
  placeholder:string,
  onChangeText:(text:string)=>void
}
const CustomInput = ({placeholder,onChangeText}:Probs) => {
  return (
    <View style={[GlobalStyles.input]}>
      <TextInput placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({})