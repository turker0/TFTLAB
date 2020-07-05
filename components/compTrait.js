import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function CompTrait({ trait, count }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/traits/sorcerer.png")}
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
    backgroundColor: "black",
    borderRadius: 2,
    padding: 5,
  },
  trait: {
    fontSize: 10,
    color: "#fff",
  },
  logo: {
    width: 12,
    height: 12,
  },
});
