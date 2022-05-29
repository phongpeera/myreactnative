import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import UniversityMarkers from './UniversityMarkers'
import LocationLaravel from '../../services/LocationLaravel'
import PeopleMarkers from './PeopleMarkers'

export default function PeopleMapView(props) {
  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height

  const [people, setPeople] = useState([])
  const loadPeople = async () => {
    try {
      let response = await LocationLaravel.getItems()
      setPeople(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadPeople()
  }, [])

  if (props.location) {
    //DISPLAY MAP ON YOUR LOCATION
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        >
        <PeopleMarkers items={people} />
      </MapView>
    )
  } else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>
  }
}
