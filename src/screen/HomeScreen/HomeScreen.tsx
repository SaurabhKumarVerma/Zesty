import { View, Text } from 'react-native';
import React from 'react';
import Home from '../../component/Home/Home';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, top: inset.top }}>
      <Home />
    </View>
  );
};

export default HomeScreen;
