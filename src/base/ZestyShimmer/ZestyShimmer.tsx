import { StyleSheet, View, ViewStyle } from "react-native";
import { Shimmer, ShimmerProvider } from "react-native-fast-shimmer";
import { Easing, EasingFunction } from "react-native-reanimated";
import {
  DEFAULT_GRADIENT_END,
  DEFAULT_GRADIENT_START,
  DEFAULT_LINEAR_GRADIENTS,
} from "../../constant/constant";

interface IZestyShimmer {
  shimmerContainerStyle?: ViewStyle | ViewStyle[];
  linearGradients?: string[];
  gradientStart?: { x: number; y: number };
  gradientEnd?: { x: number; y: number };
  easing?: EasingFunction;
  speed?: number;
  shimmerStyle?: ViewStyle;
}

const ZestyShimmer = (props: IZestyShimmer) => {
  return (
    <ShimmerProvider duration={2000}>
      <View
        style={
          props.shimmerContainerStyle
            ? props.shimmerContainerStyle
            : styles.container
        }
      >
        <Shimmer
          style={props.shimmerStyle ? props.shimmerStyle : styles.shimmerStyle}
          easing={props.easing ? props.easing : Easing.linear}
          speed={props.speed ? props.speed : 1}
          gradientEnd={
            props.gradientEnd ? props.gradientEnd : DEFAULT_GRADIENT_END
          }
          gradientStart={
            props.gradientStart ? props.gradientStart : DEFAULT_GRADIENT_START
          }
          linearGradients={
            props.linearGradients
              ? props.linearGradients
              : DEFAULT_LINEAR_GRADIENTS
          }
        />
      </View>
    </ShimmerProvider>
  );
};

export default ZestyShimmer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
  },
  shimmerStyle: {
    backgroundColor: "gray",
    borderRadius: 10,
    width: "100%",
    height: 50,
    overflow: "hidden",
  },
});
