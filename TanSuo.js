import React, { Component } from 'react';
import { AppRegistry,ScrollView, StyleSheet,Text,Linking, View ,Image, Button, ImageBackground,TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from 'react-native-gesture-handler';

const data = [
  {val2:'向往的生活', key:'周末趣嗨选深航',val:'特享免费升舱服务',val1:'旅游住宿', img:require('./img/ts1.jpg')},
  {val2:'装修秘籍',key:'神仙打架的年代，我们听这些歌',val:'曾经乐坛有多“疯狂”',val1:'影音娱乐',img:require('./img/ts2.jpg')},
  {val2:'月卡免费送',key:'一款电影级飞行大世界MMO',val:'全民奇迹2荣耀公测',val1:'游戏',img:require('./img/ts3.jpg')},
  {val2:'剪辑神器',key:'【奇妙的人体】孩子了解吗',val:'VIPKID倾情打造科普教学',val1:'教育',img:require('./img/ts4.jpg')},
  {val2:'剪辑神器',key:'AL帮你剪了一条视频',val:'我们花2000小时训练人工智能',val1:'拍摄美化',img:require('./img/ts5.jpg')},
  {val2:'大考倒计时',key:'给考生一份[ 休息放松 ]秘籍',val:'考生家长必看',val1:'运动健康',img:require('./img/ts6.jpg')},
  {val2:'摇滚魔术',key:'带你领略魔术&摇滚的神奇魅力',val:'全新赛季来袭',val1:'游戏',img:require('./img/ts7.jpg')},
  {val2:'减脂更轻松',key:'速瘦燃脂过一夏',val:'夏日新课推荐',val1:'运动健康',img:require('./img/ts8.jpg')},

]

const styles = StyleSheet.create({
  items:{
    margin:10,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    borderRadius:18,
    height:120
  },

})






const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
export default class App extends Component {
  open=()=>{
		let url = 'https://www.lizhi.fm/about/download.html';
        Linking.openURL(url) 
	}
  render() {
    return (
   
        <View>
  <View style={{borderRadius:18,}}>
            <View style={{height:40,marginLeft:20,marginRight:20, marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:60}}>
          <TextInput fontSize={15} placeholder={'猎聘-招人、找工作就用猎聘聊'} style={{
            borderRadius:80}}>
              </TextInput>
</View>

</View>
<FlatList
 ListHeaderComponent={()=>(
  <TouchableOpacity onPress={this.open} style={{alignItems:'center',}}>
  <Text style={{fontSize:20,alignItems:'flex-start'}}>本期推荐</Text>
  
  <ImageBackground source={require('./img/tushu.jpg')} style={{height:360,width:360,bborderRadius:30}}>
  <View style={{marginTop:300,height:60,width:360,}}>
  <Text style={{fontSize:20,color:'white',marginLeft:8}}>十点读书重磅上线全本有声书《一...</Text>
  <Text style={{color:'white',marginLeft:8}}>由资深电台节目主持人倾情解读</Text>
  </View>
  </ImageBackground>
  </TouchableOpacity>
 )}
     data={data}
    
     renderItem={({item})=>(
      <TouchableOpacity  onPress={()=>alert(item.key)}>    
      
      <View style={styles.items}>
      <Image source={item.img} style={{width:100,height:100,borderRadius:20}}/>
      <View style={{flex:1,paddingLeft:10}}>
      <View style={{height:30,flexDirection:'row',}}>
      <Text style={{fontSize:12,paddingTop:5,color:'red',backgroundColor:'#FFC0CB',borderRadius:6}}>{item.val2}</Text>
        <Text style={{fontSize:20}}>{item.key}</Text>
        </View>
        <Text style={{fontSize:15,paddingTop:5}}>{item.val}</Text>
        <Text style={{fontSize:15,paddingTop:25}}>{item.val1}</Text>
      </View>

   
     </View>
     </TouchableOpacity>
    )}
  />
</View>
      
    
    );
  } 	
}
