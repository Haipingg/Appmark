
import React, { Component } from 'react';
import { Text, View ,Button, ImageBackground,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FirstScreen from './First';
import JumpScreen from './jump';
import SecondScreen from './second';
import ThirdScreen from './Third';
import FourthScreen from './Fourth';
import FifthScreen from './Fifth';
import TuiJianScreen from './TuiJian';
import TanSuoScreen from './TanSuo'
import YinyongScreen from './Yinyong'
import YouXiScreen from './YouXi'
import UserScreen from './User'
import JieshaoScreen from './Jieshao'

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function Home() {
  return (
<Tab.Navigator
initialRouteName="First"  
activeColor="#00BFFF"	
barStyle={{ backgroundColor: 'white' }} 
>
      
    <Tab.Screen name="First" component={FirstScreen} 
        options={{

          tabBarLabel: '推荐',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />),
        }}/>

<Tab.Screen name="Yinyong" component={YinyongScreen} 
        options={{

          tabBarLabel: '应用',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={26} />),
        }}/>
           
           <Tab.Screen name="YouXi" component={YouXiScreen} 
        options={{

          tabBarLabel: '游戏',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />),
        }}/>


<Tab.Screen name="User" component={UserScreen} 
        options={{

          tabBarLabel: '个人主页',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />),
        }}/>

    </Tab.Navigator>
   
    
  );
}
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="second" component={SecondScreen} 
        options={{
          headerStyle: { backgroundColor: '#87CEFA'},
          headerTitleStyle: { fontWeight: 'bold', },
          headerTintColor: '#fff',title: "应用市场" 
        }}/>
                
       
      
        <Stack.Screen name="jump" component={JumpScreen} options={{
            headerStyle: { backgroundColor: '#87CEFA'},
            headerTitleStyle: { fontWeight: 'bold', },
            headerTintColor: '#fff',title: "应用市场" 
          }} />
         
         <Stack.Screen name="Jieshao" component={JieshaoScreen} options={{
            headerStyle: { backgroundColor: '#87CEFA'},
            headerTitleStyle: { fontWeight: 'bold', },
            headerTintColor: '#fff',title: "关于此应用" 
          }} />


        </Stack.Navigator>
      </NavigationContainer>

    );
  } 	
}





