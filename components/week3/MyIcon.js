import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function MyIcon(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          width: props.size * 1.6,
          height: props.size * 1.6,
          borderRadius: (props.size * 1.6) / 2,
          backgroundColor: props.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={props.onPress}>
        <FontAwesome name={props.name} size={props.size} color={props.color} />
      </TouchableOpacity>
      <Text style={{ color: props.fontColor }}>{props.title}</Text>
    </View>
  )
}
