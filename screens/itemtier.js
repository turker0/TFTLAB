import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";

import ChampTier from "../components/champtier";

const ChampTierList = {
  S: [
    {
      name: "Twisted Fate",
    },
    {
      name: "Zoe",
    },
    {
      name: "Ahri",
    },
    {
      name: "Annie",
    },
    {
      name: "Syndra",
    },
    {
      name: "Riven",
    },
    {
      name: "Viktor",
    },
    {
      name: "Janna",
    },
  ],
  A: [
    {
      name: "Twisted Fate",
    },
    {
      name: "Zoe",
    },
    {
      name: "Ahri",
    },
    {
      name: "Annie",
    },
  ],
  B: [
    {
      name: "Twisted Fate",
    },
    {
      name: "Zoe",
    },
    {
      name: "Ahri",
    },
    {
      name: "Annie",
    },
  ],
  C: [
    {
      name: "Twisted Fate",
    },
    {
      name: "Zoe",
    },
    {
      name: "Ahri",
    },
    {
      name: "Annie",
    },
  ],
  D: [
    {
      name: "Twisted Fate",
    },
    {
      name: "Zoe",
    },
    {
      name: "Ahri",
    },
    {
      name: "Annie",
    },
  ],
};

export default function ItemTier() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Text style={styles.title}>Item Tier List</Text>

        <ChampTier tier="S" data={ChampTierList.S} />
        <ChampTier tier="A" data={ChampTierList.A} />
        <ChampTier tier="B" data={ChampTierList.B} />
        <ChampTier tier="C" data={ChampTierList.C} />
        <ChampTier tier="D" data={ChampTierList.D} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    width: Dimensions.get("window").width * 0.9,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: Dimensions.get("window").width * 0.03,
    padding: Dimensions.get("window").width * 0.03,
    elevation: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "RobotoBold",
    color: "#02233C",
    marginTop: "-7%",
    marginBottom: "10%",
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
    paddingVertical: "1%",
    borderRadius: 4,
    elevation: 2,
  },
});
