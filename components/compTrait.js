import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import classes from "../assets/classes/classes";
import origins from "../assets/origins/origins";

import checkIsClass from "../helpers/checkIsClass";
import getBorderColor from "../helpers/getBorderColor";

export default function CompTrait({ trait, count }) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: getBorderColor(trait, count) },
      ]}
    >
      <Image
        style={styles.logo}
        source={checkIsClass(trait) ? classes[trait] : origins[trait]}
      />
      <Text style={styles.trait}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 4,
    padding: 5,
  },
  trait: {
    fontSize: 10,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -0.5, height: 0 },
    textShadowRadius: 5,
    fontFamily: "RobotoBold",
    marginLeft: "10%",
  },
  logo: {
    width: 10,
    height: 10,
  },
});
