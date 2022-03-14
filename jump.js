import React, { Component } from 'react';
import { Text, View ,Button, ImageBackground,TextInput,TouchableOpacity,Keyboard} from 'react-native';


const JumpScreen = ({ navigation }) => {
  return (
    <ImageBackground
    
          source={require('./img/bg.jpg')}
          style={{flex:1}}  imageStyle={{resizeMode: 'cover'}}>
<TextInput  
 fontSize={20} Keyboard={true}  placeholderTextColor={'red'} placeholder={'请输入手机号'} style={{  marginTop:40,borderBottomWidth:2,borderBottomColor:'grey'}}>
</TextInput>

<TextInput secureTextEntry={true} fontSize={20} placeholderTextColor={'red'} placeholder={'请输入密码'} style={{borderBottomWidth:2,borderBottomColor:'grey',}}>
</TextInput>
<View style={{height:60,marginLeft:100,marginRight:100}}>
<Button 
onPress={() => navigation.navigate("First")}
      title="登录"
      color="#00BFFF"     />
<Button
onPress={() => navigation.navigate("second")}
      title="注册"
      color="#7FFFD4"      />
</View>
<View style={{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        }}>
<Text style={{fontSize:40}}>
  应用商城
</Text>
</View>
</ImageBackground>
    );
  }

export default JumpScreen;
   