import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ZestyText } from '@base/ZestyText/ZestyText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { app_color } from '@themes/color';
import { ZestyTextInput } from '@base/ZestyTextInput/ZestyTextInput';
import { spacing } from '@themes/spacing';
import ZestyButton from '@base/ZestyButton/ZestyButton';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import { useNavigation } from '@react-navigation/native';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';

const ForgotPassword = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();

  const continueToOtpScreen = () => {
    navigation.navigate(ESCREEN_NAME.OTP_SCREEN);
  };
  return (
    <>
      <View style={{ marginHorizontal: 24, flex: 1, top: inset.top }}>
        <ZestyText text="Forgot password?" preset="semiBold" size="bold" />

        <View style={{}}>
          <ZestyText
            text="Enter your email address and we’ll send you confirmation code to reset your password"
            preset="medium"
            size="xs"
            style={{ marginTop: 8, color: app_color.medium_gray }}
          />

          <View style={{ top: 32 }}>
            <ZestyText
              text="Email Address"
              preset="medium"
              style={{ color: app_color.charcoal_black, marginBottom: spacing.xs }}
            />
            <ZestyTextInput placeholder="Enter Email" style={{}} />
          </View>
        </View>
      </View>
      <KeyboardStickyView>
        <View style={{ bottom: 24 }}>
          <ZestyButton ctaText="Continue" isLoading={false} onPress={() => continueToOtpScreen()} />
        </View>
      </KeyboardStickyView>
    </>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
