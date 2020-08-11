import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import HomeBottomRoute from "./routes/Home/homebottomroute";
import { global } from "./styles/global";
import Updater from "./screens/Updater/updater";
import checkIsUpToDate from "./helpers/checkIsUpToDate";

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: global.theme.backgroundColor,
  },
};

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
    return !checkIsUpToDate() ? (
      <Updater />
    ) : (
      <NavigationContainer theme={MyTheme}>
        <HomeBottomRoute />
      </NavigationContainer>
    );
  }
}
