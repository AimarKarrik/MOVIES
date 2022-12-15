import React from 'react'
import { View, Text } from 'react-native'

export default function Feed() {

    const NewPost = ({name,content,title, movieName,date})=>{
        if (title=="watched"){
            return(
                <div style={{}}>
                <View style={{}}>
                    <Text>{name} watched {movieName}</Text>
                    <Text>{date}</Text>
                </View>
                </div>
            )
            } else if (title=="reviewed"){
            return(
                <View>
                    <Text>{name}</Text>
                    <Text>{date}</Text>
                    <Text>{movieName}</Text>
                    <Text>{content}</Text>
                </View>
            )
        } else if(title=="liked"){
            return(
                <View>
                    <Text>{name} liked {movieName}</Text>
                </View>
            )
        }
        }
        return (
            <div>
            <NewPost title="liked" name="laura" movieName="shrek 1"/>
            <NewPost title="reviewed" name="aimar" movieName="shrek 2" content="väga halb oli."/>
            </div>
          )
    }

