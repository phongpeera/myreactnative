import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
        <Image
          source={require('../../assets/week3/profile-2.jpg')}
          style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
        />
        <View style={{ paddingLeft: 5 }}>
          <Text style={{ fontSize: 25 }}>Steve Garrett</Text>
          <Text style={{ color: 'gray' }}>5 hours ago | 100k views</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <Image
          source={require('../../assets/week3/trip-2.jpg')}
          style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 9 }}
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 20 }}>Overseas Adventure Travel In Nepal</Text>
        <Text style={{ color: 'gray' }}>
          Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of
          the uprising areas of Tokyo
        </Text>
      </View>
    </View>
  )
}
