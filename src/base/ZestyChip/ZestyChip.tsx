import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { app_color } from '@themes/color';
import { ZestyText } from '@base/ZestyText/ZestyText';

type ColorKey = Exclude<keyof typeof app_color, 'app_gradient_color'>;
type SolidColorValue = (typeof app_color)[ColorKey];

interface IZestyChip {
  rightAccessory?: ReactNode;
  leftAccessory?: ReactNode;
  topText?: string
  bottomText?: string
  borderColor?: SolidColorValue
}

const ZestyChip = (props: IZestyChip) => {
  return (
    <View style={[styles.container, {borderColor:props.borderColor ?? app_color.medium_gray,}]}>
      

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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
