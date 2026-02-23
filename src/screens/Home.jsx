import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Appbar from '../components/Appbar'
import Stories from '../components/Stories'
const Home = () => {
  return (
    <Screen>
      <View>
        <Appbar/>
        <Stories/>
      </View>
    </Screen>
  )
}

export default Home