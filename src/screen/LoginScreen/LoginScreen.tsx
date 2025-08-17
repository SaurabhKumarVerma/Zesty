import { Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
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
import { Entypo } from '@expo/vector-icons';
import ZestyImage from '@base/ZestyImage/ZestyImage';
import ZestyButton from '@base/ZestyButton/ZestyButton';
import ZestyList from '@base/ZestyList/ZestyList';
import { forgotData } from './forgotJsonData';
import { useNavigation } from '@react-navigation/native';
import { ESCREEN_NAME } from '@navigation/NavigationTypes/screenName';

const LoginScreen = () => {
  const inset = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheetMethods | null>(null);
  const { userStore } = useRootStore();
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const navigation = useNavigation();

  const handleExpand = useCallback(() => {
    if (!userStore.isForgotModelVisible) {
      userStore.openForgotModel();
      sheetRef.current?.expand();
    }
  }, []);

  const snapPoints = useMemo(() => ['6%', '46%'], []);

  const renderRightIcon = () => {
    return (
      <View style={styles.leftAccessory}>
        <Entypo name="check" size={20} color={app_color.white} />
      </View>
    );
  };

  const openWhatsApp = (phoneNumber: string, message = '') => {
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');

    let url = `whatsapp://send?phone=${formattedPhoneNumber}`;

    if (message) {
      const encodedMessage = encodeURIComponent(message);
      url += `&text=${encodedMessage}`;
    }

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log('WhatsApp is not installed on this device or the URL is invalid.');
          // Linking.openURL(`https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  const renderLeftIcon = (iconName: string) => {
    return (
      <View style={styles.rightAccessory}>
        <ZestyImage source={iconName} style={{ width: 20, height: 20 }} />
      </View>
    );
  };

  const onPress = (item: any) => {
    setSelectedId(item.id === selectedId ? null : item.id);
  };

  const renderItem = ({ item }: any) => {
    const isSelected = item.id === selectedId;
    return (
      <Pressable onPress={() => onPress(item)} style={{ marginBottom: spacing.md, zIndex: 1 }}>
        <ZestyChip
          topText={item.text1}
          bottomText={item.text2}
          rightAccessory={renderLeftIcon(item.image_path)}
          leftAccessory={isSelected ? renderRightIcon() : undefined}
          borderColor={isSelected ? app_color.sunset_orange : app_color.medium_gray}
        />
      </Pressable>
    );
  };

  const continueToForgotScreen = () => {
    if (selectedId == 1) {
      openWhatsApp('7432454343', 'Hey got OTP');
    } else if (selectedId == 2) {
      navigation.navigate(ESCREEN_NAME.FORGOT_PASSWORD_SCREEN);
    }
    sheetRef.current?.forceClose();
  };

  const renderComponent = useCallback(() => {
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

        <ZestyList
          data={forgotData}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id.toString()}
          estimatedItemSize={2}
          extraData={selectedId}
        />

        <View style={{ marginTop: 8, bottom: '2%' }}>
          <ZestyButton
            ctaText="Continue"
            isLoading={false}
            onPress={() => continueToForgotScreen()}
          />
        </View>
      </View>
    );
  }, [selectedId]);

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
