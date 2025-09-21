import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Delivery from '@component/Delivery/Delivery'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

const DeliveryScreen = () => {
    const inset = useSafeAreaInsets()
  return (
    <View style={{ flex: 1}}>
        <StatusBar hidden/>
      <Delivery />
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({
    
})