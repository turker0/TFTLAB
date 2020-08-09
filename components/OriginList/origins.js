import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Origins from "../../assets/origins/origins";
import getRelatedElement from "../../helpers/getRelatedElement";
import { pageTheme } from "../../styles/page";

export default function OriginTier({
  tier,
  list,
  origins,
  champions,
  navigation,
}) {
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
            key={index}
            onPress={() => {
              let origin = getRelatedElement(item, origins);
              navigation.navigate("TraitPage", {
                name: origin[0].name,
                desc: origin[0].desc,
                count: origin[0].count,
                detail: origin[0].detail,
                units: origin[0].units,
                champions: champions,
                type: "1", // 0 = CLASS || 1 = ORIGIN
              });
            }}
          >
            <Image
              style={[pageTheme.avatarMed, { margin: 2.5 }]}
              source={Origins[item]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
