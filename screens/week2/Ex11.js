import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Ex11() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, flexDirection: 'col' }}>
      <View
        style={{
          flex: 2,
          backgroundColor: '#4A90E2',
          // flexDirection: 'row',
          // alignSelf: 'stretch',
        }}></View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#50E3C2',
          // flexDirection: 'row',
          // alignSelf: 'stretch',
        }}></View>
      <Button title="Next" onPress={() => navigation.navigate('Ex12')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
