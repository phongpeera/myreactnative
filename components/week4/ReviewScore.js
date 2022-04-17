import { View, Text } from 'react-native'
import React from 'react'

export default function ReviewScore(props) {
  return (
    <View style={{ paddingTop: 3, paddingBottom: 4, flexDirection: 'row' }}>
      <View
        style={{
          height: 3,
          flexDirection: 'row',
          backgroundColor: 'tomato',
          borderColor: 'tomato',
          borderWidth: 1,
          width: props.widthActual
        }}
      />
      <View
        style={{
          height: 3,
          flexDirection: 'row',
          backgroundColor: '#f5f5f5',
          borderColor: '#f5f5f5',
          borderWidth: 1,
          width: props.widthRemain
        }}
      />
    </View>
  )
}
