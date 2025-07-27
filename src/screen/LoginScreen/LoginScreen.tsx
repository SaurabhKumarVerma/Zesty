import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../../component/Login/Login";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { spacing } from "../../themes/spacing";

const LoginScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <ScrollView style={[styles.container, { top: inset.top }]}>
      <Login />
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    paddingTop: spacing.lg,
  },
});
