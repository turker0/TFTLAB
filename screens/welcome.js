import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import TeamComps from "./teamcomps";
import ChampTier from "./champtier";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.titleWrapper}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.title}>TFT LAB</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <TeamComps />
        <ChampTier />
        <View style={styles.page}>
          <Text>Items Tier List</Text>
        </View>
        <View style={styles.page}>
          <Text>Classes Tier List</Text>
        </View>
        <View style={styles.page}>
          <Text>Origins Tier List</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  page: {
    width: Dimensions.get("window").width * 0.9,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    margin: Dimensions.get("window").width * 0.03,
  },
  cardWrapper: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
