import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text, View ,Linking, Image, Button, ImageBackground,TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Swiper from 'react-native-swiper'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FirstScreen from './First';
import JumpScreen from './jump';
import SecondScreen from './second';
import ThirdScreen from './Third';
import FourthScreen from './Fourth';
import FifthScreen from './Fifth';
import { FlatList } from 'react-native-gesture-handler';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const data = [
  {key:'微视',img:require('./img/ws.jpg'),a:'https://mumu.163.com/games/14394.html'},
  {key:'今日头条',img:require('./img/jrtt.jpg'),a:'https://www.toutiao.com/?wid=1623523515908'},
  {key:'虎牙直播',img:require('./img/1.jpg'),a:'https://www.huya.com/'},
  {key:'拼多多',img:require('./img/pdd.jpg'),a:'https://youhui.pinduoduo.com/'},
  {key:'抖音',img:require('./img/dy.jpg'),a:'https://www.douyu.com/'},
  {key:'快手',img:require('./img/ks.jpg'),a:'https://www.kuaishou.com/'},
  {key:'小红书',img:require('./img/xhs.jpg'),a:'https://www.xiaohongshu.com/explore'},
  {key:'饿了么',img:require('./img/elm.jpg'),a:'https://www.ele.me/'},
  {key:'知乎',img:require('./img/zh.jpg'),a:'https://www.zhihu.com/signin?next=%2F'},
  {key:'闲鱼',img:require('./img/xy.jpg'),a:'https://www.1688.com/huo/b-CFCCD3E3B9D9CDF8CCD4B1A6.html'},
  
]
const data2 = [
  {key:'斗罗大陆',img:require('./img/dldl.jpg'),a:'http://37.com.cn/dldl/'},
  {key:'宝可梦大冒险',img:require('./img/bkm.jpg'),a:'http://pq.163.com/index.html'},
  {key:'航海王热血航线',img:require('./img/hhw.jpg'),a:'https://op.nvsgames.cn/qingzhi/'},
  {key:'欢乐斗地主',img:require('./img/ddz.jpg'),a:'https://hlddz.qq.com/'},
  {key:'全民奇迹2',img:require('./img/qmqj.jpg'),a:'https://qmqj2.qq.com/'},
  {key:'我是大东家',img:require('./img/ddj.jpg'),a:'https://www.18touch.com/game/75594.html'},
  {key:'使命召唤手游',img:require('./img/smzh.jpg'),a:'https://codm.qq.com/'},
  {key:'阴阳师',img:require('./img/5.jpg'),a:'https://yys.163.com/'},
  {key:'胡桃日记',img:require('./img/htrj.jpg'),a:'https://htrj.qq.com/web202007/index.shtml'},
  {key:'狼人对决',img:require('./img/lrdj.jpg'),a:'https://lr.yokagames.com/'},
]

const styles = StyleSheet.create({
  button:{
    marginTop:5,
    alignItems:'center',
    backgroundColor:'#DCDCDC',
    borderRadius:25,
    paddingTop:5,
    height:30,
    width:55
  },
  items:{
    margin:10,
    flexDirection:'column',


  },

})


export default class App extends Component {
  open=()=>{
		let url = 'https://appgallery.huawei.com/#/Apps';
        Linking.openURL(url) 
	}
  open1=()=>{
		let url = 'https://www.lizhi.fm/about/download.html';
        Linking.openURL(url) 
	}
  open2=()=>{
		let url = 'https://writer.muyewx.com/';
        Linking.openURL(url) 
	}
  open3=()=>{
		let url = 'https://shop.hanfuhui.com/';
        Linking.openURL(url) 
	}
  open4=()=>{
		let url = 'https://app.mi.com/subject/115150';
        Linking.openURL(url) 
	}


  render() {
    return (
      <View>
          <View style={{height:40,marginLeft:20,marginRight:20, marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:60}}>
          <TextInput fontSize={15} placeholder={'猎聘-招人、找工作就用猎聘聊'} style={{
            borderRadius:80}}>
              </TextInput>
</View>
<View style={{height:180,marginTop:10}}>
<Swiper loop={true} autoplay={true} showsButtons={false}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('YouXi')}} style={{alignItems:'center',}}>
        <Image style={{height:160,width:380,borderRadius:30}} source={require('./img/lb1.jpg')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.open2} style={{alignItems:'center',}}>
        <Image style={{height:160,width:380,borderRadius:30}} source={require('./img/lb2.jpg')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.open3} style={{alignItems:'center',}}>
        <Image style={{height:160,width:380,borderRadius:30}} source={require('./img/lb3.jpg')}></Image>
        </TouchableOpacity>
      </Swiper>
      </View>
<View style={{
    height:80,
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:10,
    justifyContent: 'space-evenly',
  
    }}>

<TouchableOpacity onPress={() => {this.props.navigation.navigate('Tabone')}} style={{alignItems:'center',margin:12}}>
<Image style={{height:40,width:40}} source={require('./img/fl.jpg')}></Image>

<Text style={{fontSize:15}}>
分类
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={this.open4} style={{alignItems:'center',margin:12}}>
<Image style={{height:40,width:40}} source={require('./img/bb.jpg')}></Image>
<Text style={{fontSize:15}}>
必备
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={this.open} style={{alignItems:'center',margin:12}}>
<Image style={{height:40,width:40}} source={require('./img/k.jpg')}></Image>
<Text style={{fontSize:15}}>
快应用
</Text>
</TouchableOpacity>
<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:40,width:40}} source={require('./img/f.jpg')}></Image>
<Text style={{fontSize:15}}>
福利
</Text>
</TouchableOpacity>
<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:40,width:40}} source={require('./img/jy.jpg')}></Image>
<Text style={{fontSize:15}}>
教育
</Text>
</TouchableOpacity>
</View>
<View>
  <Text style={{fontSize:20}}>精品应用</Text>
  <FlatList
  data={data}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:80}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:60,height:60,borderRadius:20}}/>
             <View style={{flex:1,paddingLeft:10}}>
               <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       
            <TouchableOpacity onPress={() => Linking.openURL(item.a)} style={styles.button}>
                 <Text >安装</Text>
           </TouchableOpacity>
            </View>
            </TouchableOpacity>
         )}
  />
</View>
<View>
  <Text style={{fontSize:20}}>精品新游</Text>
  <FlatList
  data={data2}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:80}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:60,height:60,borderRadius:20}}/>
             <View style={{flex:1,paddingLeft:10}}>
               <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       
            <TouchableOpacity onPress={() => Linking.openURL(item.a)} style={styles.button}>
                 <Text >安装</Text>
           </TouchableOpacity>
            </View>
            </TouchableOpacity>
         )}
  />
</View>

      </View>

    
    );
  } 	
}
AppRegistry.registerComponent('myproject', () => SwiperComponent)