import React from 'react'
import { View, Text, Button } from 'react-native';
import ProfilePicture from '../../images/profilepic.png'

export default function ProfilePage({route,navigation}) {
  return (
    <View>
        <Image style={{width:"200px", height:"200px"}} source={ProfilePicture} />
        <Text>John doe</Text>
        <Text>Leiutaja lote peategelane</Text>
        <Button title="Log out" onPress={() => navigation.navigate('Auth')}/>
    </View>
  )
}
