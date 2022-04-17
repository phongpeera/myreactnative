import { View, Text, Image } from 'react-native'
import React from 'react'
import MyIcon from '../week3/MyIcon'

export default function Section5() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        paddingVertical: 8,
        borderBottomColor: '#f5f5f5',
        borderWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}>
      <MyIcon title="wifi" name="wifi" size={20} color="#478d9f" fontColor="gray" />
      <MyIcon title="coffee" name="coffee" size={20} color="#478d9f" fontColor="gray" />
      <MyIcon title="bath" name="bath" size={20} color="#478d9f" fontColor="gray" />
      <MyIcon title="car" name="car" size={20} color="#478d9f" fontColor="gray" />
      <MyIcon title="paw" name="paw" size={20} color="#478d9f" fontColor="gray" />
    </View>
  )
}
