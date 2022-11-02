import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Header title='XpressFood' icon='menu' cart={true}></Header>
    </View>
  )
}

const styles = StyleSheet.create({
    
})