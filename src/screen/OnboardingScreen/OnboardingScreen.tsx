import {
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  useAnimatedValue,
} from "react-native";
import React, { useRef, useState } from "react";
import onboardingData from "./onboarding";
import { IOnboarding } from "../../types/IOnboarding";
import { LinearGradient } from "expo-linear-gradient";
import { app_color } from "../../themes/color";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constant/screen-dimension";
import Pagination from "../../base/Pagination/Pagination";
import NextButton from "../../base/Pagination/NextButton";
import ZestyImage from "../../base/ZestyImage/ZestyImage";
import { app_images } from "../../../assets";
import ZestyShimmer from "../../base/ZestyShimmer/ZestyShimmer";
import { BlurView } from "@danielsaraldi/react-native-blur-view";
import { ZestyText } from "../../base/ZestyText/ZestyText";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const CARD_WIDTH = SCREEN_WIDTH - 80;
const OnboardingScreen = () => {
  const scrollX = useAnimatedValue(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slideRef = useRef<any>(0);

  const renderItem = ({ item }: { item: IOnboarding }) => {
    return (
      <View
        style={{
          paddingVertical: 50,
          width: CARD_WIDTH,
          flex: 1,
          paddingHorizontal: 30,
        }}
      >
        <ZestyText
        preset="bold"
          style={{
            textAlign: "center",
            // lineHeight: 4.42,
            fontSize: 30,
            paddingVertical: 30,
            color: app_color.white,
          }}
        >
          {item.heading}
        </ZestyText>
        <ZestyText
        preset="medium"
          style={{
            textAlign: "center",
            marginTop: 14,
            color: app_color.white,
          }}
        >
          {item.description}
        </ZestyText>
      </View>
    );
  };

  const scrollTo = () => {
    if (currentIndex < onboardingData.length - 1) {
      slideRef?.current?.scrollToIndex({ index: currentIndex + 1 });
    }
    // else if(currentIndex === onboardingData.length) {
    //   // slideRef?.current?.scrollToIndex({index: 0})
    // }
  };

  const onViewableItemsChanged = useRef((visibleItem: any) => {
    setCurrentIndex(visibleItem?.changed[0]?.index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <>
      <ZestyImage
        source={app_images.onboardingImageBackground}
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      />


      <LinearGradient
        colors={app_color.app_gradient_color as any}
        style={styles.container}
        end={{ x: 1, y: 1 }}
        start={{ x: 0.4, y: -2 }}
      >
        <FlatList<IOnboarding>
          horizontal
          pagingEnabled
          data={onboardingData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />

        <View style={{ alignItems: "center", marginVertical: 30 }}>
          <Pagination
            data={onboardingData as IOnboarding[]}
            scrollX={scrollX}
          />
        </View>
        {/* <View style={{alignItems: 'center', marginVertical: 30}}>
        <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / onboardingData.length)} />
      </View> */}
        {/* <BlurView
          experimentalBlurMethod="dimezisBlurView"
          intensity={30}
          tint="dark"
          style={{
            ...StyleSheet.absoluteFillObject,
            overflow: "hidden",
            zIndex: -1,
          }}
        /> */}
        <View style={styles.container2}>
          <BlurView style={styles.blurView} type="thin-material-dark" blurStyle={styles.blurView} />
        </View>
      </LinearGradient>
    </>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    flex: 1,
    position: "absolute",
    // left: 20,
    // right: 20,
    bottom: 50,
    borderRadius: 60,
    alignSelf: "center",
  },
  container2: {
    position: "absolute",

    width: "100%",
    aspectRatio: 1,
    zIndex: -1,
  },

  blurView: {
    width: "100%",
    flex: 1,
    backgroundColor: 'transparent'
  },
});
