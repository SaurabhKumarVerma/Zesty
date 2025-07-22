import { Animated, FlatList, StyleSheet, Text, View, useAnimatedValue } from "react-native";
import React, { useRef, useState } from "react";
import ZestyList from "../../base/ZestyList/ZestyList";
import onboardingData from "./onboarding";
import { IOnboarding } from "../../types/IOnboarding";
import { LinearGradient } from "expo-linear-gradient";
import { app_color } from "../../themes/color";
import { SCREEN_WIDTH } from "../../constant/screen-dimension";
import { ViewToken } from "@shopify/flash-list";
import Pagination from "../../base/Pagination/Pagination";
import NextButton from "../../base/Pagination/NextButton";

const CARD_WIDTH = SCREEN_WIDTH - 80
const OnboardingScreen = () => {
  const scrollX = useAnimatedValue(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const slideRef = useRef(0)

  const renderItem = ({ item }: { item: IOnboarding }) => {
    return (
      <View
        style={{
          paddingVertical: 50,
          width: CARD_WIDTH,
          flex: 1,
          paddingHorizontal: 30
        }}
      >
          <Text style={{textAlign: 'center', fontWeight: '700', lineHeight: 4.42, fontSize: 18, paddingTop: 30, color: app_color.white}}>{item.heading}</Text>
          <Text   style={{textAlign: 'center', marginTop: 14, fontWeight: '500',  fontSize: 20, color: app_color.white}}>
            {item.description}
          </Text>
      </View>
    );
  };

  const onViewableItemsChanged = useRef((visibleItem: any) => {
    console.log('visibleItem?.changed[0]?.index', visibleItem?.changed[0]?.index);
    
    setCurrentIndex(visibleItem?.changed[0]?.index)
  },).current

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current
  return (
    <LinearGradient
      colors={app_color.app_gradient_color as any}
      style={styles.container}
      end={{x: 1, y:-1}}
      start={{x: -1, y:-1}}
    >
      <ZestyList<IOnboarding>
        horizontal
        pagingEnabled
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={100}
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset:{x:scrollX}}}], {
          useNativeDriver: false,

        })}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
      />

      <View style={{alignItems: 'center', marginVertical: 40}}>
        <Pagination data={onboardingData  as IOnboarding[]} scrollX={scrollX}/>
      </View>
      <View style={{alignItems: 'center', marginVertical: 40}}>
        <NextButton />
      </View>
      
    </LinearGradient>
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
    bottom: 0,
    borderRadius: 60,
    alignSelf: 'center'
  },
});
