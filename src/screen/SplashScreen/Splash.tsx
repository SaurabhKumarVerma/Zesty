import {ImageBackground, View } from 'react-native'
import React from 'react'
import { app_images } from '../../../assets'
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <ImageBackground source={app_images.splashImage} style={{flex: 1}}>
      <LottieView autoPlay source={require("../../../assets/lottie/splash.json")} style={{  width: 200,
          height: 200, justifyContent: 'center', alignSelf: 'center', flex: 1}}/>
    </ImageBackground>
  )
}

export default Splash