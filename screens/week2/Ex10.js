import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Ex10() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#4A90E2',
          flexDirection: 'row',
          alignSelf: 'stretch',
        }}></View>
      <Button title="Next" onPress={() => navigation.navigate('Ex11')} />
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
