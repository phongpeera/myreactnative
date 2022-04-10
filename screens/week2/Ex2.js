import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex2() {
  return (
    <View style={{ flex : 1 , flexDirection : 'row', alignItems: 'stretch' }}>    
      <View style={{ backgroundColor : '#50E3C2' , width : 100 }}></View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
