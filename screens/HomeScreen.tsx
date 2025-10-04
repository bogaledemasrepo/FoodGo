import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HomeScreen = () => {
  return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header>
        <View style={{width:"100%",padding:8,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <MaterialCommunityIcons name='menu' color={"#fff"} size={32} />
            <Text style={{color:"#fff",fontSize:18,fontWeight:"600"}}>Home Page</Text>
          <MaterialCommunityIcons name='bell' color={"#fff"} size={32} />
        </View>
      </Header>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})