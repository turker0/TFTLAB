import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import Welcome from "./screens/welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent: "center",
  },
});
