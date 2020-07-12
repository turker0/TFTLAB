import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import OriginAvatar from "./originAvatar";

export default function OriginTier({ tier, origins }) {
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
          <FlatList
            data={origins}
            numColumns={4}
            renderItem={({ item }) => <OriginAvatar name={item.name} />}
            keyExtractor={(index) => index}
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
    backgroundColor: "#1F5470",
    paddingLeft: 5,
    paddingBottom: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    borderTopRightRadius: 4,
    borderBottomEndRadius: 4,
  },
});
