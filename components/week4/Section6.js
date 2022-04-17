import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Section6() {
  return (
    <View
      style={{
        justifyContent: 'space-around',
        paddingVertical: 5,
        borderBottomColor: '#f5f5f5',
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Location</Text>
      <Text style={{ color: 'gray', fontSize: 12 }}>
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <Image
          source={require('../../assets/week3/map.jpg')}
          style={{ flex: 1, resizeMode: 'cover', height: 120 }}
        />
      </View>
    </View>
  )
}
