import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeTopRoute from "../routes/Home/hometoproute";

export default function Welcome({ navigation }) {
  return <HomeTopRoute navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    backgroundColor: "#102531",
  },
  titleWrapper: {
    paddingVertical: 20,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: "RobotoBlack",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -0.75, height: 0 },
    textShadowRadius: 5,
    letterSpacing: 3,
  },
});
