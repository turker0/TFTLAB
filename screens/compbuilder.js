import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ChampionAvatar from "../components/championAvatar";
import { ScrollView } from "react-native-gesture-handler";

const ChampTierList = [
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
];

export default function CompBuilder() {
  return (
    <View style={styles.container}>
      <Text>Team Builder</Text>
      <View style={styles.boardWrapper}>
        <Text>Team</Text>
      </View>
      <View style={styles.boardWrapper}>
        <Text>Team</Text>
      </View>
      <View style={styles.champWrapper}>
        <FlatList
          data={ChampTierList}
          showsVerticalScrollIndicator={false}
          numColumns={6}
          renderItem={({ item }) => <ChampionAvatar name={item.name} />}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 25,
    backgroundColor: "#102531",
  },
  boardWrapper: {
    width: "90%",
    height: 60,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  champWrapper: {
    width: "90%",
    height: "50%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
