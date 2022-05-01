import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Ex1() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ backgroundColor: '#50E3C2', height: 100 }}></View>
      </View>
      <Button title="Next" onPress={() => navigation.navigate('Ex2')} />
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
