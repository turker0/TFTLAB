import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import getRelatedElement from "../../helpers/getRelatedElement";
import avatars from "../../assets/avatars/avatars";

export default function ChampTier({ tier, list, navigation, champions }) {
  return (
    <View style={{ marginVertical: 25, padding: 10 }}>
      <Text style={styles.tierTitle}>{tier} tier</Text>
      <View style={[styles.champ, { width: list.length * 55 + 20 }]}>
        {list.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              let champ = getRelatedElement(item, champions);
              navigation.navigate("ChampPage", {
                name: champ[0].name,
                item: champ[0].items,
                origin: champ[0].origin,
                type: champ[0].class,
                skill: champ[0].skill,
                stats: champ[0].stats,
              });
            }}
            key={index}
          >
            <View
              style={[
                styles.avatarBorder,
                { backgroundColor: getChampBorderColor(item) },
              ]}
            >
              <Image style={styles.avatar} source={avatars[item]} />
            </View>
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
  champ: {
    marginVertical: 5,
    marginRight: 20,
    borderRadius: 2,
    padding: 10,
    backgroundColor: "#1B475F",
    flexDirection: "row",
    maxWidth: Dimensions.get("window").width - 20,
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  avatarBorder: {
    width: 50,
    height: 50,
    margin: 2.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 4,
  },
});
