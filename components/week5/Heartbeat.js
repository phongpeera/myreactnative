import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MyIcon from '../week3/MyIcon'

export default function Heartbeat() {
  const [heart, setHeart] = useState('0')
  const onPressHeart = () => {
    setHeart(Number(heart) + 1)
  }
  const [firstName, setFirstName] = useState('phongpeera')
  const [lastName, setLastName] = useState('luangpinij')
  console.log(firstName, lastName)
  return (
    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
      <View style={{ justifyContent: 'center', marginTop: 15 }}>
          <MyIcon name="heart" size={30} color="tomato" onPress={onPressHeart}/>
      </View>
      <View>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>{heart}</Text>
      </View>
    </View>
  )
}