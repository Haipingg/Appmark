import {Button,SafeAreaView,ScrollView,StatusBar,StyleSheet,FlatList,Linking, Image,Text,style,useColorScheme,TouchableOpacity,
    navigation,View,TextInput,} from 'react-native';
  import  React, { Component } from 'react';
  
  const data = [
    {key:'和平精英',val:'完美画质、超大地图、百人自由竞技',img:require('./img/hpjy.jpg'),a:'https://gp.qq.com/main.shtml'},
    {key:'三国志-战略版',val:'郭德纲力荐，5000万战略家的真实战场',img:require('./img/sgz.jpg'),a:'https://sgzzlb.lingxigames.com/'},
    {key:'开心消消乐',val:'3月版本，甜蜜来袭',img:require('./img/xxl.jpg'),a:'http://xxl.happyelements.com/'},
    {key:'梦幻西游',val:'回合制扛鼎之作，人人都玩，无处不在',img:require('./img/mhxy.jpg'),a:'https://xyq.163.com/'},
    {key:'原始传奇',val:'原汁原味，经典重现',img:require('./img/yscq.jpg'),a:'http://www.tanwan.com/yscq/'},
    {key:'斗罗大陆',val:'正版授权魂兽猎杀真3D斗罗手游',img:require('./img/dldl.jpg'),a:'http://37.com.cn/dldl/'},
    {key:'大话西游',val:'携儿带女闯三界',img:require('./img/dhxy.jpg'),a:'http://dhxy.163.com/'},
    {key:'明日之后',val:'哥斯拉大战金刚联动',img:require('./img/mrzh.jpg'),a:'https://mrzh.163.com/'},

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
    }
  })

  export default class App extends Component {
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
               
      <TouchableOpacity onPress={()=>alert(item.key)}>    
      
        <View style={styles.items}>
        <Image source={item.img} style={{width:80,height:80,borderRadius:20}}/>
        <View style={{flex:1,paddingLeft:10}}>
          <Text style={{fontSize:20}}>{item.key}</Text>
          <Text style={{fontSize:15,paddingTop:5}}>{item.val}</Text>
        </View>

       <TouchableOpacity onPress={() => Linking.openURL(item.a)} style={styles.button}>
            <Text >安装</Text>
      </TouchableOpacity>
       </View>
       </TouchableOpacity>
    )}
  />
  );
  }
 
  }