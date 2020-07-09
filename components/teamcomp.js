import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import ChampionAvatar from "./championAvatar";
import CompTrait from "./compTrait";

export default function TeamComp({ tier, name, champs, traits }) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.name,
          tier === "S"
            ? { color: "#e74c3c" }
            : tier === "A"
            ? { color: "#f1c40f" }
            : { color: "#2ecc71" },
          tier === "S"
            ? { borderBottomColor: "#e74c3c" }
            : tier === "A"
            ? { borderBottomColor: "#f1c40f" }
            : { borderBottomColor: "#2ecc71" },
        ]}
      >
        {name}
      </Text>
      <View style={styles.compWrapper}>
        <FlatList
          data={champs}
          numColumns={5}
          renderItem={({ item }) => (
            <ChampionAvatar name={item.name} gold={item.gold} />
          )}
          keyExtractor={(index) => index}
        />

        <FlatList
          data={traits}
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
    backgroundColor: "#34495e",
  },
  name: {
    width: 200,
    fontSize: 16,
    fontFamily: "RobotoBlack",
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: -0.1, height: 0 },
    borderBottomWidth: 0.3,
    textShadowRadius: 1,
    textAlign: "center",
    marginTop: "-8%",
    marginLeft: (Dimensions.get("window").width * 0.75 - 200) / 2,
    borderTopLeftRadius: 55,
    borderBottomRightRadius: 55,
    backgroundColor: "#34495e",
  },
  compWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
