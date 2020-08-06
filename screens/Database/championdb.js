import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import avatars from "../../assets/avatars/avatars";
import skills from "../../assets/skills/skills";
import classes from "../../assets/classes/classes";
import origins from "../../assets/origins/origins";
import { MaterialIcons } from "@expo/vector-icons";

export default function ChampionDB({ route }) {
  const { champions } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ paddingTop: 100 }}>
          <Text style={styles.title}>Champion Database</Text>
          {champions.map((item, index) => (
            <View key={index} style={styles.champWrapper}>
              <View style={{ width: 80, overflow: "hidden" }}>
                <Image style={styles.champAvatar} source={avatars[item.name]} />
                <Text style={styles.champName}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons
                    name="attach-money"
                    size={18}
                    color="#b89d27"
                  />
                  <Text style={styles.statDetail}>{item.stats.cost}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {item.class.map((item, index) => (
                    <Image
                      style={[styles.trait, { marginRight: 2.5 }]}
                      source={classes[item]}
                      key={index}
                    />
                  ))}
                  <Image style={styles.trait} source={origins[item.origin]} />
                </View>
              </View>
              <View
                style={{
                  marginLeft: 10,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <View style={styles.champSkillWrapper}>
                  <Image
                    style={styles.skillAvatar}
                    source={skills[item.name]}
                  />
                  <Text style={styles.skillName}>{item.skill.name}</Text>
                </View>
                {item.skill.desc.map((item2, index2) => (
                  <Text style={styles.skillDesc} key={index2}>
                    {item2}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: "RobotoBold",
    color: "#E8ECEE",
    textTransform: "capitalize",
    margin: 10,
  },
  section: {
    paddingVertical: 25,
  },
  champWrapper: {
    padding: 10,
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  champAvatar: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  champName: {
    fontSize: 18,
    color: "#E8ECEE",
    fontFamily: "RobotoMedium",
    textTransform: "capitalize",
  },
  champSkillWrapper: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginBottom: 5,
  },
  skillAvatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  skillName: {
    fontSize: 18,
    color: "#E8ECEE",
    fontFamily: "RobotoMedium",
    marginLeft: 10,
  },
  skillDesc: {
    flex: 1,
    fontSize: 14,
    fontFamily: "RobotoRegular",
    width: Dimensions.get("window").width - 110,
    color: "#B9C6CB",
    backgroundColor: "#1B475F",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    textAlignVertical: "center",
  },
  statDetail: {
    color: "#B9C6CB",
    fontSize: 16,
    fontFamily: "RobotoRegular",
  },
  trait: {
    width: 24,
    height: 24,
  },
});
