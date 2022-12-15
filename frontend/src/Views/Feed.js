import React from 'react'

export default function Feed() {

    const NewPost = ({name,content,title, movieName,date})=>{
        if (title="watched"){
            return(
                <View style={{}}>
                    <Text>{name} watched {movieName}</Text>
                    <Text>{date}</Text>
                </View>
            )

        if (title="reviewed"){
            return(
                <View>
                    <Text>{name}</Text>
                    <Text>{date}</Text>
                    <Text>{movieName}</Text>
                    <Text>{content}</Text>
                </View>
            )
        }

        if(title="liked"){
            return(
                <View>
                    <Text>{name} liked {movieName}</Text>
                </View>
            )
        }
        }
    }

  return (
    <Text>News</Text>
  )
}
