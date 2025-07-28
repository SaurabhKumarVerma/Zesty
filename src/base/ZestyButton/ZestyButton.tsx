import { Pressable, StyleSheet, Text } from 'react-native';
import React, { JSXElementConstructor, ReactNode, ReactSVGElement, useEffect } from 'react';
import Animated, {
  FadeInDown,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { SCREEN_WIDTH } from '@constant/screen-dimension';
import {
  BORDER_BUTTON_VALUE_LOADING,
  DURATION,
  LOTTIE_BUTTON_VALUE,
  LOTTIE_BUTTON_VALUE_LOADING,
} from '@constant/constant';
import { app_color } from '@themes/color';
import { debounce } from '@utils/debounce';
import { ZestyText } from '@base/ZestyText/ZestyText';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

interface IZestyButton {
  isLoading: boolean;
  ctaText: string;
  icon?: React.ElementType | ReactNode | ReactSVGElement | JSXElementConstructor<any>;
  onPress: () => void;
  width?: number;
}

const ZestyButton = (props: IZestyButton) => {
  const initialWidth = props.width ?? SCREEN_WIDTH * 0.9;
  const scale = useSharedValue<number>(initialWidth);
  const scaleBorder = useSharedValue<number>(50);
  const scaleLottieHeight = useSharedValue<number>(0);
  const colorProgress = useSharedValue(0);

  useEffect(() => {
    if (props.isLoading) {
      scale.value = withTiming(initialWidth * 0.2, { duration: DURATION });
      scaleBorder.value = withTiming(BORDER_BUTTON_VALUE_LOADING, {
        duration: DURATION,
      });
      scaleLottieHeight.value = withTiming(LOTTIE_BUTTON_VALUE, {
        duration: DURATION,
      });
      colorProgress.value = withTiming(1, {
        duration: DURATION,
      });
    } else {
      scale.value = withTiming(initialWidth, { duration: DURATION });
      scaleBorder.value = withTiming(LOTTIE_BUTTON_VALUE_LOADING, {
        duration: DURATION,
      });
      scaleLottieHeight.value = withTiming(LOTTIE_BUTTON_VALUE_LOADING, {
        duration: DURATION,
      });
      colorProgress.value = withTiming(0, {
        duration: DURATION,
      });
    }
  }, [props.isLoading]);

  const animatedStyleBackground = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorProgress.value,
      [0, 1],
      [app_color.sunset_orange, app_color.soft_gray],
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: scale.value,
    };
  });

  const animatedBorder = useAnimatedStyle(() => {
    return {
      borderRadius: scaleBorder.value,
    };
  });

  const animatedLottieHeight = useAnimatedStyle(() => {
    return {
      height: scaleLottieHeight.value,
      width: scaleLottieHeight.value,
    };
  });

  return (
    <>
      <AnimatedPressable
        disabled={props.isLoading ? true : false}
        style={[styles.container, animatedStyle, animatedBorder, animatedStyleBackground]}
        onPress={debounce(props.onPress, 500)}
      >
        {!props.isLoading ? (
          <Animated.View
            style={{ alignItems: 'center', flexDirection: 'row' }}
            entering={FadeInDown}
          >
            {props.icon ? <>{props.icon}</> : null}
            <ZestyText preset="semiBold" style={styles.ctaStyle}>
              {props.ctaText}
            </ZestyText>
          </Animated.View>
        ) : null}
        {props.isLoading ? (
          <AnimatedLottieView
            entering={FadeInDown}
            autoPlay
            source={require('../../../assets/lottie/loading.json')}
            style={[styles.loadingStyle, animatedLottieHeight]}
          />
        ) : null}
      </AnimatedPressable>
    </>
  );
};

export default ZestyButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    overflow: 'hidden',
    borderRadius: 50,
    maxWidth: '100%',
  },
  loadingStyle: {
    alignSelf: 'center',
    overflow: 'hidden',
    // paddingLeft: 30,
  },
  ctaStyle: {
    color: app_color.white,
  },
});
