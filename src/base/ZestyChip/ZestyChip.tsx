import { StyleSheet, Text, View } from 'react-native';
import React, { ReactElement, ReactNode } from 'react';
import ZestyImage from '@base/ZestyImage/ZestyImage';
import { app_images } from '../../../assets';
import { app_color } from '@themes/color';
import { ZestyText } from '@base/ZestyText/ZestyText';
import Entypo from '@expo/vector-icons/Entypo';

interface IZestyChip {
  rightAccessory?: ReactNode;
  leftAccessory?: ReactNode;
  topText?: string
  bottomText?: string
}

const ZestyChip = (props: IZestyChip) => {
  return (
    <View style={styles.container}>
      

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        {props.rightAccessory ? <>{props.rightAccessory}</> : null}
        <View style={{marginLeft: 16}}>
            <ZestyText
          text={props.topText}
          preset="normal"
          size="xxs"
          style={{ color: app_color.medium_gray }}
        />
        <ZestyText
          text={props.bottomText}
          preset="normal"
          size="xxs"
          style={{ color: app_color.charcoal_black }}
        />
        </View>
      </View>

      {props.leftAccessory ? <>{props.leftAccessory}</> : <View />}
    </View>
  );
};

export default ZestyChip;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#878787',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
