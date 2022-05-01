import { View, Text, TextInput } from 'react-native'
import React from 'react'
import MyIcon from './MyIcon'

export default function Menu() {
  return (
    <View
      style={{
        marginTop: 20,
        marginHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 30,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#f5f5f5',
      }}>
      <View>
        <TextInput
          placeholder="What're you looking for?"
          style={{
            fontSize: 20,
            backgroundColor: '#f5f5f5',
            marginHorizontal: 10,
            height: 50,
            paddingLeft: 10,
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
        <MyIcon
          title="Hotel"
          name="building"
          size={30}
          color="tomato"
          backgroundColor="#f5f5f5"
          fontColor="gray"
        />
        <MyIcon
          title="Tour"
          name="map-marker"
          size={30}
          color="tomato"
          backgroundColor="#f5f5f5"
          fontColor="gray"
        />
        <MyIcon
          title="Car"
          name="car"
          size={30}
          color="tomato"
          backgroundColor="#f5f5f5"
          fontColor="gray"
        />
        <MyIcon
          title="Flight"
          name="plane"
          size={30}
          color="tomato"
          backgroundColor="#f5f5f5"
          fontColor="gray"
        />
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
        <MyIcon
          title="Cruise"
          name="ship"
          size={30}
          color="tomato"
          backgroundColor="#f5f5f5"
          fontColor="gray"
        />
        <MyIcon
          title="Bus"
          name="bus"
          size={30}
          color="tomato"
          backgroundColor="#f5f5f5"
          fontColor="gray"
        />
        <MyIcon
          title="Event"
          name="star"
          size={30}
          color="tomato"
          backgroundColor="#f5f5f5"
          fontColor="gray"
        />
        <MyIcon
          title="More"
          name="ellipsis-h"
          size={30}
          color="tomato"
          backgroundColor="#f5f5f5"
          fontColor="gray"
        />
      </View>
    </View>
  )
}
