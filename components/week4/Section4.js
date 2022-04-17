import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Section4() {
  return (
    <View
      style={{
        marginTop: 10,
        paddingVertical: 8,
        borderTopColor: '#f5f5f5',
        borderBottomColor: '#f5f5f5',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}>
      <Text style={{ fontSize: 18 }}>Hotel Description</Text>
      <Text style={{ color: 'gray', fontSize: 12 }}>
        218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et
        dolore
      </Text>
    </View>
  )
}
