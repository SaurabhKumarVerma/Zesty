import { Pressable, StyleSheet, View, Animated, useAnimatedValue } from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { Circle, G } from "react-native-svg";
import AntDesign from '@expo/vector-icons/AntDesign';
import { app_color } from "../../themes/color";

interface INextButton {
  percentage: number;
  scrollTo: () => void
}

const NextButton = (props: INextButton) => {
  const size = 80;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useAnimatedValue(0)
  const progressref = useRef<Svg>(null)

  const animation = (toValue: any) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    animation(props.percentage)
  },[props.percentage])

  useEffect(() => {
    progressAnimation.addListener((value) => {
      
      const strokeDashoffset = circumference - (circumference * value.value ) / 100
      if(progressref?.current){
        progressref?.current?.setNativeProps({
          strokeDashoffset
        })
      }
    })

    return () => {
      progressAnimation.removeAllListeners()
    }
  },[])
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={"#F5F5F5"}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
          ref={progressref}
            stroke={app_color.brick_red}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            // strokeDashoffset={circumference - (circumference * props.percentage) / 100}
          />
        </G>
      </Svg>
      <Pressable onPress={() => props.scrollTo()} style={styles.nextButton}>
        <AntDesign name="arrowright" size={30} color={app_color.white} />
      </Pressable>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    position: 'absolute',
    alignSelf: 'center'
  }
});
