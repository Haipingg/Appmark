import * as React from 'react';
import { Button, View,TouchableOpacity, Text, Image  } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaboneScreen from './Tabone';
import TabtwoScreen from './Tabtwo'



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (

    <Stack.Navigator options={{headerTitleStyle:false}}>
    <Stack.Screen name="Tabone" component={TaboneScreen} options={{
        headerShown:false
      }} />
      
    <Stack.Screen name="Tabtwo" component={TabtwoScreen} 
    options={{
      headerShown:false
    }}/>


    </Stack.Navigator>

  );
}