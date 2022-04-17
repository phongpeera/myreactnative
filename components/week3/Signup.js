import { View, TextInput, Button, Alert } from 'react-native'
import React from 'react'

export default function Signup() {
  return (
    <View style={{ flex: 1, padding: 20, flexDirection: 'column', alignSelf: 'stretch' }}>
      <TextInput placeholder="Input ID" />
      <TextInput placeholder="Input email" />
      <TextInput placeholder="Input address" />
      <Button title="Sing Up" color="tomato" />
    </View>
  )
}
