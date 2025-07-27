import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import OnboardingScreen from '../../screen/OnboardingScreen/OnboardingScreen'
import { SCREEN_WIDTH } from '../../constant/screen-dimension'
import ZestyButton from '../../base/ZestyButton/ZestyButton'
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const renderIcon = () => {
    return (
      <Ionicons name="checkmark-circle" size={32} color="green" style={{marginRight: 10}}/>
    )
  }

  const onPress = () => {
    setIsLoading(!isLoading)
  }
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{width:SCREEN_WIDTH}}>
        <ZestyButton isLoading={isLoading} ctaText={'Click'} onPress={onPress} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})