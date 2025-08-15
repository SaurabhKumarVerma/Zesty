import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import Login from '../../component/Login/Login';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { spacing } from '../../themes/spacing';
import ZestyModal from '@base/ZestyModal/ZestyModal';
import { EBOTTOMSHEETTYPE } from '@app_types/type';
import { ZestyText } from '@base/ZestyText/ZestyText';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { observer } from 'mobx-react';
import { useRootStore } from '@contexts/RootStoreContext';
import ZestyChip from '@base/ZestyChip/ZestyChip';
import { app_color } from '@themes/color';
import { app_images } from '../../../assets';
import { Entypo } from '@expo/vector-icons';
import ZestyImage from '@base/ZestyImage/ZestyImage';
import ZestyButton from '@base/ZestyButton/ZestyButton';

const LoginScreen = () => {
  const inset = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheetMethods | null>(null);
  const { userStore } = useRootStore();

  const handleExpand = useCallback(() => {
    if (!userStore.isForgotModelVisible) {
      userStore.openForgotModel();
      sheetRef.current?.expand();
    }
  }, []);


  const snapPoints = useMemo(() => ['6%', '42%'], []);

  const renderRightIcon = () => {
    return (
      <View style={styles.leftAccessory}>
        <Entypo name="check" size={20} color={app_color.white} />
      </View>
    );
  };

  const renderLeftIcon = () => {
    return (
      <View style={styles.rightAccessory}>
        <ZestyImage source={app_images.whatsapp} style={{ width: 20, height: 20 }} />
      </View>
    );
  };

  const renderMailIcon = () => {
    return (
      <View style={styles.rightAccessory}>
        <ZestyImage source={app_images.mail} style={{ width: 20, height: 20 }} />
      </View>
    );
  };

  const renderComponent = () => {
    return (
      <View>
        <ZestyText
          text="Forgot password?"
          preset="semiBold"
          size="semiBold"
          style={{ marginTop: 10 }}
        />

        <ZestyText
          text="Select which contact details should we use to reset your password"
          preset="medium"
          size="xs"
          style={{ marginVertical: 12, color: app_color.medium_neutral_gray }}
        />
        <ZestyChip
          topText="Send via WhatsApp"
          bottomText="+12 8347 2838 28"
          rightAccessory={renderLeftIcon()}
          leftAccessory={renderRightIcon()}
        />

        <View style={{ marginTop: spacing.md }}>
          <ZestyChip
            topText="Send via Email"
            bottomText="Albertstevano@gmail.com"
            rightAccessory={renderMailIcon()}
          />
        </View>

        <View style={{marginVertical:24}}>
          <ZestyButton ctaText="Continue" isLoading={false} onPress={() => console.log('Clicked')} />
        </View>
      </View>
    );
  };
  return (
    <>
      <ScrollView style={[styles.container, { top: inset.top }]}>
        <Login handleExpand={handleExpand} />
      </ScrollView>

      {userStore.isForgotModelVisible ? (
        <ZestyModal
          type={EBOTTOMSHEETTYPE.BOTTOM_SHEET_SCROLL_VIEW}
          sheetRef={sheetRef}
          onClose={() => userStore.closeForgotModel()}
          children={renderComponent()}
          isScrollEnable={false}
          userSnapPoints={snapPoints}
        />
      ) : null}
    </>
  );
};

export default observer(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    paddingTop: spacing.lg,
  },
  rightAccessory: {
    padding: 10,
    marginVertical: 16,
    marginLeft: 16,
    backgroundColor: app_color.cool_blue,
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftAccessory: {
    padding: 10,
    marginVertical: 16,
    marginRight: 16,
    backgroundColor: app_color.sunset_orange,
    width: 40,
    height: 40,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
