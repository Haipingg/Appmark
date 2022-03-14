import React, { Component } from 'react';
import { AppRegistry,ScrollView, StyleSheet,Text, View ,Linking, Image, Button, ImageBackground,TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Swiper from 'react-native-swiper'
import Video from 'react-native-video';
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


var styles = StyleSheet.create({
  backgroundVideo: {
 borderRadius:10,
    height:250,
   
   top:0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  items:{
    margin:10,
    flexDirection:'column',

  },
});

const data = [
  {key:'阴阳师1',img:require('./img/yys1.jpg')},
  {key:'阴阳师2',img:require('./img/yys2.jpg')},
  {key:'阴阳师3',img:require('./img/yys3.jpg')},
  {key:'阴阳师4',img:require('./img/yys4.jpg')},
  {key:'阴阳师5',img:require('./img/yys5.jpg')},

]
const data2 = [
  {key:'阴阳师6',img:require('./img/y1.jpg')},
  {key:'阴阳师7',img:require('./img/y2.jpg')},
  {key:'阴阳师8',img:require('./img/y3.jpg')},
  {key:'阴阳师9',img:require('./img/y4.jpg')},
  {key:'阴阳师10',img:require('./img/y5.jpg')},
  {key:'阴阳师11',img:require('./img/y6.jpg')},
  {key:'阴阳师12',img:require('./img/y7.jpg')},
  {key:'阴阳师13',img:require('./img/y8.jpg')},
  {key:'阴阳师14',img:require('./img/y9.jpg')},
  {key:'阴阳师15',img:require('./img/y10.jpg')},
]




  export default class SwiperComponent extends Component {
    open=()=>{
      let url = 'https://yys.163.com/';
          Linking.openURL(url) 
    }
    render() {
      return (
        <ScrollView 
       scrollEnabled={true}
       nestedScrollEnabled={true}
      >
        <View>

        <View style={{height:200 }}>
        <Video source={require('./mv/yys.mp4')}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       repeat={true}                          //循环播放
       
       controls={false}                       //是否显示播放条
       fullscreen={false}                           //是否可以全屏播放
       playInBackground={false}                     //是否允许后台播放

       resizeMode={'cover'}

       style={styles.backgroundVideo={borderRadius:15,height:250}} />
      </View>
<View style={{height:120,marginTop:30,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'gray'}}>
  <TouchableOpacity onPress={this.open}>
<Image  style={{height:100,width:100,marginTop:20,borderRadius:18}} source={require('./img/5.jpg')}></Image>
</TouchableOpacity>
<View >
<Text style={{marginTop:30, fontSize:30}}>阴阳师</Text>
<Text style={{fontSize:15}}>提供应用内购买项目</Text>
<Text style={{fontSize:15}}>广告监测-人工复检</Text>
</View>
</View>
<View style={{height:40,flexDirection: 'row',
    flexWrap:'wrap',
    margin:10,
    justifyContent: 'space-evenly',
 }}>
   <TouchableOpacity style={{marginTop:10}}>
   <Text style={{fontSize:20,color:'#0080FF',borderBottomWidth:3,borderBottomColor:'#0080FF'}}>介绍</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{marginTop:10,flexWrap:'wrap'}}>
   <Text style={{fontSize:20}}>评论</Text>
   <Text style={{fontSize:10}}>1.3万</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{marginTop:10,flexWrap:'wrap'}}>
   <Text style={{fontSize:20}}>论坛</Text>
   <Text style={{fontSize:10}}>20.1万</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{marginTop:10}}> 
   <Text style={{fontSize:20}}>推荐</Text>
   </TouchableOpacity>
</View>

<View>
<FlatList
  data={data}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:220}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:200,height:300,borderRadius:10}}/>
             <View style={{flex:1,paddingLeft:10}}>
              
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       

            </View>
            </TouchableOpacity>
         )}
  />
</View>
<View style={{height:40,flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-evenly',
 }}>
   <Text style={{fontSize:20}}>‘‘日漫、情怀声优、精良之作’’</Text>
 </View>
<View style={{height:40,flexDirection: 'column',
    margin:10,
 }}>
 
   <TouchableOpacity style={{marginTop:10,flexWrap:'wrap'}}>
   <Text style={{fontSize:20}}>论坛</Text>
   <Text style={{fontSize:10}}>20.1万</Text>
   </TouchableOpacity>

</View>
<View>
<FlatList
  data={data2}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:220}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:200,height:220,borderRadius:10}}/>
             <View style={{flex:1,paddingLeft:10}}>
              
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       

            </View>
            </TouchableOpacity>
         )}
  />
</View>
<View>
       <View style={{margin:15}}>
           <Text style={{fontSize:25}}>应用介绍</Text>
           <Text style={{color:'#808080'}}>提供应用内购买项目</Text>
           <Text style={{fontSize:16}}>网易和风匠心巨制，开启唯美奇幻之旅</Text>
           <Text style={{fontSize:16}}>网易2016年研发的3D RPG半即时回合制卡牌手游「阴阳师」取材于阴阳师晴明的经典故事，延续了和风物语的一贯优美与神秘。</Text>
           <Text style={{fontSize:16}}>故事围绕着主人公晴明展开，在平安时代的京都，风光旖旎，却暗流涌动——魑魅魍魉伺机而动，阳界秩序岌岌可危。幸而，世间存在着一群被称之为「阴阳师」的异能者——也就是玩家将扮演的「游戏主角」。这群异能者不但懂得观星测位、画符念咒，还可跨越阴阳两界，支配式神。为消除天、地、人、鬼之间的矛盾，阴阳师们调查一切奇异事件，维系着阴阳两界的平衡，同时也探寻着自身的过往……</Text>
           <Text style={{fontSize:16}}>风光绚丽的京都画卷慢慢展开，精彩跌宕的百鬼绮谭也就此拉开了帷幕……</Text>
       </View>
       <View style={{margin:15}}>
           <Text style={{fontSize:20}}>游戏特色</Text>
           <Text style={{fontSize:16}}>★ 百鬼绮谭：精彩绝伦的剧情，刻画细腻的角色</Text>
           <Text style={{fontSize:16}}>★ 真实社交：方圆之内寻好友，游戏之外亦作伴</Text>
           <Text style={{fontSize:16}}>★ 绚丽画卷：优美的京都风光，与友人携手同赏</Text>
           <Text style={{fontSize:16}}>★ 听觉盛宴：声优配音，梅林茂亲创原声</Text>
       </View>
   </View>
</View>
       
        </ScrollView>
        
      );
    }
  }
