import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

export default function Section2() {
  return (
    <View
      style={{
        marginTop: -45,
        paddingVertical: 10,
        marginBottom: 30,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#f5f5f5',
        backgroundColor: '#f5f5f5',
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1,
        },
        flexDirection: 'column',
      }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
        Hilton San Francisco
      </Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <FontAwesome name="star" size={15} color="orange" />
        <FontAwesome name="star" size={15} color="orange" />
        <FontAwesome name="star" size={15} color="orange" />
        <FontAwesome name="star" size={15} color="orange" />
        <FontAwesome name="star-half" size={15} color="orange" />
      </View>
      <Text style={{ color: 'gray', fontSize: 12, textAlign: 'center' }}>
        Facilities provided may range from a modest quality mattress in a small room to large suites
      </Text>
    </View>
  )
}
