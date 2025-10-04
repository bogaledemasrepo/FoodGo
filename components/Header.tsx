import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

const Header = ({children}:{children:ReactNode}) => {
  return (
    <View style={{width:"100%",height:48,backgroundColor:"#009944",alignItems:"center",justifyContent:"center"}}>
      {children}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})