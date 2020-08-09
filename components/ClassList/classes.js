import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Classes from "../../assets/classes/classes";
import getRelatedElement from "../../helpers/getRelatedElement";

export default function ClassTier({
  tier,
  list,
  classes,
  champions,
  navigation,
}) {
  return (
    <View style={{ marginVertical: 25, padding: 10 }}>
      <Text style={styles.tierTitle}>{tier} tier</Text>
      <View style={[styles.items, { width: list.length * 55 + 20 }]}>
        {list.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              let clas = getRelatedElement(item, classes);
              navigation.navigate("TraitPage", {
                name: clas[0].name,
                desc: clas[0].desc,
                count: clas[0].count,
                detail: clas[0].detail,
                units: clas[0].units,
                champions: champions,
                type: "0", // 0 = CLASS || 1 = ORIGIN
              });
            }}
          >
            <Image style={styles.avatar} source={Classes[item]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tierTitle: {
    fontSize: 32,
    fontFamily: "RobotoBold",
    color: "#ffffffe6",
  },
  items: {
    marginVertical: 5,
    marginRight: 20,
    borderRadius: 2,
    padding: 10,
    backgroundColor: "#1B475F",
    flexDirection: "row",
    maxWidth: 350,
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  avatar: {
    width: 46,
    height: 46,
    margin: 4.5,
  },
});
