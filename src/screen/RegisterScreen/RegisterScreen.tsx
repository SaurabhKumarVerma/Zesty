import { StyleSheet } from 'react-native';
import React from 'react';
import Register from '../../component/Register/Register';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { observer } from 'mobx-react'

const RegisterScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      bottomOffset={62}
      style={[styles.container, { top: inset.top }]}
    >
      <Register />
    </KeyboardAwareScrollView>
  );
};

export default observer(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
});
