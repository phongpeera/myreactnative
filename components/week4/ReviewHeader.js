import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import ReviewScore from './ReviewScore'

export default function ReviewHeader() {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <FontAwesome name="arrow-left" size={18} color="tomato" style={{ width: 50 }} />
        <Text style={{ fontSize: 18, color: 'gray' }}>Reviews</Text>
        <Text style={{ fontSize: 18, color: 'tomato' }}>Replay</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <View style={{ flex: 4.2, alignSelf: 'center' }}>
          <Text style={{ fontSize: 40, color: 'tomato', textAlign: 'center' }}>4.7</Text>
          <Text style={{ color: 'gray', textAlign: 'center' }}>out of 5</Text>
        </View>
        <View style={{ flex: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <FontAwesome name="star" size={10} color="gray" />
                <FontAwesome name="star" size={10} color="gray" />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <FontAwesome name="star" size={10} color="gray" />
              </View>
            </View>
            <View style={{ marginLeft: 10 }}>
              <ReviewScore widthActual={10} widthRemain={140} />
              <ReviewScore widthActual={10} widthRemain={140} />
              <ReviewScore widthActual={50} widthRemain={100} />
              <ReviewScore widthActual={60} widthRemain={90} />
              <ReviewScore widthActual={20} widthRemain={130} />
            </View>
          </View>
          <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'right' }}>25 Ratings</Text>
        </View>
      </View>
    </View>
  )
}
