import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import ChampionAvatar from "./championAvatar";
import CompTrait from "./compTrait";
const Comp = {
  name: "Sorcerers",
  champs: [
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
  traits: [
    {
      name: "Sorcerer",
      count: 6,
    },
    {
      name: "Paragon",
      count: 1,
    },
    {
      name: "Star Guardian",
      count: 4,
    },
    {
      name: "Chrono",
      count: 2,
    },
    {
      name: "Paragon",
      count: 1,
    },
    {
      name: "Star Guardian",
      count: 4,
    },
    {
      name: "Chrono",
      count: 2,
    },
  ],
};

export default function TeamComp({ tier, name, champions }) {
  return (
    <View
      style={[
        styles.container,
        tier === "S"
          ? { backgroundColor: "#e74c3c" }
          : tier === "A"
          ? { backgroundColor: "#f1c40f" }
          : { backgroundColor: "#2ecc71" },
      ]}
    >
      <Text
        style={[
          styles.name,
          tier === "S"
            ? { backgroundColor: "#e74c3c" }
            : tier === "A"
            ? { backgroundColor: "#f1c40f" }
            : { backgroundColor: "#2ecc71" },
        ]}
      >
        {Comp.name}
      </Text>
      <View>
        <FlatList
          data={Comp.champs}
          numColumns={5}
          renderItem={({ item }) => <ChampionAvatar name={item.name} />}
          keyExtractor={(index) => index}
        />

        <FlatList
          data={Comp.traits}
          horizontal={true}
          renderItem={({ item }) => (
            <CompTrait trait={item.name} count={item.count} />
          )}
          keyExtractor={(index) => index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.75,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginVertical: 10,
    elevation: 5,
  },
  tier: {
    fontSize: 18,
    borderRadius: 4,
    color: "#fff",
    textAlign: "center",
  },
  name: {
    width: 200,
    fontSize: 18,
    textAlign: "center",
    marginTop: "-8%",
    marginLeft: (Dimensions.get("window").width * 0.75 - 200) / 2,
    borderTopLeftRadius: 55,
    borderBottomRightRadius: 55,
    color: "#fff",
  },
});
