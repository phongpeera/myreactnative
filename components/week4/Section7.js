import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Section7() {
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
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Room Type</Text>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <Image
          source={require('../../assets/week3/room-8.jpg')}
          style={{ resizeMode: 'cover', width: 75, height: 80, borderRadius: 10 }}
        />
        <View style={{ flexDirection: 'column', paddingLeft: 10, justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Standard Twin Room</Text>
          <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'tomato' }}>$399.99</Text>
            <Text style={{ fontSize: 12, color: '#478d9f', marginTop: 3 }}>Hurry Up! This is your last room!</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
