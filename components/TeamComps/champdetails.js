import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

import avatars from "../../assets/avatars/avatars";
import classes from "../../assets/classes/classes";
import origins from "../../assets/origins/origins";
import skills from "../../assets/skills/skills";

export default function ChampDetails({
  name,
  gold,
  origin,
  type,
  skill,
  details,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.logo} source={avatars[name]} />
        <Text style={styles.name}>{name}</Text>
        <View style={styles.statsWrapper}>
          <Text style={styles.stats}>Cost: {gold}</Text>
          <View style={styles.healthWrapper}>
            <Text style={styles.stats}>HP: </Text>
            <FlatList
              data={details.health}
              horizontal={true}
              renderItem={({ item, index }) =>
                index > 0 ? (
                  <Text style={styles.stats}>/{item}</Text>
                ) : (
                  <Text style={styles.stats}>{item}</Text>
                )
              }
              keyExtractor={(item, index) => String(index)}
            />
          </View>
          <Text style={styles.stats}>
            Mana: {details.startingmana}/{details.mana}
          </Text>
          <Text style={styles.stats}>Armor: {details.armor}</Text>
          <Text style={styles.stats}>MR: {details.mr}</Text>
          <View style={styles.healthWrapper}>
            <Text style={styles.stats}>DPS: </Text>
            <FlatList
              data={details.dps}
              horizontal={true}
              renderItem={({ item, index }) =>
                index > 0 ? (
                  <Text style={styles.stats}>/{item}</Text>
                ) : (
                  <Text style={styles.stats}>{item}</Text>
                )
              }
              keyExtractor={(item, index) => String(index)}
            />
          </View>
          <View style={styles.healthWrapper}>
            <Text style={styles.stats}>DMG: </Text>
            <FlatList
              data={details.damage}
              horizontal={true}
              renderItem={({ item, index }) =>
                index > 0 ? (
                  <Text style={styles.stats}>/{item}</Text>
                ) : (
                  <Text style={styles.stats}>{item}</Text>
                )
              }
              keyExtractor={(item, index) => String(index)}
            />
          </View>
          <Text style={styles.stats}>Atk Speed: 0.{details.critrate}</Text>
          <Text style={styles.stats}>Crit Rate: {details.critrate}%</Text>
          <Text style={styles.stats}>
            Range:
            {details.range === 1
              ? " 180"
              : details.range === 2
              ? " 440"
              : details.range === 3
              ? " 660"
              : " 990"}
          </Text>
        </View>
      </View>
      <View style={styles.detailsWrapper}>
        <Text style={styles.abilities}>{skill.name}</Text>
        <View style={styles.fdWrapper}>
          <Image style={styles.skillImage} source={skills[name]} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.abilityMana}>{skill.type}</Text>
            <Text style={styles.abilityMana}>
              Mana: {details.startingmana} / {details.mana}
            </Text>
          </View>
        </View>
        <View style={styles.descWrapper}>
          <FlatList
            data={skill.desc}
            renderItem={({ item }) => (
              <Text style={styles.ability}>{item}</Text>
            )}
            keyExtractor={(item, index) => String(index)}
          />
        </View>
        <View style={styles.traitsWrapper}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image style={styles.traits} source={origins[origin]} />
            <Text style={styles.traitText}>{origin}</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image style={styles.traits} source={classes[type]} />
            <Text style={styles.traitText}>{type}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  avatarWrapper: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    borderRightWidth: 0.3,
    paddingVertical: 5,
  },
  logo: {
    width: Dimensions.get("window").width * 0.15,
    height: Dimensions.get("window").width * 0.15,
  },
  name: {
    fontSize: 12,
    fontFamily: "RobotoBlack",
    color: "#fff",
  },
  statsWrapper: {
    width: "100%",
  },
  stats: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "RobotoLight",
    marginVertical: 1,
  },
  healthWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  traitsWrapper: {
    marginTop: 15,
    width: "60%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  traits: {
    width: Dimensions.get("window").width * 0.08,
    height: Dimensions.get("window").width * 0.08,
  },
  traitText: {
    color: "#fff",
    fontSize: 8,
    fontFamily: "RobotoMedium",
    textTransform: "capitalize",
    marginTop: 2,
  },
  detailsWrapper: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  skillImage: {
    borderRadius: 18,
    width: Dimensions.get("window").width * 0.08,
    height: Dimensions.get("window").width * 0.08,
  },
  abilities: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "RobotoBold",
  },
  abilityMana: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "RobotoBold",
    textTransform: "capitalize",
  },
  ability: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "RobotoRegular",
  },
  descWrapper: {
    width: "100%",
    marginTop: 15,
  },
  fdWrapper: {
    marginTop: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
