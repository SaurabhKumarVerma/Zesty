import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@screen/HomeScreen/HomeScreen';
import ProfileScreen from '@screen/ProfileScreen/ProfileScreen';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';
import StackNavigation from '@navigation/StackNavigation/StackNavigation';

const Tab = createNativeBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={ESCREEN_NAME.HOME_TAB}
          component={StackNavigation}
          options={{
            tabBarIcon: () => require('./home.svgx'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => require('./home.svgx'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
