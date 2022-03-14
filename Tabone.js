import React, { Component } from 'react';
import { AppRegistry, StyleSheet,ScrollView, Text, View ,Linking, Image, Button, ImageBackground,TouchableOpacity,TextInput} from 'react-native';
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
  {key:'快手急速版',img:require('./img/t1.jpg')},
  {key:'YY',img:require('./img/t2.jpg')},
  {key:'皮皮虾',img:require('./img/t3.jpg')},
  {key:'拼多多',img:require('./img/pdd.jpg')},
  {key:'抖音',img:require('./img/dy.jpg')},
  {key:'快手',img:require('./img/ks.jpg')},
  {key:'小红书',img:require('./img/xhs.jpg')},
  {key:'饿了么',img:require('./img/elm.jpg')},
]
const data2 = [
  {key:'影视大全',img:require('./img/t4.jpg')},
  {key:'手机电视',img:require('./img/t5.jpg')},
  {key:'百实TVs',img:require('./img/t6.jpg')},
  {key:'欢乐斗地主',img:require('./img/smzh.jpg')},
  {key:'全民奇迹2',img:require('./img/qmqj.jpg')},
  {key:'我是大东家',img:require('./img/ddj.jpg')},
  {key:'使命召唤手游',img:require('./img/ddz.jpg')},
  {key:'阴阳师',img:require('./img/5.jpg')},
]
const data3 = [
  {key:'皮皮虾',img:require('./img/t7.jpg')},
  {key:'西瓜视频',img:require('./img/t8.jpg')},
  {key:'优酷视频',img:require('./img/t9.jpg')},
  {key:'欢乐斗地主',img:require('./img/qmqj.jpg')},
  {key:'全民奇迹2',img:require('./img/ddz.jpg')},
  {key:'我是大东家',img:require('./img/ddj.jpg')},
  {key:'使命召唤手游',img:require('./img/smzh.jpg')},
  {key:'阴阳师',img:require('./img/5.jpg')},
]
const data4 = [
  {key:'QQ音乐',img:require('./img/t10.jpg')},
  {key:'喜马拉雅',img:require('./img/t11.jpg')},
  {key:'酷狗',img:require('./img/t12.jpg')},
  {key:'阴阳师',img:require('./img/5.jpg')},
  {key:'欢乐斗地主',img:require('./img/ddz.jpg')},
  {key:'全民奇迹2',img:require('./img/qmqj.jpg')},
  {key:'我是大东家',img:require('./img/ddj.jpg')},
  {key:'使命召唤手游',img:require('./img/smzh.jpg')},
]
const data5 = [
  {key:'全名k歌',img:require('./img/t13.jpg')},
  {key:'唱吧',img:require('./img/t14.jpg')},
  {key:'酷狗唱唱',img:require('./img/t15.jpg')},
  {key:'欢乐斗地主',img:require('./img/ddz.jpg')},
  {key:'全民奇迹2',img:require('./img/qmqj.jpg')},
  {key:'我是大东家',img:require('./img/ddj.jpg')},
  {key:'使命召唤手游',img:require('./img/smzh.jpg')},
  {key:'阴阳师',img:require('./img/5.jpg')},
]
const data6 = [
  {key:'虎牙直播',img:require('./img/t16.jpg')},
  {key:'斗鱼',img:require('./img/t17.jpg')},
  {key:'YY',img:require('./img/t18.jpg')},
  {key:'使命召唤手游',img:require('./img/smzh.jpg')},
  {key:'阴阳师',img:require('./img/5.jpg')},
  {key:'欢乐斗地主',img:require('./img/ddz.jpg')},
  {key:'全民奇迹2',img:require('./img/qmqj.jpg')},
  {key:'我是大东家',img:require('./img/ddj.jpg')},

]
const data7 = [
  {key:'喜马拉雅',img:require('./img/t19.jpg')},
  {key:'听听FM',img:require('./img/t20.jpg')},
  {key:'荔枝',img:require('./img/t21.jpg')},
  {key:'欢乐斗地主',img:require('./img/ddz.jpg')},
  {key:'全民奇迹2',img:require('./img/qmqj.jpg')},
  {key:'我是大东家',img:require('./img/ddj.jpg')},
  {key:'使命召唤手游',img:require('./img/smzh.jpg')},
  {key:'阴阳师',img:require('./img/5.jpg')},
]
const styles = StyleSheet.create({
  button:{
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
    render() {
      return (
<View>
<View style={{height:40,marginLeft:20,marginRight:20, marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:60}}>
          <TextInput fontSize={15} placeholder={'猎聘-招人、找工作就用猎聘聊'} style={{
            borderRadius:80}}>
              </TextInput>
</View>
<View style={{flexDirection: 'row', height:680}}>
        <View style={{flex: 2, backgroundColor: '#F5F5F5',borderBottomWidth:2,
        borderBottomColor:'#DCDCDC'}}>
        <ScrollView  >
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Tabone')}}
        
         style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#00BFFF'}}>影音娱乐</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Tabtwo')}}
         style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>实用工具</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>社交咨询</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>教育</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>新闻阅读</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>拍摄美化</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>美食</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>出行导航</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>旅游住宿</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>购物比价</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>商务</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>儿童</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>金融理财</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>运动健康</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>便捷生活</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>汽车</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:40, marginLeft:10,
        borderRadius:15,marginTop:15
        }}>
        <Text style={{fontSize:20,color:'#696969'}}>主题个性</Text>
        </TouchableOpacity>
        </ScrollView>
        </View>
      
        <View style={{flex: 7, backgroundColor: '#FFFFFF'}}>
          <ScrollView>
        <View style={{height:180,marginTop:10}}>
<Swiper loop={true} autoplay={true} showsButtons={false}>
        <TouchableOpacity onPress={this.open1} style={{alignItems:'center',}}>
        <Image style={{height:160,width:300,borderRadius:30}} source={require('./img/tm1.jpg')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.open2} style={{alignItems:'center',}}>
        <Image style={{height:160,width:300,borderRadius:30}} source={require('./img/tm2.jpg')}></Image>
        </TouchableOpacity>
       
      </Swiper>
      </View>
      <View style={{height:140}}>
  <Text style={{fontSize:20}}>热门</Text>
  <FlatList
  data={data}
  horizontal={true}	                      //水平滚动
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:80,}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:60,height:60,borderRadius:10}}/>
             <View style={{flex:1,paddingLeft:10}}>
               <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       
            <TouchableOpacity style={styles.button}>
                 <Text >安装</Text>
           </TouchableOpacity>
            </View>
            </TouchableOpacity>
         )}
  />
</View>
<View style={{height:140}}>
  <Text style={{fontSize:20}}>电视</Text>
  <FlatList
  data={data2}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:80}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:60,height:60,borderRadius:10}}/>
             <View style={{flex:1,paddingLeft:10}}>
               <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       
            <TouchableOpacity style={styles.button}>
                 <Text >安装</Text>
           </TouchableOpacity>
            </View>
            </TouchableOpacity>
         )}
  />
</View>
<View style={{height:140}}>
  <Text style={{fontSize:20}}>视频</Text>
  <FlatList
  data={data3}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:80}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:60,height:60,borderRadius:10}}/>
             <View style={{flex:1,paddingLeft:10}}>
               <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       
            <TouchableOpacity style={styles.button}>
                 <Text >安装</Text>
           </TouchableOpacity>
            </View>
            </TouchableOpacity>
         )}
  />
</View>
<View style={{height:140}}>
  <Text style={{fontSize:20}}>音乐</Text>
  <FlatList
  data={data4}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:80}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:60,height:60,borderRadius:10}}/>
             <View style={{flex:1,paddingLeft:10}}>
               <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       
            <TouchableOpacity style={styles.button}>
                 <Text >安装</Text>
           </TouchableOpacity>
            </View>
            </TouchableOpacity>
         )}
  />
</View>
<View style={{height:140}}>
  <Text style={{fontSize:20}}>K歌</Text>
  <FlatList
  data={data5}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:80}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:60,height:60,borderRadius:10}}/>
             <View style={{flex:1,paddingLeft:10}}>
               <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       
            <TouchableOpacity style={styles.button}>
                 <Text >安装</Text>
           </TouchableOpacity>
            </View>
            </TouchableOpacity>
         )}
  />
</View>
<View style={{height:140}}>
  <Text style={{fontSize:20}}>直播</Text>
  <FlatList
  data={data6}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:80}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:60,height:60,borderRadius:10}}/>
             <View style={{flex:1,paddingLeft:10}}>
               <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       
            <TouchableOpacity style={styles.button}>
                 <Text >安装</Text>
           </TouchableOpacity>
            </View>
            </TouchableOpacity>
         )}
  />
</View>
<View style={{height:140}}>
  <Text style={{fontSize:20}}>电台</Text>
  <FlatList
  data={data7}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(
                    
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:80}}>    
           
             <View style={styles.items}>
             <Image source={item.img} style={{width:60,height:60,borderRadius:10}}/>
             <View style={{flex:1,paddingLeft:10}}>
               <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:10,}}>{item.val}</Text>
             </View>
       
            <TouchableOpacity style={styles.button}>
                 <Text >安装</Text>
           </TouchableOpacity>
            </View>
            </TouchableOpacity>
         )}
  />
</View>

</ScrollView>
        </View>

</View>


     
  </View>
  );
  }

  }