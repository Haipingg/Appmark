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



const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <Tab.Navigator tabBarOptions={{
        tabStyle: {  //设置tab的样式
          minWidth: 50 //设置tab最小宽度
         
        },
        upperCaseLabel: true,  //是否使标签大写，默认为true
        scrollEnabled: false,  //是否支持 选项卡滚动，默认false
        activeTintColor: 'black',  //选中状态下label的颜色
        inactiveTintColor: 'gray',  //未选择状态下label的颜色
        style: { backgroundColor: 'powderblue' },  //TabBar 的背景颜色
        indicatorStyle: { //标签指示器的样式
            height: 2,
            backgroundColor: '#DA70D6',
        },
        labelStyle: { //文字的样式
            fontSize: 12,
          
        } }}>
        <Tab.Screen name="推荐" component={TuiJianScreen} />
        <Tab.Screen name="应用榜" component={ThirdScreen} />
        <Tab.Screen name="游戏榜" component={FourthScreen} />
        <Tab.Screen name="探索" component={TanSuoScreen} />
      </Tab.Navigator>
    
    );
  } 	
}
