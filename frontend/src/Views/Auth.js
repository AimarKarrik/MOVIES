import React from 'react'
import { Button } from 'react-native'

export default function Auth({navigation}) {
  return (
    <div>
    <Button title="Log in" onPress={() => navigation.navigate('Login')}/>
    <Button title="Register" onPress={() => navigation.navigate('Register')}/>
    </div>
  )
}
