import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ZestyText } from '@base/ZestyText/ZestyText';
import { app_color } from '@themes/color';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import ZestyButton from '@base/ZestyButton/ZestyButton';
import ZestyHeader from '@base/ZestyHeader/ZestyHeader';
import OtpInputScreen from './OtpInput';
import { useNavigation } from '@react-navigation/native';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';

const Otp = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  
    const continueToResetScreen = () => {
      navigation.navigate(ESCREEN_NAME.RESET_PASSWORD_SCREEN);
    };
  return (
    <>
      <View style={{ top: inset.top + 10, marginHorizontal: 24, flex: 1 }}>
        <ZestyHeader headerText={'OTP'} />
        <ZestyText
          text="Email verification"
          preset="semiBold"
          size="bold"
          style={{ marginTop: 8 }}
        />

        <View style={{}}>
          <ZestyText
            text="Enter the verification code we send you on:"
            preset="medium"
            size="xs"
            style={{ marginTop: 8, color: app_color.medium_gray }}
          />
          <ZestyText
            text="Alberts******@gmail.com|"
            preset="medium"
            size="xs"
            style={{ marginTop: 1, color: app_color.medium_gray }}
          />

          <OtpInputScreen />
        </View>
      </View>

      <KeyboardStickyView>
        <View style={{ bottom: 24 }}>
          <ZestyButton ctaText="Continue" isLoading={false} onPress={() => continueToResetScreen()} />
        </View>
      </KeyboardStickyView>
    </>
  );
};

export default Otp;

const styles = StyleSheet.create({});
