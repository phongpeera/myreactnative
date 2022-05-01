import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Ex2() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch' }}>
        <View style={{ backgroundColor: '#50E3C2', width: 100 }}></View>
      </View>
      <Button title="Next" onPress={() => navigation.navigate('Ex3')} />
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
