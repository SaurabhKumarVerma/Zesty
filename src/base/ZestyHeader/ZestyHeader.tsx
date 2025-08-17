import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { ZestyText } from '@base/ZestyText/ZestyText';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { app_color } from '@themes/color';

type ColorKey = Exclude<keyof typeof app_color, 'app_gradient_color'>;
type SolidColorValue = (typeof app_color)[ColorKey];

interface IZestyHeader {
  headerText: string;
  rightAccessory?: ReactNode;
  goBackContainerColor?: SolidColorValue;
  goBackBorderColor?: SolidColorValue;
}

const ZestyHeader = (props: IZestyHeader) => {
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={goBack}
        style={[
          styles.backButton,
          {
            backgroundColor: props.goBackContainerColor ?? app_color.white,
            borderColor: props.goBackBorderColor ?? app_color.medium_gray,
          },
        ]}
      >
        <Feather name="arrow-left" size={24} color="black" style={{ padding: 8 }} />
      </Pressable>

      <View>
        <ZestyText
          text={props.headerText}
          preset="semiBold"
          size="semiBold"
          style={{ alignSelf: 'center'}}
        />
      </View>

      {props.rightAccessory ? <>{props.rightAccessory}</> : <View />}
    </View>
  );
};

export default ZestyHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    alignContent: 'center'
  },
  backButton: {
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
