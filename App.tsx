import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IndexScreen from './screens/IndexScreen';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import VerifyOtp from './screens/VerifyOtp';
import ForgotPassword from './screens/ForgotPassword';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import CartScreen from './screens/CartScreen';
import { View } from 'react-native';

// 1. Define the Parameter Lists (copied from types.ts above)
// In a real project, tghis would be in a separate 'types.ts' file
const headerBackground=()=><View style={{backgroundColor:"#009944",flex:1}}></View>;
export type RootStackParamList = {
  IndexScreen: undefined;
  auth: undefined;
  login: undefined;
  signup: undefined;
  verifyOtp: { userId: string };
  forgotPassword: undefined;
  Tabs: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Orders: undefined;
  Profile: undefined;
};

// 2. Create Typed Navigators
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

// 3. Define the Screen Prop Type for IndexScreen
// This type is used to get the navigate function with type safety
export type IndexScreenProps = NativeStackScreenProps<RootStackParamList, 'IndexScreen'>;
export type LoginScreenProbs= NativeStackScreenProps<RootStackParamList, 'login'>;
export type SignupScreenProbs= NativeStackScreenProps<RootStackParamList, 'signup'>;


// Tabs Component
function Tabs() {
  return (
    <Tab.Navigator>
      {/* Tab screens are defined here */}
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
       <Tab.Screen name="Cart" component={CartScreen} />
       <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Root Navigator
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='IndexScreen' screenOptions={{headerShown:false}}>
          <Stack.Screen name='IndexScreen' component={IndexScreen} />
          <Stack.Screen name='auth' component={AuthScreen} />
          <Stack.Screen name='login' component={LoginScreen} />
          <Stack.Screen name='signup' component={SignupScreen} />
          <Stack.Screen name='verifyOtp' component={VerifyOtp} />
          <Stack.Screen name='forgotPassword' component={ForgotPassword} />
          <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};