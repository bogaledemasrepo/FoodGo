import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import IndexScreen from './screens/IndexScreen';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import VerifyOtp from './screens/VerifyOtp';
import ForgotPassword from './screens/ForgotPassword';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
       <Tab.Screen name="Cart" component={CartScreen} />
       <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default ()=>{

  return  <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='index' component={()=><IndexScreen />} />
          <Stack.Screen name='auth' component={()=><AuthScreen />} />
          <Stack.Screen name='login' component={()=><LoginScreen />} />
          <Stack.Screen name='signup' component={()=><SignupScreen />} />
          <Stack.Screen name='verifyOtp' component={()=><VerifyOtp />} />
          <Stack.Screen name='forgotPassword' component={()=><ForgotPassword />} />
          <Stack.Screen name='Tabs' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
  </SafeAreaView>
}
