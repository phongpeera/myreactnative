import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Section1() {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../assets/week3/room-6.jpg')}
          style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 9 }}
        />
      </View>
    </View>
  )
}
