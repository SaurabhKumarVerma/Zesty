import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useCallback, useRef } from 'react';
import Login from '../../component/Login/Login';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { spacing } from '../../themes/spacing';
import ZestyModal from '@base/ZestyModal/ZestyModal';
import { EBOTTOMSHEETTYPE } from '@app_types/type';
import { ZestyText } from '@base/ZestyText/ZestyText';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { observer } from "mobx-react";
import { useRootStore } from '@contexts/RootStoreContext';
import ZestyChip from '@base/ZestyChip/ZestyChip';

const LoginScreen = () => {
  const inset = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheetMethods | null>(null);
  const {userStore} = useRootStore()

  const handleExpand = useCallback(() => {
    if(!userStore.isForgotModelVisible){
      userStore.openForgotModel()
      sheetRef.current?.expand();
    }
  }, []);


  const renderComponent = () => {
    return (
      <View>
        <ZestyText text="Hello" preset="bold" size="lg" />
      </View>
    );
  };
  return (
    <>
      <ScrollView style={[styles.container, { top: inset.top }]}>
        {/* <Login handleExpand={handleExpand} /> */}

        <ZestyChip />
      </ScrollView>

    {
      userStore.isForgotModelVisible ? (
        <ZestyModal
        type={EBOTTOMSHEETTYPE.BOTTOM_SHEET_SCROLL_VIEW}
        sheetRef={sheetRef}
        onClose={() => userStore.closeForgotModel()}
        children={renderComponent()}
        isScrollEnable={false}
      />
      ) : null
    }


      
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
});
