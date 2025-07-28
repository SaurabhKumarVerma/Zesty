import { Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { ZestyText } from '../../base/ZestyText/ZestyText';
import { app_color } from '../../themes/color';
import { ZestyTextInput } from '../../base/ZestyTextInput/ZestyTextInput';
import { spacing } from '../../themes/spacing';
import Feather from '@expo/vector-icons/Feather';
import Checkbox from 'expo-checkbox';
import ZestyButton from '../../base/ZestyButton/ZestyButton';
import Google from '../../../assets/icons/google.svg';
import { useKeyboardAnimation } from 'react-native-keyboard-controller';

const offset = { closed: 0, opened: 20 };

const Register = () => {
  const [isChecked, setChecked] = useState(true);
  const { height, progress } = useKeyboardAnimation();
  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });
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
        <ZestyTextInput placeholder="Enter Email" style={{}} />

        <ZestyText
          text="User Name"
          preset="medium"
          style={{
            color: app_color.charcoal_black,
            marginBottom: spacing.xs,
            marginTop: spacing.md,
          }}
        />
        <ZestyTextInput placeholder="User Name" style={{}} />

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

      <View
        style={{
          flexDirection: 'row',
          marginTop: spacing.xl,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ZestyText
          text="Have an account?"
          preset="medium"
          style={{ color: app_color.charcoal_black }}
        />
        <ZestyText text=" Sign In" preset="medium" style={{ color: app_color.sunset_orange }} />
      </View>
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
