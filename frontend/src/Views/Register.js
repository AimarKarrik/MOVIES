import React from 'react'
import { Button, Form, TextInput } from 'react-native'

export default function Register() {
  return (
    <div>
        Register forms
        <Button title="Continue" onPress={() => navigation.navigate('Home')}/>
    </div>
  )
}
