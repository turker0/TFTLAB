import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import avatars from "../assets/avatars/avatars";
import classes from "../assets/classes/classes";
import origins from "../assets/origins/origins";

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
        <Text>{name}</Text>
        <View style={styles.statsWrapper}>
          <Text style={styles.stats}>Cost: 4</Text>
          <Text style={styles.stats}>Health: 900/1620/2916</Text>
          <Text style={styles.stats}>Mana: 0/30</Text>
          <Text style={styles.stats}>Armor: 50</Text>
          <Text style={styles.stats}>MR: 40</Text>
          <Text style={styles.stats}>DPS: 72/130/234</Text>
          <Text style={styles.stats}>Damage: 85/153/275</Text>
          <Text style={styles.stats}>Atk Speed: 0.85</Text>
          <Text style={styles.stats}>Crit Rate: 25%</Text>
          <Text style={styles.stats}>Range: 180</Text>
        </View>
      </View>
      <View style={styles.detailsWrapper}>
        <View style={styles.topWrapper}>
          <Text style={styles.abilities}>Abilities</Text>
          <View style={styles.traitsWrapper}>
            <Image style={styles.traits} source={origins["cybernetic"]} />
            <Image style={styles.traits} source={classes["blademaster"]} />
          </View>
        </View>
        <Text style={styles.ability}>
          Irelia dashes past her target, attacking them for a percentage of her
          Attack Damage as she passes through. If this kills the target, she
          casts again immediately at the enemy with the highest mana. Percent of
          Attack Damage: 225% / 250% / 500%
        </Text>
        <View stats={stats.classWrapper}>
          <Text>
            Blademasters' Basic Attacks have a chance on hit to trigger two
            additional attacks against their target. These additional attacks
            deal damage like Basic Attacks and trigger on-hit effects.
          </Text>
        </View>
        <View stats={stats.classWrapper}>
          <Text>
            Blademasters' Basic Attacks have a chance on hit to trigger two
            additional attacks against their target. These additional attacks
            deal damage like Basic Attacks and trigger on-hit effects.
          </Text>
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
  },
  logo: {
    width: Dimensions.get("window").width * 0.15,
    height: Dimensions.get("window").width * 0.15,
  },
  statsWrapper: {
    width: "100%",
    marginTop: 5,
  },
  stats: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "RobotoLight",
    marginVertical: 1,
  },
  traitsWrapper: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  traits: {
    width: Dimensions.get("window").width * 0.04,
    height: Dimensions.get("window").width * 0.04,
  },
  detailsWrapper: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  topWrapper: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  abilities: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "RobotoBold",
  },
  ability: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "RobotoRegular",
  },
});
