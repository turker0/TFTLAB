import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import avatars from "../assets/avatars/avatars";

export default function ChampionAvatar({ name, gold }) {
  console.log(name);
  return (
    <View
      style={[
        styles.container,
        gold === 1
          ? { backgroundColor: "#213042" }
          : gold === 2
          ? { backgroundColor: "#156831" }
          : gold === 3
          ? { backgroundColor: "#12407c" }
          : gold === 4
          ? { backgroundColor: "#893088" }
          : { backgroundColor: "#b89d27" },
      ]}
    >
      <Image style={styles.logo} source={avatars[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginTop: 5,
    elevation: 5,
    width: (Dimensions.get("window").width * 0.75 - 60) / 4.8,
    height: (Dimensions.get("window").width * 0.75 - 60) / 4.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  logo: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 5,
    height: (Dimensions.get("window").width * 0.75 - 60) / 5,
  },
});
