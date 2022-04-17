import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function ReviewCard(props) {
  return (
    <View
      style={{
        marginTop: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={props.image}
            style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
          />
          <View style={{ paddingLeft: 5 }}>
            <Text style={{ fontSize: 15 }}>{props.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome name="star" size={12} color="orange" />
              <FontAwesome name="star" size={12} color="orange" />
              <FontAwesome name="star" size={12} color="orange" />
              <FontAwesome name="star" size={12} color="orange" />
              <FontAwesome name="star-o" size={12} color="gray" />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 12, color: 'gray', textAlign: 'center' }}>{props.date}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 5 }}>
        <Text style={{ fontSize: 15 }}>{props.title}</Text>
        <Text style={{ fontSize: 12.5, color: 'gray', paddingTop: 5 }}>{props.detail}</Text>
      </View>
    </View>
  )
}
