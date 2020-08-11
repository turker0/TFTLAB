import React, { useEffect } from "react";
import { Text, Easing, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { pageTheme } from "../../styles/page";

export default function Loader({ setIsDone }) {
  const width = new Animated.Value(0);
  const animateLoading = () => {
    Animated.timing(width, {
      toValue: Dimensions.get("window").width * 0.7,
      duration: 2222,
      delay: 150,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => setIsDone(true));
  };

  useEffect(() => {
    animateLoading();
  }, []);

  return (
    <Animated.View
      style={{
        width: width,
        height: 5,
        backgroundColor: pageTheme.pointer.color,
        borderRadius: 40,
      }}
    ></Animated.View>
  );
}
