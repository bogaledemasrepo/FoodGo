import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'
// Import the type definition for this screen
import { IndexScreenProps } from '../App'; // Adjust the path as needed

// Change to TypeScript and use the defined prop type
const IndexScreen: React.FC<IndexScreenProps> = ({ navigation }) => { 
  
  // The 'navigation.navigate' function is now type-safe!
  const handleGetStarted = () => {
    console.log("Navigate to login!")
    // TypeScript will now verify 'login' is a valid screen name 
    // and that it requires no parameters (as defined in RootStackParamList).
    navigation.navigate('login');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{
          flex:3,
        }}>
          <Image
        style={styles.image}
        source={require("../assets/images/hero.png")}
        contentFit="cover"
      />
        </View>
        <View style={{flex:2,padding:8}}>
          <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",color:"#444"}}>Explore FoodGo</Text>
          <Text style={{fontSize:16,fontWeight:"bold",textAlign:"center",color:"#444"}}>Get Experiance of there benefites</Text>
        <View style={{marginBottom:16}}>
          <Text style={{fontSize:12,marginTop:8,marginHorizontal:16,textAlign:"justify",color:"#333333ab"}}>Get Experiance of there benefites Get Experiance of there benefites Get Experiance of there benefites.</Text>
        </View>
        <CustomButton title="Get started" onPress={handleGetStarted}/> 
        </View>
      </View>
    </SafeAreaView>
  )
}

export default IndexScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});