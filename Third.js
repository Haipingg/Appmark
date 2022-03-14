import {Button,SafeAreaView,ScrollView,StatusBar,openURL, Linking,StyleSheet,FlatList,Image,Text,style,useColorScheme,TouchableOpacity,
    navigation,View,TextInput} from 'react-native';
  import  React, { Component } from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createDrawerNavigator } from '@react-navigation/drawer';
 

  const data = [
    {key:'虎牙直播',val:'交友需谨慎，请注意保护个人隐私',img:require('./img/1.jpg'),a:'http://www.huya.com'},
    {key:'微视',val:'发现更有趣',img:require('./img/ws.jpg'),a:'https://mumu.163.com/games/14394.html'},
    {key:'拼多多',val:'拼着买，才便宜',img:require('./img/pdd.jpg'),a:'https://panduoduo.yangkeduo.com/'},
    {key:'斗鱼',val:'交友需谨慎，请注意保护个人隐私',img:require('./img/dy.jpg'),a:'https://www.douyu.com/'},
    {key:'小红书',val:'3亿年轻人都在分享的生活社区',img:require('./img/xhs.jpg'),a:'https://www.xiaohongshu.com/explore'},
    {key:'抖音',val:'看视频领红包',img:require('./img/dyin.jpg'),a:'https://www.douyin.com/'},
    {key:'快手',val:'拥抱每一种生活',img:require('./img/ks.jpg'),a:'https://www.kuaishou.com/'},
    {key:'闲鱼',val:'闲置交易平台，趣味生活社区',img:require('./img/xy.jpg'),a:'https://www.1688.com/huo/b-CFCCD3E3B9D9CDF8CCD4B1A6.html'},
  ]
  const styles = StyleSheet.create({
    items:{
      margin:10,
      flexDirection:'row',
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:'gray'
    },
    button:{
      alignItems:'center',
      backgroundColor:'#87CEFA',
      borderRadius:25,
      paddingTop:15,
      height:50,
      width:80
    },
   
  })

  
  export default class App extends Component {
    open=()=>{
      let url1 = 'http://www.huya.com';
      let url2 = 'https://appgallery.huawei.com/#/Apps';
          Linking.openURL(url1) 
          Linking.openURL(url2)
    }

    render() {
      return (
      <FlatList

      
 
      ListHeaderComponent={()=>
        <View style={{height:40,marginLeft:20,marginRight:20, marginTop:10,backgroundColor:'white',flexDirection:'row',borderRadius:60}}>
        <TextInput fontSize={15} placeholder={'猎聘-招人、找工作就用猎聘聊'} style={{
          borderRadius:80}}>
            </TextInput>
</View>
}
     data={data}
          

     renderItem={({item})=>(
               
  
      <TouchableOpacity  onPress={()=>alert(item.key)}>    
      
        <View style={styles.items}>
        <Image  source={item.img} style={{width:80,height:80,borderRadius:20}}/>
        <View style={{flex:1,paddingLeft:10}}>
          <Text style={{fontSize:20}}>{item.key}</Text>
          <Text style={{fontSize:15,paddingTop:5}}>{item.val}</Text>
        </View>
  
       <TouchableOpacity onPress={() => Linking.openURL(item.a)}  style={styles.button}>
            <Text >安装</Text>
      </TouchableOpacity>
       </View>
       </TouchableOpacity>
    )}
  />
  );
  }

  }