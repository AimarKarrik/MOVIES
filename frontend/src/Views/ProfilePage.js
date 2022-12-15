import React from 'react'
import { View, Text, Button } from 'react-native';
import ProfilePicture from '../../images/profilepic.png'

export default function ProfilePage({route,navigation}) {
  return (
    <View>
        <Text>John doe</Text>
        <Text>Leiutaja lote peategelane</Text>
        <Button title="Check out ur friend activity" onPress={() => navigation.navigate('Feed')}/>
        <Button title="Log out" onPress={() => navigation.navigate('Auth')}/>
    </View>
  )
}
