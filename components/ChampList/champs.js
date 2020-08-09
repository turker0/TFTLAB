import React from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import getRelatedElement from "../../helpers/getRelatedElement";
import avatars from "../../assets/avatars/avatars";
import { pageTheme } from "../../styles/page";

export default function ChampTier({ tier, list, navigation, champions }) {
  return (
    <View style={pageTheme.page}>
      <Text style={pageTheme.title}>{tier} tier</Text>
      <View
        style={[
          pageTheme.darkBGMedium,
          pageTheme.flexWrap,
          {
            width: pageTheme.cardFillWidth.width,
            justifyContent: "flex-start",
          },
        ]}
      >
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
                pageTheme.darkBGSmall,
                { backgroundColor: getChampBorderColor(item), margin: 2.5 },
              ]}
            >
              <Image style={pageTheme.avatarMed} source={avatars[item]} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
