import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import BottomNavigation from './src/navigation/BottomNavigation/BottomNavigation';
import Splash from './src/screen/SplashScreen/Splash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


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

   useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Ionicons.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <Splash />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
    <SafeAreaProvider  onLayout={onLayoutRootView}>
      <BottomNavigation/>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
