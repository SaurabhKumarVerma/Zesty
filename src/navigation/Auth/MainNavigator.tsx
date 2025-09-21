import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useRootStore } from '@contexts/RootStoreContext';
import AppNavigator from './AppNavigator';
import AuthNavigation from './AuthNavigation';
import Splash from '@screen/SplashScreen/Splash';

const MainNavigator = () => {
  const { globalStore } = useRootStore();
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const init = async () => {
    //   await globalStore.getUserDetailFromStorage();
    //   setIsLoading(false);
    // };
    // init();
  }, [globalStore.access_token]);

//   if(!globalStore.access_token){
//     return <Splash />
//   }
 
  return globalStore.access_token ? <AppNavigator /> : <AuthNavigation />;
};

export default observer(MainNavigator);

const styles = StyleSheet.create({});
