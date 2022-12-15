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
                    
                </View>
            )
        }
        }
    }

  return (
    <Text>News</Text>
  )
}
