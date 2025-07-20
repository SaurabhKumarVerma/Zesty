import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnboardingScreen from '../../screen/OnboardingScreen/OnboardingScreen'
import { SCREEN_WIDTH } from '../../constant/screen-dimension'

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{width:SCREEN_WIDTH}}>
        <OnboardingScreen />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})