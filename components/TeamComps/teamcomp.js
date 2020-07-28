import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import ChampionAvatar from "../shared/championAvatar";
import CompTrait from "./compTrait";

export default function TeamComp({ tier, name, champs, traits, navigation }) {
  return (
    <View
      style={[
        styles.container,
        tier === "S"
          ? { backgroundColor: "#e74c3c" }
          : tier === "A"
          ? { backgroundColor: "#f1c40f" }
          : tier === "B"
          ? { backgroundColor: "#3498db" }
          : tier === "C"
          ? { backgroundColor: "#2ecc71" }
          : { backgroundColor: "#ecf0f1" },
      ]}
    >
      <View style={styles.fdWrapper}>
        <View style={styles.tierWrapper}>
          <Text style={styles.tier}>{tier}</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text style={styles.title}>{name}</Text>
          <FlatList
            data={champs}
            numColumns={5}
            renderItem={({ item }) => (
              <ChampionAvatar
                name={item.name}
                gold={item.gold}
                origin={item.origin}
                type={item.type}
                skill={item.skill}
                details={item.details}
                navigation={navigation}
              />
            )}
            keyExtractor={(item, index) => String(index)}
          />

          <FlatList
            data={traits}
            horizontal={true}
            renderItem={({ item }) => (
              <CompTrait
                trait={item.name}
                count={item.count}
                desc={item.desc}
                combo={item.combo}
              />
            )}
            keyExtractor={(item, index) => String(index)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.75,
    borderRadius: 4,
    marginVertical: 10,
    elevation: 5,
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontFamily: "RobotoBold",
    letterSpacing: 1,
    color: "#F2F6F7",
    paddingHorizontal: 5,
    textTransform: "capitalize",
  },
  fdWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  tierWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tier: {
    fontSize: 32,
    color: "white",
    fontFamily: "RobotoBlack",
  },
  listWrapper: {
    flex: 8,
    backgroundColor: "#34495E",
    paddingLeft: 5,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    borderTopRightRadius: 4,
    borderBottomEndRadius: 4,
  },
});
