import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import avatars from "../../assets/avatars/avatars";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import getRelatedChampions from "../../helpers/getRelatedChampions";
import { Octicons } from "@expo/vector-icons";

const TeamComp = ({ comp, navigation, champions }) => {
  return (
    <View style={{ marginVertical: 25 }}>
      <Text style={styles.tierTitle}>{comp.tier} tier</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {comp.comps.map((item, index) => (
          <View key={index}>
            <View
              style={[
                styles.comp,
                item.champs.length > 8 ? { width: 300 } : { width: 250 },
              ]}
            >
              <View style={styles.avatarWrapper}>
                {item.champs.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      let champ = getRelatedChampions(champions, item);
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CompPage", {
                  name: item.name,
                  champions: item.champs,
                });
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 25,
                }}
              >
                <Text style={styles.compTitle}>{item.name}</Text>

                <Octicons
                  name="arrow-small-right"
                  size={24}
                  color="#ffffffe6"
                />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TeamComp;

const styles = StyleSheet.create({
  tierTitle: {
    fontSize: 32,
    fontFamily: "RobotoBold",
    color: "#ffffffe6",
  },
  comp: {
    marginVertical: 5,
    marginRight: 20,
    width: 300,
    borderRadius: 2,
    padding: 10,
    backgroundColor: "#1B475F",
  },
  compTitle: {
    fontSize: 16,
    marginLeft: 2.5,
    fontFamily: "RobotoRegular",
    color: "#ffffffe6",
    letterSpacing: 0.3,
  },
  avatarWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  avatarBorder: {
    width: 50,
    height: 50,
    margin: 2.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  avatar: {
    width: 46,
    height: 46,
  },
});
