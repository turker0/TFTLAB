import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default function Loadin() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#88a0a7" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
