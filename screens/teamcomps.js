import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import TeamComp from "../components/teamcomp";

export default function TeamComps() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Text style={styles.title}>TFT Team Comps Tier List</Text>
        <View>
          <TeamComp tier="S" name="Sorcerers" />
          <TeamComp tier="S" name="Sorcerers" />
          <TeamComp tier="S" name="Sorcerers" />
        </View>
        <View>
          <TeamComp tier="A" name="Sorcerers" />
          <TeamComp tier="A" name="Sorcerers" />
        </View>
        <View>
          <TeamComp tier="B" name="Sorcerers" />
          <TeamComp tier="B" name="Sorcerers" />
          <TeamComp tier="B" name="Sorcerers" />
          <TeamComp tier="B" name="Sorcerers" />
        </View>
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
