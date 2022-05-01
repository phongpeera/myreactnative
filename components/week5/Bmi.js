import React, { useState } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import MyIcon from '../week3/MyIcon'

export default function Bmi() {
  const [weight, setWeight] = useState('70')
  const [height, setHeight] = useState('170')
  const [bmi, setBmi] = useState('0')
  const [description, setDescription] = useState('')

  console.log('STATE :', weight, height, bmi)

  const onPressButton = () => {
    console.log('Calculate button is pressed!!!')
    let output = weight / (((height / 100) * height) / 100)
    setBmi(output.toFixed(2))

    if (output < 18.5) setDescription('Underweight')
    else if (output >= 18.5 && output <= 24.99) setDescription('Normal')
    else if (output >= 25 && output <= 29.99) setDescription('Overweight')
    else if (output >= 30 && output <= 34.99) setDescription('Obese')
    else setDescription('Extremely Obese')
  }

  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          marginVertical: 10,
          borderRadius: 10,
          height: 100,
          justifyContent: 'space-around',
        }}>
        <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          placeholder="Input your Weight..."
          value={weight}
          keyboardType="numeric"
          onChangeText={(newWeight) => setWeight(newWeight)}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          marginVertical: 10,
          borderRadius: 10,
          height: 100,
          justifyContent: 'space-around',
        }}>
        <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          placeholder="Input your Height..."
          value={height}
          keyboardType="numeric"
          onChangeText={(newHeight) => setHeight(newHeight)}
        />
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 10,
            marginRight: 10,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 20 }}>{bmi}</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 10,
            marginLeft: 10,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 20 }}>{description}</Text>
        </View>
      </View>
      {/* <Button title="Calculate" onPress={onPressButton}></Button> */}
      <TouchableOpacity onPress={onPressButton}>
        <View style={{ padding: 20, backgroundColor: 'blue', borderRadius: 40 }}>
          <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>Calculate</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
