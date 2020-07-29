import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import avatars from "../../assets/avatars/avatars";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const TeamComp = ({ comp, navigation }) => {
  return (
    <View>
      <Text style={styles.tierTitle}>{comp.tier} tier</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {comp.comps.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate("CompPage", {
                name: item.name,
              });
            }}
          >
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
                      navigation.navigate("ChampPage", {
                        name: "Ahri",
                        gold: 1,
                        origin: "origin",
                        type: "type",
                        skill: "skill",
                        details: "details",
                      });
                    }}
                  >
                    <View
                      style={[
                        styles.avatarBorder,
                        { backgroundColor: getChampBorderColor(item) },
                      ]}
                      key={index}
                    >
                      <Image style={styles.avatar} source={avatars[item]} />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <Text style={styles.compTitle}>{item.name}</Text>
          </TouchableOpacity>
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
    marginTop: 30,
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
    fontSize: 20,
    marginLeft: 2.5,
    fontFamily: "RobotoMedium",
    color: "#ffffffe6",
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
