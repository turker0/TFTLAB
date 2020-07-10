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
import ItemTier from "./itemtier";
import ClassTier from "./classtier";
import OriginTier from "./origintier";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.titleWrapper}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.title}>TFTLAB</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <TeamComps />
        <ChampTier />
        <ItemTier />
        <ClassTier />
        <OriginTier />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#39ADFA",
  },
  titleWrapper: {
    paddingVertical: 20,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: "RobotoBlack",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -0.75, height: 0 },
    textShadowRadius: 5,
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
