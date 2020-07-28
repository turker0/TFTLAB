import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import avatars from "../../assets/avatars/avatars";
import ChampDetails from "../TeamComps/champdetails";

export default function ChampionAvatar({
  name,
  gold,
  origin,
  type,
  skill,
  details,
  navigation,
}) {
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
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("ChampPage", {
            name: name,
            gold: gold,
            origin: origin,
            type: type,
            skill: skill,
            details: details,
          })
        }
      >
        <Image style={styles.logo} source={avatars[name]} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginTop: 5,
    elevation: 5,
    width: (Dimensions.get("window").width * 0.75 - 60) / 5.5,
    height: (Dimensions.get("window").width * 0.75 - 60) / 5.5,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 6,
    height: (Dimensions.get("window").width * 0.75 - 60) / 6,
  },
});
