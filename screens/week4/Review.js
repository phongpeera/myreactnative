import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ReviewCard from '../../components/week4/ReviewCard'
import ReviewHeader from '../../components/week4/ReviewHeader'

export default function Review() {
  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 50 }}>
        <View style={{ marginHorizontal: 15 }}>
          <ReviewHeader />
          <ReviewCard
            image={require('../../assets/week3/profile-3.jpg')}
            name="Grigoriy Kozhukhov"
            date="Jun 2018"
            title="Nice Place"
            detail="Andax Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo"
          />
          <ReviewCard
            image={require('../../assets/week3/profile-4.jpg')}
            name="Ea Tipene"
            date="Jun 2018"
            title="Great for famillies"
            detail="Andax Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo"
          />
        </View>
      </View>
    </ScrollView>
  )
}
