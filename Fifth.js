import React, { Component } from 'react';
import { Text, View ,ImageBackground,StyleSheet,FlatList,Linking, TextInput,TouchableOpacity, Image} from 'react-native';
import {Button } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';


const data = [
  {key:'我的主页',val:'帖子/评论/收藏'},
  {key:'我的资产',val:'花币/礼包/优惠券'},
  
  
]
const styles = StyleSheet.create({

  items:{
    margin:2,
    flexDirection:'row',
    alignItems:'center',
   
  },


})

export default class App extends Component {
  open=()=>{
		let url = 'https://www.baidu.com/';
        Linking.openURL(url) 
	}
  render() {
    return (
      <ImageBackground
      source={require('./img/bg3.jpg')}
      style={{flex:1}}  imageStyle={{resizeMode: 'cover'}}>
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
<View style={{height:140,alignItems:'center',marginTop:30}}>
  
  <TouchableOpacity  onPress={() => {this.props.navigation.navigate('jump')}}>
<Image style={{height:100,width:100,marginTop:20,borderRadius:50}} source={require('./img/man.jpg')}>
</Image>
</TouchableOpacity>
<Text style={{fontSize:30}}>138******52</Text>

</View>
<View style={{height:60,marginTop:20,}}>
<FlatList
  data={data}
  horizontal={true}	
  showsHorizontalScrollIndicator={false} //不显示水平滚动条
          renderItem={({item})=>(        
           <TouchableOpacity onPress={()=>alert(item.key)} style={{width:200}}>    
             <View style={styles.items}>
             <View style={{flex:1,flexWrap:'wrap', alignItems:'center', flexDirection:'row', justifyContent: 'space-evenly',}}>
             <Text style={{fontSize:20}}>{item.key}</Text>
               <Text style={{fontSize:18,}}>{item.val}</Text>
             </View>
            </View>
            </TouchableOpacity>
         )}
  />
</View>

<TouchableOpacity style={{height:40,marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:80,}}>

<Button
style={{fontSize:30}}

icon="menu"
color="#00BFFF"

title="更新管理">
更新管理
</Button>


</TouchableOpacity>

<View style={{
    height:220,

    }}>
      <View style={{
    height:80,
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:10,
    justifyContent: 'space-evenly',
    }}>
<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:60,width:60,borderRadius:18}} source={require('./img/az.jpg')}></Image>
<Text style={{fontSize:15}}>
安装管理
</Text>
</TouchableOpacity>
<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:60,width:60,borderRadius:18}} source={require('./img/ql.jpg')}></Image>
<Text style={{fontSize:15}}>
清理加速
</Text>
</TouchableOpacity>
<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:60,width:60,borderRadius:18}} source={require('./img/xh.jpg')}></Image>
<Text style={{fontSize:15}}>
小华花园
</Text>
</TouchableOpacity>
<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:60,width:60,borderRadius:18}} source={require('./img/azb.jpg')}></Image>
<Text style={{fontSize:15}}>
安装包管理
</Text>
</TouchableOpacity>

</View>

<View style={{
    height:80,
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:10,
    justifyContent: 'space-evenly',
    }}>
<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:60,width:60,borderRadius:18}} source={require('./img/yg.jpg')}></Image>
<Text style={{fontSize:15}}>
已购项目
</Text>
</TouchableOpacity>
<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:60,width:60,borderRadius:18}} source={require('./img/lb.jpg')}></Image>
<Text style={{fontSize:15}}>
礼包
</Text>
</TouchableOpacity>
<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:60,width:60,borderRadius:18}} source={require('./img/yy.jpg')}></Image>
<Text style={{fontSize:15}}>
预约新游
</Text>
</TouchableOpacity>

<TouchableOpacity style={{alignItems:'center',margin:12}}>
<Image style={{height:60,width:60,borderRadius:18}} source={require('./img/kyy.jpg')}></Image>
<Text style={{fontSize:15}}>
快应用管理
</Text>
</TouchableOpacity>



</View>
</View>
<TouchableOpacity style={{height:40,marginTop:10,backgroundColor:'white',borderBottomWidth:2,borderBottomColor:'#F5F5F5',flexDirection:'row',borderRadius:80}}>
<Button
style={{fontSize:25,}}
icon="send"
color="#00BFFF"
title="设置">
设置
</Button>

</TouchableOpacity>
<TouchableOpacity style={{height:40,backgroundColor:'white',flexDirection:'row',borderRadius:80}}>
<Button
style={{fontSize:25,}}
icon="help-circle"
color="#00BFFF"
title="帮助与反馈">
帮助与反馈
</Button>
</TouchableOpacity>
</ImageBackground>

    );
  } 	
}
