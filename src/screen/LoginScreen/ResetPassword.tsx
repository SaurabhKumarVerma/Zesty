import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ZestyHeader from '@base/ZestyHeader/ZestyHeader';
import { ZestyText } from '@base/ZestyText/ZestyText';
import { app_color } from '@themes/color';
import { ZestyTextInput } from '@base/ZestyTextInput/ZestyTextInput';
import { spacing } from '@themes/spacing';
import { Feather } from '@expo/vector-icons';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import ZestyButton from '@base/ZestyButton/ZestyButton';
import ZestyModal from '@base/ZestyModal/ZestyModal';
import { EBOTTOMSHEETTYPE } from '@app_types/type';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import LottieView from 'lottie-react-native';
import { app_images } from '../../../assets';
import { observer } from 'mobx-react';
import { useRootStore } from '@contexts/RootStoreContext';

const ResetPassword = () => {
  const inset = useSafeAreaInsets();
  const snapPoints = useMemo(() => ['6%', '46%'], []);
  const sheetRef = useRef<BottomSheetMethods | null>(null);
  const { userStore } = useRootStore();

  const showPasswordEye = () => {
    return (
      <Pressable style={{ alignSelf: 'center', marginRight: 20 }}>
        <Feather name={'eye'} size={18} color="black" />
      </Pressable>
    );
  };

  const showConfirmPasswordEye = () => {
    return (
      <Pressable style={{ alignSelf: 'center', marginRight: 20 }}>
        <Feather name={'eye'} size={18} color="black" />
      </Pressable>
    );
  };

  const renderComponent = () => {
    return (
      <View>
        <LottieView
          autoPlay
          source={app_images.success}
          style={{ width: 220, height: 220, alignSelf: 'center' }}
        />

        <View style={{ alignSelf: 'center', flex: 1 }}>
          <ZestyText
            text="Password Changed"
            preset="semiBold"
            size="semiBold"
            style={{ textAlign: 'center' }}
          />
          <ZestyText
            text="Password changed successfully, you can login again with a new password"
            preset="medium"
            size="xs"
            style={{ color: app_color.medium_gray, textAlign: 'center', marginTop: 12 }}
          />
        </View>

        <View style={{ top: 24 }}>
          <ZestyButton ctaText="Continue" isLoading={false} onPress={() => console.log('Forgot')} />
        </View>
      </View>
    );
  };

  const passwordSuccessFullCheck = () => {
    userStore.passwordChangeStatusTrue()
  }

  return (
    <>
      <View style={{ top: inset.top + 10, marginHorizontal: 24, flex: 1 }}>
        <ZestyHeader headerText={'OTP'} />
        <ZestyText text="Reset Password" preset="semiBold" size="bold" style={{ marginTop: 8 }} />

        <View style={{}}>
          <ZestyText
            text="Your new password must be different from the previously used password"
            preset="medium"
            size="xs"
            style={{ marginTop: 8, color: app_color.medium_gray }}
          />

          <View style={{ marginTop: 32 }}>
            <View>
              <ZestyText
                text="New Password"
                preset="medium"
                style={{ color: app_color.charcoal_black, marginBottom: spacing.xs }}
              />
              <ZestyTextInput
                secureTextEntry
                placeholder="Enter Password"
                style={{}}
                RightAccessory={showPasswordEye}
              />

              <ZestyText
                text="Must be at least 8 character"
                preset="medium"
                size="xs"
                style={{ color: app_color.medium_gray, marginTop: 8 }}
              />
            </View>

            <View style={{ marginTop: 16 }}>
              <ZestyText
                text="Confirm Password"
                preset="medium"
                style={{ color: app_color.charcoal_black, marginBottom: spacing.xs }}
              />
              <ZestyTextInput
                placeholder="Enter Confirm Password"
                style={{}}
                RightAccessory={showConfirmPasswordEye}
                secureTextEntry
              />
              <ZestyText
                text="Both password must match"
                preset="medium"
                size="xs"
                style={{ color: app_color.medium_gray, marginTop: 8 }}
              />
            </View>
          </View>
        </View>
      </View>

      <KeyboardStickyView>
        <View style={{ bottom: 24 }}>
          <ZestyButton
            ctaText="Verify Account"
            isLoading={false}
            onPress={() => passwordSuccessFullCheck()}
          />
        </View>
      </KeyboardStickyView>

      {userStore.isPasswordChangeSuccessFull ? (
        <ZestyModal
          type={EBOTTOMSHEETTYPE.BOTTOM_SHEET_SCROLL_VIEW}
          sheetRef={sheetRef}
          onClose={() => userStore.passwordChangeStatusFalse()}
          children={renderComponent()}
          isScrollEnable={false}
          userSnapPoints={snapPoints}
        />
      ) : null}
    </>
  );
};

export default observer(ResetPassword);

const styles = StyleSheet.create({});
