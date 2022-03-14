import React, { Component } from 'react';
import { Text, View ,Button, ImageBackground,TextInput,TouchableOpacity} from 'react-native';


const JieshaoScreen = ({ navigation }) => {
  return (
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
    );
  }

export default JieshaoScreen;
   