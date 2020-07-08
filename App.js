import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeRoute from "./routes/homeroute";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [loaded, error] = useFonts({
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <HomeRoute />
      </NavigationContainer>
    );
  }
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
