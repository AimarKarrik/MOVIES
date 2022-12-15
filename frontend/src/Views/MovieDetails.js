import React from 'react'
import { View, Text, Image } from 'react-native'


export default function MovieDetails({route, navigation}) {

const {id, title, content, imageUrl} = route.params;

  return (
    <View>
      <Image style={{ width: "100vw", height: "50vh" }} source={imageUrl}/>
      <Text style={{fontSize:"24px"}}>{title}</Text>
      <Text>{content}</Text>
    </View>
  )
}
