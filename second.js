import React, { Component } from 'react';
import { Text, View ,Button, ImageBackground,TextInput,TouchableOpacity} from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <ImageBackground
          source={require('./img/bg.jpg')}
          style={{flex:1}}  imageStyle={{resizeMode: 'cover'}}>
      


<TextInput fontSize={20} placeholder={'请输入手机号'} style={{ marginTop:20}}>

</TextInput>
<TextInput secureTextEntry={true} fontSize={20} placeholder={'请输入密码'} style={{ marginTop:20}}>

</TextInput>
<TextInput fontSize={20} placeholder={'请输入短信验证码'} style={{marginTop:20}}>

</TextInput>


<View style={{height:60,marginLeft:100,marginRight:100}}>


<Button
onPress={() => navigation.navigate("jump")}
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

export default SecondScreen;
   