import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Section8() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 11, fontWeight: 'bold' }}>Price</Text>
          <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'tomato' }}>$399.99</Text>
            <Text style={{ fontSize: 12, marginTop: 3 }}>AVG/Night</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
        {/* <Button title="Book Now" color="tomato" /> */}
        <TouchableOpacity style={{ backgroundColor: '#e5624e', width: 100, height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold'}}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
