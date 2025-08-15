import { ActivityIndicator, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './src/screen/SplashScreen/Splash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { typography } from './src/themes/typography';
import { app_color } from './src/themes/color';
import RegisterScreen from './src/screen/RegisterScreen/RegisterScreen';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { RootStoreContext } from './src/contexts/RootStoreContext';
import rootStore from './src/store/RootStore';
import { QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/RootNavigation';
import AuthNavigation from './src/navigation/Auth/AuthNavigation';
import Toast from 'react-native-toast-message';
import ToastConfig from './src/base/ZestyToast/ZestyToast';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

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
    IcoMoon: require('./assets/icons/icomoon.ttf'),
    ...typography,
  });

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
      SplashScreen.hide();
      setAppIsReady(true);
      // fetchFonts()
    }
  }, [loaded, error]);

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

  if (!loaded && !error) {
    return <ActivityIndicator color={app_color.white} />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStoreContext.Provider value={rootStore}>
        <QueryClientProvider client={rootStore.queryClient}>
          <BottomSheetModalProvider >
            <GestureHandlerRootView style={styles.container}>
              <KeyboardProvider>
                <SafeAreaProvider onLayout={onLayoutRootView}>
                  <AuthNavigation />
                </SafeAreaProvider>
              </KeyboardProvider>
            </GestureHandlerRootView>
          </BottomSheetModalProvider>
        </QueryClientProvider>
      </RootStoreContext.Provider>
      <Toast config={ToastConfig} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
