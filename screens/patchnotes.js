import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import PatchNote from "../components/patchnote";

const note = {
  version: "10.13",
  date: "June 24, 2020",
  notes: [
    {
      header: "Ranked",
      header2: null,
      note: [
        "If you are ranked Master or above, you may now only queue solo in Ranked.",
      ],
    },
    {
      header: "Systems",
      header2: "Galaxies",
      note: [
        "New Galaxy: Binary Star. Champions can only hold two items.",
        "Medium Legends Galaxy has been removed from the game.",
        "Binary Star will occur in 10% of games.",
      ],
    },
    {
      header: null,
      header2: "Miscellaneous",
      note: [
        "Raised the minimum number of items that can drop in a game by 1.",
      ],
    },
    {
      header: "Traits",
      header2: "Balance and Adjustments",
      note: [
        "Battlecast Damage or Healing: 70/160/325/600 ⇒ 80/180/480/880",
        "Blademaster Chance for Bonus Attacks: 30/70/100 ⇒ 30/65/100",
        "Blaster Bonus Attacks: 3/5 ⇒ 3/6",
        "Cybernetic Bonus Attack Damage: 40/80 ⇒ 40/75",
        "Dark Star Bonus Attack Damage & Ability Power: 8/16/24/32 ⇒ 8/18/28/38",
        "Infiltrator Bonus Attack Speed: 40/70/120 ⇒ 40/80/120",
        "Mystic Magic Resistance: 50/125 ⇒ 50/120",
      ],
    },
    {
      header: "Champions Balance",
      header2: "Tier 1 Champions",
      note: [
        "Illaoi Health: 650 ⇒ 700",
        "Illaoi Tentacle Smash Defense Stealing: 20/30/50% ⇒ 30/40/60%",
        "Illaoi Defense Stealing Duration: 4 ⇒ 6 seconds",
        "Nocturne Attack Speed: 0.7 ⇒ 0.75",
        "Nocturne Unspeakable Horror Damage: 200/250/350 ⇒ 200/250/400",
        "Xayah Total Mana: 70 ⇒ 60",
      ],
    },
    {
      header: null,
      header2: "Tier 2 Champions",
      note: [
        "Darius Armor: 35 ⇒ 40",
        "Darius Magic Resist: 20 ⇒ 30",
        "Darius Dreadnova Guillotine Damage: 400/500/750 ⇒ 400/550/800",
        "Kog’Maw Health: 500 ⇒ 550",
        "Kog’Maw Total Mana: 40 ⇒ 30",
        "Kog’Maw Barrage % Max HP Damage: 2/4/7% ⇒ 2/4/8%",
        "Nautilus Impact Crater Stun Duration: 3/3.5/4 ⇒ 3/3/5 seconds",
        "Nautilus Mana: 60/120 ⇒ 50/120",
      ],
    },
    {
      header: null,
      header2: "Tier 3 Champions",
      note: [
        "Bard Cast time significantly reduced",
        "Cassiopeia Poison Duration: 12 seconds ⇒ 14 seconds",
        "Jayce Health: 850 ⇒ 800",
        "Master Yi Chosen One Damage: 75/100/200 ⇒ 75/100/175",
      ],
    },
    {
      header: null,
      header2: "Tier 4 Champions",
      note: [
        "Fizz Starting Mana: 60 ⇒ 50",
        "Gnar Health on Transform: 750/1250/2500 ⇒ 750/1250/4000",
        "Gnar Attack Damage on Transform: 100/175/400 ⇒ 100/175/550",
        "GNAR! Stun Duration: 2 ⇒ 1.5 seconds",
        "Jinx Get Excited!Bonus Attack Speed: 60/75/100% ⇒ 50/70/100%",
        "Riven Energy Slash Shield: 250/400/1000 ⇒ 225/375/1000",
        "Teemo Satellite Damage: 125/175/600 ⇒ 125/175/550",
        "Teemo Satellite Slow Duration: 4 ⇒ 3 seconds",
      ],
    },
    {
      header: null,
      header2: "Tier 5 Champions",
      note: [
        "Ekko Chronobreak Damage: 100/200/2000 ⇒ 100/150/2000",
        "Thresh Total Mana: 75 ⇒ 90",
      ],
    },
    {
      header: "Items",
      header2: null,
      note: [
        "Bloodthirster Healing: 40% ⇒ 45%",
        "Hextech Gunblade Healing: 40% ⇒ 45%",
        "Jeweled Gauntlet Bonus Crit Damage: 20% ⇒ 30%",
        "Statikk Shiv Damage: 80 ⇒ 90",
        "Zz’Rot Portal Health: 1000/2000/3000 ⇒ 1500/2250/3000",
      ],
    },
    {
      header: "Bugfixes",
      header2: null,
      note: [
        "Cleaned up some tooltips with respect to percentages",
        "Fixed Malphite’s Energy Shield not benefiting from the Spell Power provided by Chalice of Power",
        "Fixed Space Pirates rarely causing additional coin drops when equipped with Giant Slayer",
        "Fixed an issue where a Kog’Maw’s attacks during Barrage could rarely become Trap Claw procs",
        "Removed the unintended orange glow that would play on melee weapons of units equipped with Infinity Edge",
        "Fixed an issue where Zephyr’d units could be hit by certain AoE spells like Teemo’s Satellite Traps",
      ],
    },
    {
      header: "Mobile Corner",
      header2: null,
      note: [
        "A few Team Planner bugs needed fixing.",
        "Xerath was lost in space for a bit. We found him and put him back in the Team Planner.",
        "We removed a few champions from the game in patch 10.12 but they hid away in the Team Planner. We found and removed them.",
        "Nocturne snuck into Tier 2 in the Team Planner. We put him back into his appropriate Tier 1.",
      ],
    },
  ],
};

export default function PatchNotes() {
  return (
    <View
      style={{
        marginTop: 25,
        backgroundColor: "#39ADFA",
      }}
    >
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.patchTitle}>Patch {note.version}</Text>
          <Text style={styles.date}>{note.date}</Text>
        </View>
        <View style={styles.noteWrapper}>
          <FlatList
            data={note.notes}
            contentContainerStyle={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              overflow: "hidden",
            }}
            renderItem={({ item, index }) => (
              <PatchNote note={item} index={index} />
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
    alignItems: "center",
  },
  titleWrapper: {
    marginTop: 30,
    paddingBottom: 10,
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  patchTitle: {
    fontSize: 24,
    fontFamily: "RobotoBlack",
    marginRight: "14%",
    color: "#02233C",
  },
  date: {
    fontSize: 12,
    fontFamily: "RobotoMedium",
    color: "#02233C",
  },
  noteWrapper: {
    width: "95%",
    elevation: 5,
    justifyContent: "flex-start",
  },
});
