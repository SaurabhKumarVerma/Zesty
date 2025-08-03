import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';
import Home from '@component/Home/Home';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ESCREEN_NAME.HOME} component={Home}/>
    </Stack.Navigator>
  )
}

export default StackNavigation