import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medica</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    marginBottom: 30,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  }
});
