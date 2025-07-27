import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import BottomNavigation from './src/navigation/BottomNavigation/BottomNavigation';
import Splash from './src/screen/SplashScreen/Splash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OnboardingScreen from './src/screen/OnboardingScreen/OnboardingScreen';
import ZestyShimmer from './src/base/ZestyShimmer/ZestyShimmer';
import { ShimmerConfigs } from './src/base/ZestyShimmer/ShimmerConfigs';
import ZestyImage from './src/base/ZestyImage/ZestyImage';
import ZestyButton from './src/base/ZestyButton/ZestyButton';
import { typography } from './src/themes/typography';
import { app_color } from './src/themes/color';
import LoginScreen from './src/screen/LoginScreen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen/RegisterScreen';


SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 2000,
  fade: true,
});


// if (__DEV__) {
//   require("./ReactotronConfig.js")
// }

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache()
// });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
   const [loaded, error] = Font.useFonts({
    IcoMoon: require("./assets/icons/icomoon.ttf"),
    ...typography,
  })

  //  useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync(typography);
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

   useEffect(() => {
    if (loaded || error) {
      SplashScreen.hide()
       setAppIsReady(true);
      // fetchFonts()
    }
  }, [loaded, error])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync(); // Hide splash once view is laid out
    }
  }, [appIsReady]);



  // const onLayoutRootView = useCallback(() => {
  //   if (appIsReady) {
  //     SplashScreen.hide();
  //   }
  // }, [appIsReady]);

  if (!appIsReady) {
    return <Splash />;
  }

  if (!loaded && !error ) {
    return <ActivityIndicator color={app_color.white} />
  }

  return (
    <GestureHandlerRootView style={styles.container}>
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <RegisterScreen />
      {/* <OnboardingScreen /> */}
      {/* <ShimmerConfigs />
      <Text>asdfghj</Text> */}
     {/* <ZestyShimmer/> */}

     {/* <ZestyImage onLoadStart={() => console.log('start')} source={{uri: 'https://picsum.photos/200/300'}} style={{width: '100%', height: 500}}/> */}
      
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 100
  },
});
