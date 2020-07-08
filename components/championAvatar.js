import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

export default function ChampionAvatar({ name, count }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/TwistedFate.png")}
      />
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
    width: (Dimensions.get("window").width * 0.75 - 60) / 5,
    height: (Dimensions.get("window").width * 0.75 - 60) / 5,
  },
});
