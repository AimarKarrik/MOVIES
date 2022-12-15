import React from 'react'
import { Button, View, Text, Image } from 'react-native'
import Shrekposter from '../../images/Shrekiposter.jpg'
import ProfilePic from '../../images/profilePic.png'
import movieData from '../../../backend/demoData/moviesDemoData.json'

export default function MainPage({navigation}) {


  const MoviePreview = ({id, title, content, imageUrl})=>{
    return(
      <View style={{ padding:"16px"}} onClick={() => navigation.navigate('Details', {id, title, content, imageUrl})}>
        <Image style={{ width: 200, height: 200, borderRadius: 20 }} source={{uri:imageUrl}}/>
        <Text>{title}</Text>
      </View>
    )
  }

  return (
    <>
      <Button title="Go to Profile"
      onPress={() => navigation.navigate('Profile', {username:"Lord Farquaad", info:"Mirror, Mirror on the wall.."})} />
      <Text style={{fontSize:"20px", padding:"8px"}}>Populaarsed filmid</Text>
      <div style={{display:'flex', overflow:'auto', margin:'8px'}}>
      <MoviePreview title="Shrek 1" content="Nad päästsid kuuma neiu" imageUrl={Shrekposter} id="1"/>
      <MoviePreview title="Shrek 2" content="Enesearmastus on tähtis" imageUrl={Shrekposter} id="2"/>
      <MoviePreview title="Shrek 3" content="Kuningas sureb." imageUrl={Shrekposter} id="3"/>
      </div>
      <Text style={{fontSize:"20px", padding:"8px"}}>Komöödiad</Text>
      <div style={{display:'flex', overflow:'auto', margin:'8px'}}>
      <MoviePreview title="Shrek 1" content="Nad päästsid kuuma neiu" imageUrl={Shrekposter} id="1"/>
      <MoviePreview title="Shrek 2" content="Enesearmastus on tähtis" imageUrl={Shrekposter} id="2"/>
      <MoviePreview title="Shrek 3" content="Kuningas sureb." imageUrl={Shrekposter} id="3"/>
      </div>
    </>
    
  )
}
