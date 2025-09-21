import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';
import BottomNavigation from '@navigation/BottomNavigation/BottomNavigation';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name={ESCREEN_NAME.APP_HOME} component={BottomNavigation} />
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})