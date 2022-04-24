import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MyIcon from '../week3/MyIcon'

export default function Heartbeat() {
  const [heart, setHeart] = useState('0')
  const onPressHeart = () => {
    setHeart(Number(heart) + 1)
  }
  return (
    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity onPress={onPressHeart}>
          <MyIcon name="heart" size={30} color="tomato" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>{heart}</Text>
      </View>
    </View>
  )
}
