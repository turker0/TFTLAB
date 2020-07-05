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

export default function ChampsTier() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Text style={styles.title}>Champion Tier List</Text>

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
  },
  title: {
    width: 200,
    textAlign: "center",
    fontSize: 18,
    paddingTop: 5,
    marginBottom: 20,
  },
});
