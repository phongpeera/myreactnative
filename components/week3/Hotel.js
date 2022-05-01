import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function Hotel() {
  return (
    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../assets/week3/room-1.jpg')}
          style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 9, borderRadius: 20 }}
        />
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row' }}>
        <FontAwesome name="map-marker" size={32} color="tomato" />
        <Text style={{ color: 'gray', fontSize: 20, paddingTop: 10, paddingLeft: 5 }}>
          553 Cislason Radial
        </Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', paddingTop: 10, paddingLeft: 5 }}>
          Boston Hotel
        </Text>
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half" size={20} color="orange" />
        </View>
        <View>
          <Text style={{ color: 'gray', fontSize: 18 }}>100 Reviews</Text>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: 'tomato', fontSize: 30, fontWeight: 'bold' }}>$125</Text>
      </View>
    </View>
  )
}
