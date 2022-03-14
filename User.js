import * as React from 'react';
import { Button, View, Text,TouchableOpacity, Image  } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import FifthScreen from './Fifth';
import Fifth2Screen from './Fifth2'



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
        <View style={{height: 100, padding: 20,
                borderBottomWidth:1,
                borderBottomColor:'#DCDCDC'}}>
            <Image source={require('./img/man.jpg')}
                style={{width: 50, height: 50}}/>
            <Text style={{fontSize:20}}>用户中心</Text>
        </View>
        <TouchableOpacity style={{height:40, marginLeft:20,marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#DCDCDC'}}>
        <Text style={{fontSize:20}}>昵称:啵啵虎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'#DCDCDC'}}>
        <Text style={{fontSize:20}}>手机号码</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'#DCDCDC'}}>
        <Text style={{fontSize:20}}>账号安全</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'#DCDCDC'}}>
        <Text style={{fontSize:20}}>消息通知</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'#DCDCDC'}}>
        <Text style={{fontSize:20}}>隐私</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'#DCDCDC'}}>
        <Text style={{fontSize:20}}>通用</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'#DCDCDC'}}>
        <Text style={{fontSize:20}}>辅助功能</Text>
        </TouchableOpacity>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );}

const Drawer = createDrawerNavigator();

export default function App() {
  return (

      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Home" 
      drawerContentOptions={{
      activeTintColor: 'red',  //选中菜单文字颜色
      labelStyle: {fontSize: 15}  //设置菜单文字样式
        }}>
        <Drawer.Screen name="用户" component={FifthScreen} />
        <Drawer.Screen name="账号管理" component={Fifth2Screen} />
      </Drawer.Navigator>

  );
}