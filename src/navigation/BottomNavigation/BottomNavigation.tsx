import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import ProfileScreen from '../../screen/ProfileScreen/ProfileScreen';

const Tab = createNativeBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => require("./home.svgx")
          }}
        />
        <Tab.Screen
          name="Settings"
          component={ProfileScreen}
          options={{
             tabBarIcon: () => require("./home.svgx")
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})