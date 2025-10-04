import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

const ProfileScreen = () => {
  return (
       <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header>
            <Text style={{color:"#fff",fontSize:18,fontWeight:"600"}}>Account</Text>
      </Header>
      <ScrollView>
      <View style={{width:"100%",height:140,display:"flex",flexDirection:"column",alignItems:"center",padding:8}}>
          <View style={{width:75,height:75,borderRadius:60,backgroundColor:"#8a8a8a5b"}}></View>
          <Text>Bogale Demas</Text>
          <Text style={{color:"#3333337a"}}>bogidemas@gmail.com</Text>
      </View>
      <View style={{width:"100%",display:"flex",flexDirection:"column",padding:8}}>
          <Text style={{fontSize:18,paddingVertical:8}}>My Account</Text>
          <View style={{paddingHorizontal:8}}>
            <View style={{display:"flex",flexDirection:"row",padding:8,gap:8}}>
              <MaterialCommunityIcons name='account' color={"#494949ce"} size={20}/>
              <Text>LaPersonal informationnguage</Text>
            </View>
             <View style={{display:"flex",flexDirection:"row",padding:8,gap:8}}>
              <MaterialCommunityIcons name='web' color={"#494949ce"} size={20}/>
              <Text>Language</Text>
            </View>
            <View style={{display:"flex",flexDirection:"row",padding:8,gap:8}}>
              <MaterialCommunityIcons name='security' color={"#494949ce"} size={20}/>
              <Text>Privacy and policy</Text>
            </View>
            
             <View style={{display:"flex",flexDirection:"row",padding:8,gap:8}}>
              <Feather name='settings' color={"#494949ce"} size={20}/>
              <Text>Setting</Text>
            </View>
          </View>
      </View>
      <View style={{width:"100%",display:"flex",flexDirection:"column",padding:8}}>
          <Text style={{fontSize:18,paddingVertical:8}}>Notifications</Text>
          <View style={{paddingHorizontal:8}}>
             <View style={{display:"flex",marginVertical:4,flexDirection:"row",gap:4,alignItems:"center"}}>
              <MaterialCommunityIcons name='bell-outline' color={"#494949ce"} size={24}/>
              <Text>Push notification</Text>
            </View>
             <View style={{display:"flex",marginVertical:4,flexDirection:"row",gap:4,alignItems:"center"}}>
              <MaterialCommunityIcons name='bell-outline' color={"#494949ce"} size={24}/>
              <Text>Promotional notification</Text>
            </View>
          </View>
      </View>
      <View style={{width:"100%",display:"flex",flexDirection:"column",padding:8}}>
          <Text style={{fontSize:18,paddingVertical:8}}>More</Text>
          <View style={{paddingHorizontal:8}}>
             <View style={{display:"flex",marginVertical:4,flexDirection:"row",gap:4,alignItems:"center"}}>
              <MaterialCommunityIcons name='information-variant-circle-outline' color={"#333333ce"} size={28}/>
              <Text style={{color:"#525252ce"}}>Help center</Text>
            </View>
             <View style={{display:"flex",marginVertical:4,flexDirection:"row",gap:4,alignItems:"center"}}>
              <MaterialCommunityIcons name='logout' color={"#ff2727ce"} size={24}/>
              <Text style={{color:"#ff2727ce",fontWeight:"600"}}>Log Out</Text>
            </View>
          </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})