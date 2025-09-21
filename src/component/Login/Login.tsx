import { Pressable, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { ZestyTextInput } from '../../base/ZestyTextInput/ZestyTextInput';
import Feather from '@expo/vector-icons/Feather';
import Google from '../../../assets/icons/google.svg';
import { ZestyText } from '@base/ZestyText/ZestyText';
import { app_color } from '@themes/color';
import { spacing } from '@themes/spacing';
import ZestyButton from '@base/ZestyButton/ZestyButton';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';
import { replace } from '@navigation/RootNavigation';
import { observer } from 'mobx-react';
import { useRootStore } from '@contexts/RootStoreContext';
import Toast from 'react-native-toast-message';
import { useLoginMutation } from '@services/graphql/queries/useLoginMutation';
import { ClientStorage } from '@services/storage/client_strorage';

interface ILOGIN {
  handleExpand: () => void;
}

const Login = (props: ILOGIN) => {
  const { globalStore, userStore } = useRootStore();
  const loginMutation = useLoginMutation();

  useEffect(() => {
    return () => {
      globalStore.showContent(true);
    };
  }, []);

  const showSecureTextEntry = () => {
    globalStore.showContent(!globalStore.isVisible);
  };

  const showEye = () => {
    return (
      <Pressable onPress={showSecureTextEntry} style={{ alignSelf: 'center', marginRight: 20 }}>
        <Feather name={globalStore.isVisible ? 'eye-off' : 'eye'} size={18} color="black" />
      </Pressable>
    );
  };

  const handleSignin = async () => {
    if (!userStore.userEmail || !userStore.userPassword) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        props: 'Enter Email or Password',
      });

      return;
    }

    try {
      const result = await loginMutation.mutateAsync({
        input: { email: userStore.userEmail, password: userStore.userPassword },
      });
      if (result.login.ok) {
        if (result?.login?.accessToken && result?.login?.refreshToken && result?.login?.userId) {
          ClientStorage.saveData(
            process.env.EXPO_PUBLIC_CLIENT_STORAGE_ACCESS_TOKEN,
            result?.login?.accessToken,
          );
          ClientStorage.saveData(
            process.env.EXPO_PUBLIC_CLIENT_STORAGE_REFRESH_TOKEN,
            result?.login?.refreshToken,
          );
          ClientStorage.saveData(
            process.env.EXPO_PUBLIC_CLIENT_STORAGE_USER_ID,
            String(result?.login?.userId),
          );
        }
        globalStore.setUserDetails(result?.login?.accessToken, result?.login?.refreshToken, result?.login?.userId)
        // replace(ESCREEN_NAME.HOME_TAB);
      }
    } catch (error) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        props: loginMutation.error || 'Unknown error',
      });
    }
  };

  const navigateToRegister = () => {
    replace(ESCREEN_NAME.REGISTER_SCREEN);
  };

  return (
    <View style={{}}>
      <ZestyText text="Login to your account" preset="heading" />
      <ZestyText
        text="Please sign in to your account"
        preset="medium"
        style={{ color: app_color.medium_gray, marginTop: 20 }}
      />

      <View style={{ marginTop: 32 }}>
        <ZestyText
          text="Email Address"
          preset="medium"
          style={{ color: app_color.charcoal_black, marginBottom: spacing.xs }}
        />
        <ZestyTextInput
          placeholder="Enter Email"
          style={{}}
          value={userStore.userEmail}
          onChangeText={(email) => userStore.setUserEmail(email)}
        />

        <ZestyText
          text="Password"
          preset="medium"
          style={{
            color: app_color.charcoal_black,
            marginBottom: spacing.xs,
            marginTop: spacing.md,
          }}
        />
        <ZestyTextInput
          secureTextEntry={globalStore.isVisible}
          placeholder="Password"
          style={{}}
          RightAccessory={showEye}
          value={userStore.userPassword}
          onChangeText={(password) => userStore.setUserPassword(password)}
        />
      </View>

      <Pressable onPress={props.handleExpand} hitSlop={{ top: 10, bottom: 10 }}>
        <ZestyText
          text="Forgot password?"
          preset="medium"
          style={{ color: app_color.sunset_orange, marginTop: spacing.lg, textAlign: 'right' }}
        />
      </Pressable>

      <View style={{ marginTop: spacing.lg }}>
        <ZestyButton ctaText="Sign In" isLoading={loginMutation.isPending} onPress={handleSignin} />
      </View>

      <View
        style={{
          marginTop: spacing.lg,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={styles.horizontalStyle} />
        <ZestyText
          text="Or sign in with"
          preset="medium"
          style={{ color: app_color.medium_neutral_gray }}
        />
        <View style={styles.horizontalStyle} />
      </View>

      <Pressable style={{ alignSelf: 'center', marginTop: spacing.lg }}>
        <Google style={{ width: 30, height: 30 }} />
      </Pressable>

      <Pressable
        style={{
          flexDirection: 'row',
          marginTop: spacing.xl,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={navigateToRegister}
      >
        <ZestyText
          text="Don't have an account?"
          preset="medium"
          style={{ color: app_color.charcoal_black }}
        />
        <ZestyText text=" Register" preset="medium" style={{ color: app_color.sunset_orange }} />
      </Pressable>
    </View>
  );
};

export default observer(Login);

const styles = StyleSheet.create({
  horizontalStyle: {
    height: 1,
    backgroundColor: app_color.medium_neutral_gray,
    width: '30%',
  },
});
