import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SCREEN_WIDTH } from '@constant/screen-dimension';
import ZestyButton from '@base/ZestyButton/ZestyButton';
import { ClientStorage } from '@services/storage/client_strorage';

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const renderIcon = () => {
    return <Ionicons name="checkmark-circle" size={32} color="green" style={{ marginRight: 10 }} />;
  };

  const onPress = () => {
    setIsLoading(!isLoading);
    ClientStorage.deleteData(process.env.EXPO_PUBLIC_CLIENT_STORAGE_ACCESS_TOKEN)
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ width: SCREEN_WIDTH }}>
        <ZestyButton isLoading={isLoading} ctaText={'Click'} onPress={onPress} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
