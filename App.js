import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeRoute from "./routes/homeroute";

export default function App() {
  return (
    <NavigationContainer>
      <HomeRoute />
    </NavigationContainer>
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
