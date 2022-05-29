import React from "react";
import MapView from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function PeopleMarkers(props) {
  return props.items.map((item) => (
    <MapView.Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.user_id}
      key={item.id.toString()}
      description={`Lat: ${item.latitude} Long: ${item.longitude}`}
    >
        <FontAwesome name="user" size={20} color="tomato" />
    </MapView.Marker>
  ));
}
