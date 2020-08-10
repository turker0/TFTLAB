import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Classes from "../../assets/classes/classes";
import getRelatedElement from "../../helpers/getRelatedElement";
import { pageTheme } from "../../styles/page";
import RefactorFileName from "../../helpers/refactorFileName";

export default function ClassTier({
  tier,
  list,
  classes,
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
            <Image
              style={[pageTheme.avatarMed, { margin: 2.5 }]}
              source={Classes[RefactorFileName(item, "trait")]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
