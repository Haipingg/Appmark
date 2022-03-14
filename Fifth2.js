import React, { Component } from 'react';
import { Text, View ,ImageBackground,StyleSheet,FlatList, TextInput,TouchableOpacity, Image} from 'react-native';
import {Button } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';




export default class App extends Component {
  render() {
    return (
      <View>
            <View style={{flexDirection:'row'}}>
  <Button
style={{fontSize:30}}
onPress={() => {this.props.navigation.openDrawer()}}
icon="menu"
color="#000000"

title="个人主页">
个人主页
</Button>
<Button
style={{fontSize:30,marginLeft:250}}
onPress={this.open}
icon="link"
color="#000000"

title="搜索">
搜索
</Button>
</View>
<TouchableOpacity onPress={() => {this.props.navigation.navigate('jump')}} style={{height:40,marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:80,}}>

<Button

style={{fontSize:30}}
icon="plus"
color="#00BFFF"

title="添加或注册账号">
添加或注册账号
</Button>
</TouchableOpacity>
<TouchableOpacity style={{height:40,marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:80,}}>

<Button
style={{fontSize:30}}
color="#000000"
title="在线状态">
在线状态
</Button>
</TouchableOpacity>
<TouchableOpacity style={{height:40,marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:80,}}>

<Button
style={{fontSize:30}}
color="#000000"
title="关联账号">
关联账号
</Button>
</TouchableOpacity>
<TouchableOpacity style={{height:40,marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:80,}}>

<Button
style={{fontSize:30}}
color="#000000"
title="UID">
UID
</Button>
</TouchableOpacity>
<TouchableOpacity  onPress={() => this.props.navigation.goBack()} style={{height:40,marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:80,}}>
<Button
style={{fontSize:30}}
color="#000000"
title="退出">
退出
</Button>
</TouchableOpacity>
      </View>

    );
  } 	
}
