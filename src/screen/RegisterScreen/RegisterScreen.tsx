import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Register from "../../component/Register/Register";
import { spacing } from "../../themes/spacing";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RegisterScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <ScrollView style={[styles.container, { top: inset.top }]}>
      <Register />
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    paddingTop: spacing.lg,
  },
});
