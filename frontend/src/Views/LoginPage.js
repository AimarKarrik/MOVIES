import React from 'react'
import { Button } from 'react-native'



export default function LoginPage() {
  return (
    <div>
    Login forms
    <Button title="Continue" onPress={() => navigation.navigate('Home')}/>
    </div>
  )
}
