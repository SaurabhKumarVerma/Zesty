import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { ZestyTextInput } from '../../base/ZestyTextInput/ZestyTextInput';
import Feather from '@expo/vector-icons/Feather';
import Google from '../../../assets/icons/google.svg';
import { ZestyText } from '@base/ZestyText/ZestyText';
import { app_color } from '@themes/color';
import { spacing } from '@themes/spacing';
import ZestyButton from '@base/ZestyButton/ZestyButton';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';
import { replace } from '@navigation/RootNavigation';

const Login = () => {
  

  const showEye = () => {
    return (
      <View style={{ alignSelf: 'center', marginRight: 20 }}>
        <Feather name="eye-off" size={18} color="black" />
      </View>
    );
  };

  const navigateToRegister = () => {
    replace(ESCREEN_NAME.REGISTER_SCREEN)
  }

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
        <ZestyTextInput placeholder="Enter Email" style={{}} />

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
          secureTextEntry
          placeholder="Password"
          style={{}}
          RightAccessory={showEye}
        />
      </View>

      <ZestyText
        text="Forgot password?"
        preset="medium"
        style={{ color: app_color.sunset_orange, marginTop: spacing.lg, textAlign: 'right' }}
      />

      <View style={{ marginTop: spacing.lg }}>
        <ZestyButton ctaText="Sign In" isLoading={false} onPress={() => console.log()} />
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

export default Login;

const styles = StyleSheet.create({
  horizontalStyle: {
    height: 1,
    backgroundColor: app_color.medium_neutral_gray,
    width: '30%',
  },
});
