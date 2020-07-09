import React from "react";
import { StyleSheet, Image, View, Dimensions, Text } from "react-native";
import classes from "../assets/classes/classes";

export default function ClassAvatar({ name }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={classes[name]} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 5,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    width: (Dimensions.get("window").width * 0.75 - 60) / 5,
  },
  logo: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 7,
    height: (Dimensions.get("window").width * 0.75 - 60) / 7,
  },
  title: {
    fontSize: 8,
    color: "#fff",
    fontFamily: "RobotoRegular",
    textAlign: "center",
  },
});
