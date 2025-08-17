import { View, Alert, StyleSheet, Pressable, Keyboard } from 'react-native';
import { useRef } from 'react';
import { OtpInput, OtpInputRef } from 'react-native-otp-entry';

import { app_color } from '@themes/color';
import { ZestyText } from '@base/ZestyText/ZestyText';
import { observer } from 'mobx-react';
import { useRootStore } from '@contexts/RootStoreContext';

const OtpInputScreen = () => {
  const ref = useRef<OtpInputRef>(null);
  const {userStore} = useRootStore()

  const onComplete = (code: string) => {
    Alert.alert('Completed with code:', code);
    ref.current?.clear();
  };

  const onTextChange = (value: string) => {
    userStore.setUserOtp(value)
  }
  return (
    <View>
      <OtpInput
      ref={ref}
      onFilled={() => {
        Keyboard.dismiss()
      }}
      type='numeric'
        theme={{
          containerStyle: styles.containerStyle,
          focusedPinCodeContainerStyle: styles.focusedPinCodeContainerStyle,
          focusStickStyle: styles.focusStickStyle,
        }}
        numberOfDigits={6}
        onTextChange={(text) =>onTextChange(text)}
      />
      <Pressable style={styles.resendContainer}>
        <ZestyText
          preset="medium"
          size="xs"
          text="Didn’t receive code?"
          style={{ color: app_color.medium_gray }}
        />
        <ZestyText
          preset="medium"
          size="xs"
          text=" Resend"
          style={{ color: app_color.sunset_orange }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 32,
  },
  focusedPinCodeContainerStyle: {
    borderColor: app_color.sunset_orange,
  },
  focusStickStyle: {
    backgroundColor: app_color.sunset_orange,
  },
  resendContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 16,
  },
});
export default observer(OtpInputScreen);
