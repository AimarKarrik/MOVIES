import React from 'react'
import { View } from 'react-native';

export default function ProfilePage(route, navigation) {

const {username, info, imageUrl} = route.params;

  return (
    <View>
        <Image style={{width:500,height:500}} source={{imageUrl}}/>
        <Text></Text>
        <Text>{info}</Text>
    </View>
  )
}
