import React from "react";
import {
  Dimensions,
  Animated,
  Text,
  View,
  Easing,
  StatusBar,
} from "react-native";
import { pageTheme } from "../../styles/page";
import { global } from "../../styles/global";

const Loader = () => {
  const rotate = new Animated.Value(0);
  const rotation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["-35deg", "-10deg"],
  });

  const animateLogo = () => {
    rotate.setValue(0);
    Animated.timing(rotate, {
      toValue: 1,
      duration: 333,
      delay: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(rotate, {
        toValue: 0,
        duration: 333,
        delay: 0,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => animateLogo());
    });
  };
  animateLogo();
  return (
    <View style={[pageTheme.page, global.theme, pageTheme.fdCenter]}>
      <StatusBar
        backgroundColor={global.statusBar.backgroundColor}
        barStyle="dark-content"
      />
      <View style={[pageTheme.fdCenter]}>
        <Text style={pageTheme.logoTitle}>TFT</Text>
        <Animated.Image
          style={[
            pageTheme.avatarBig,
            {
              transform: [{ rotate: rotation }],
            },
          ]}
          source={require("../../assets/logo.png")}
        />
      </View>
    </View>
  );
};

export default Loader;
