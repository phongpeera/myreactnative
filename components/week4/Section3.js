import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Section3() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 50 / 2,
          backgroundColor: '#e5624e',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 18, color: 'white' }}>9.5</Text>
      </View>
      <View style={{ paddingLeft: 5 }}>
        <Text style={{ fontSize: 20, color: 'tomato' }}>Excellent</Text>
        <Text style={{ color: 'gray' }}>See 801 reviews</Text>
      </View>
    </View>
  )
}
