import { TextProps, ZestyText } from '@base/ZestyText/ZestyText';
import { app_color } from '@themes/color';
import { spacing } from '@themes/spacing';
import { typography } from '@themes/typography';
import React, { ComponentType, forwardRef, Ref, useImperativeHandle, useRef } from 'react';
import {
  Platform,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface TextFieldAccessoryProps {
  style: StyleProp<any>;
  status: TextFieldProps['status'];
  multiline?: boolean;
  editable?: boolean;
}

export interface TextFieldProps extends Omit<TextInputProps, 'ref'> {
  status?: 'error' | 'disabled';
  label?: TextProps['text'];
  LabelTextProps?: TextProps;
  helper?: TextProps['text'];
  HelperTextProps?: TextProps;
  placeholder?: TextProps['text'];
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  RightAccessory?: ComponentType<TextFieldAccessoryProps>;
  LeftAccessory?: ComponentType<TextFieldAccessoryProps>;
}
export const ZestyTextInput = forwardRef(function TextField(
  props: TextFieldProps,
  ref: Ref<TextInput>,
) {
  const {
    label,
    placeholder,
    helper,
    status,
    RightAccessory,
    LeftAccessory,
    HelperTextProps,
    LabelTextProps,
    style: $inputStyleOverride,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    ...TextInputProps
  } = props;
  const input = useRef<TextInput>();

  const disabled = TextInputProps.editable === false || status === 'disabled';

  const placeholderContent = placeholder;

  const $containerStyles = [$containerStyleOverride];

  const $labelStyles = [$labelStyle, LabelTextProps?.style];

  const $inputWrapperStyles = [
    $inputWrapperStyle,
    status === 'error' && {
      borderColor: Platform.OS == 'android' ? app_color.error_android : app_color.error_ios,
    },
    TextInputProps.multiline && { minHeight: 112 },
    LeftAccessory && { paddingStart: 0 },
    RightAccessory && { paddingEnd: 0 },
    $inputWrapperStyleOverride,
  ];

  const $inputStyles = [
    $inputStyle,
    disabled && { color: app_color.silver },
    TextInputProps.multiline && { height: 'auto' },
    $inputStyleOverride,
  ];

  const $helperStyles = [
    $helperStyle,
    status === 'error' && {
      color: Platform.OS == 'android' ? app_color.error_android : app_color.error_ios,
    },
    HelperTextProps?.style,
  ];

  function focusInput() {
    if (disabled) {
      return;
    }

    input.current?.focus();
  }

  useImperativeHandle(ref, () => input?.current);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={$containerStyles}
      onPress={focusInput}
      accessibilityState={{ disabled }}
    >
      {!!label && (
        <ZestyText preset="formLabel" text={label} {...LabelTextProps} style={$labelStyles} />
      )}

      <View style={$inputWrapperStyles}>
        {!!LeftAccessory && (
          <LeftAccessory
            style={$leftAccessoryStyle}
            status={status}
            editable={!disabled}
            multiline={TextInputProps.multiline}
          />
        )}

        <TextInput
          ref={input}
          underlineColorAndroid={app_color.transparent}
          textAlignVertical="top"
          placeholder={placeholderContent}
          placeholderTextColor={app_color.soft_gray}
          {...TextInputProps}
          editable={!disabled}
          style={$inputStyles}
        />

        {!!RightAccessory && (
          <RightAccessory
            style={$rightAccessoryStyle}
            status={status}
            editable={!disabled}
            multiline={TextInputProps.multiline}
          />
        )}
      </View>

      {!!helper && (
        <ZestyText preset="formHelper" text={helper} {...HelperTextProps} style={$helperStyles} />
      )}
    </TouchableOpacity>
  );
});

const $labelStyle: TextStyle = {
  marginBottom: spacing.xs,
};

const $inputWrapperStyle: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-start',
  borderWidth: 1,
  borderRadius: 11,
  backgroundColor: app_color.white,
  borderColor: app_color.soft_gray,
  overflow: 'hidden',
  // width: "100%"
};

const $inputStyle: TextStyle = {
  flex: 1,
  alignSelf: 'stretch',
  fontFamily: typography.regular,
  color: app_color.charcoal_black,
  fontSize: 16,
  height: 40,
  paddingVertical: 0,
  paddingHorizontal: 0,
  marginVertical: spacing.xs,
  marginHorizontal: spacing.sm,
};

const $helperStyle: TextStyle = {
  marginTop: spacing.xs,
};

const $rightAccessoryStyle: ViewStyle = {
  marginEnd: spacing.xs,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
};
const $leftAccessoryStyle: ViewStyle = {
  marginStart: spacing.xs,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
};
