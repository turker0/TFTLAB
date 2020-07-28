import React from "react";
import { StyleSheet, Image, View } from "react-native";
import avatars from "../../assets/avatars/avatars";
import Constants from "expo-constants";

const HaederBG = ({ name }) => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <Image
        style={styles.logo}
        resizeMode="cover"
        source={require("../../assets/headerBG.jpg")}
      />
    </View>
  );
};

export default HaederBG;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 50,
    alignSelf: "flex-end",
    opacity: 0.9,
  },
});
