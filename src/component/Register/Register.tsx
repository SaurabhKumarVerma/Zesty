import { ActivityIndicator, Alert, Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { ZestyText } from '../../base/ZestyText/ZestyText';
import { app_color } from '../../themes/color';
import { ZestyTextInput } from '../../base/ZestyTextInput/ZestyTextInput';
import { spacing } from '../../themes/spacing';
import Feather from '@expo/vector-icons/Feather';
import Checkbox from 'expo-checkbox';
import ZestyButton from '../../base/ZestyButton/ZestyButton';
import Google from '../../../assets/icons/google.svg';
import { useRegisterMutation } from '@services/graphql/queries/useRegisterMutation';
import { UserRole } from 'graphql/generated/graphql';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';
import { replace } from '@navigation/RootNavigation';
import Toast from 'react-native-toast-message';

const offset = { closed: 0, opened: 20 };

const Register = () => {
  const [isChecked, setChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerMutation = useRegisterMutation();

  const navigateToRegister = () => {
    replace(ESCREEN_NAME.LOGIN_SCREEN);
  };

  const handleRegister = async () => {
    // if (!email.length || !password.length) {
    //   Toast.show({
    //     position: 'bottom',
    //     type: 'error',
    //     props: 'Enter Email or Password',
    //   });

    //   return;
    // }
    try {
      const result = await registerMutation.mutateAsync({
        input: { email, password, role: UserRole.Client },
      });

      if (result.createAccount.ok) {
        replace(ESCREEN_NAME.LOGIN_SCREEN);
      } else {
        Toast.show({
          position: 'bottom',
          type: 'error',
          props: result.createAccount.error || 'Unknown error',
        });
      }
    } catch (err: any) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        props: registerMutation.error || 'Unknown error',
      });
    }
  };

  const showEye = () => {
    return (
      <View style={{ alignSelf: 'center', marginRight: 20 }}>
        <Feather name="eye-off" size={18} color="black" />
      </View>
    );
  };
  const offset = { closed: 0, opened: 20 };
  return (
    <View>
      <ZestyText text="Create your new account" preset="heading" />
      <ZestyText
        text="Create an account to start looking for the food you like"
        preset="medium"
        style={{ color: app_color.medium_gray, marginTop: 20, flexShrink: 1 }}
      />

      <View style={{ marginTop: 32 }}>
        <ZestyText
          text="Email Address"
          preset="medium"
          style={{ color: app_color.charcoal_black, marginBottom: spacing.xs }}
        />
        <ZestyTextInput
          placeholder="Enter Email"
          value={email}
          style={{}}
          onChangeText={setEmail}
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
          secureTextEntry
          placeholder="Password"
          style={{}}
          RightAccessory={showEye}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Pressable
        style={{
          marginTop: spacing.md,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? app_color.sunset_orange : app_color.light_gray}
        />
        <ZestyText
          text="I Agree with"
          preset="medium"
          style={{
            color: app_color.charcoal_black,
            marginBottom: spacing.xs,
            marginTop: spacing.md,
            marginLeft: spacing.xxxs,
          }}
        />
        <ZestyText
          text="Terms of Service"
          preset="medium"
          style={{
            color: app_color.sunset_orange,
            marginBottom: spacing.xs,
            marginTop: spacing.md,
            paddingHorizontal: spacing.xxs,
          }}
        />
        <ZestyText
          text="and"
          preset="medium"
          style={{
            color: app_color.charcoal_black,
            marginBottom: spacing.xs,
            marginTop: spacing.md,
          }}
        />
        <ZestyText
          text="Privacy Policy"
          preset="medium"
          style={{
            color: app_color.sunset_orange,
            marginBottom: spacing.xs,
            marginTop: spacing.md,
            paddingHorizontal: spacing.xxs,
          }}
        />
      </Pressable>

      <View style={{ marginTop: spacing.lg }}>
        <ZestyButton
          ctaText="Sign In"
          isLoading={registerMutation.isPending}
          onPress={handleRegister}
        />
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
          text="Have an account?"
          preset="medium"
          style={{ color: app_color.charcoal_black }}
        />
        <ZestyText text=" Sign In" preset="medium" style={{ color: app_color.sunset_orange }} />
      </Pressable>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  horizontalStyle: {
    height: 1,
    backgroundColor: app_color.medium_neutral_gray,
    width: '30%',
  },
});
