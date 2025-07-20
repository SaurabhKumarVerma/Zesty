import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ZestyList from "../../base/ZestyList/ZestyList";
import onboardingData from "./onboarding";
import { IOnboarding } from "../../types/IOnboarding";
import { LinearGradient } from "expo-linear-gradient";
import { app_color } from "../../themes/color";
import { SCREEN_WIDTH } from "../../constant/screen-dimension";

const colr = {
    0: 'red',
    1: 'green',
    2: 'yellow',
    3: 'blue'
}
const CARD_WIDTH = SCREEN_WIDTH - 80
const OnboardingScreen = () => {
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
  return (
    <LinearGradient
      colors={app_color.app_gradient_color as any}
      style={styles.container}
      end={{x: 1, y:-1}}
      start={{x: -1, y:-1}}
    >
      <ZestyList
        horizontal
        pagingEnabled
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={100}
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}
      />
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
    bottom: 200,
    borderRadius: 16,
    alignSelf: 'center'
  },
});
