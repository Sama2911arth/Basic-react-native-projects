/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import Counter from './components/Counter'
import BMI from './components/BMI'

export default function App() {
  return (
    <View>
      <Counter />
      <BMI />
    </View>
  )
}
