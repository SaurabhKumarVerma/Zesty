import { ImageBackground, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { app_images } from '../../../assets';
import { observer } from 'mobx-react';
import { useRootStore } from '@contexts/RootStoreContext';

const Splash = () => {
  const { globalStore } = useRootStore();
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await globalStore.getUserDetailFromStorage();
      setIsLoading(false);
    };
    init();
  }, []);

  return (
    <ImageBackground source={app_images.splashImage} style={{ flex: 1 }}>
      <LottieView
        autoPlay
        source={require('../../../assets/lottie/splash.json')}
        style={{ width: 200, height: 200, justifyContent: 'center', alignSelf: 'center', flex: 1 }}
      />
    </ImageBackground>
  );
};

export default observer(Splash);
