import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import items from "../assets/items/items";

export default function ItemAvatar({ name }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={items[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 5,
    elevation: 5,
  },
  logo: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 6,
    height: (Dimensions.get("window").width * 0.75 - 60) / 6,
  },
});
