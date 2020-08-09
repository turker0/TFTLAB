import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Items from "../../assets/items/items";
import getRelatedElement from "../../helpers/getRelatedElement";
import { pageTheme } from "../../styles/page";

export default function ItemTier({ tier, list, items, navigation }) {
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
              let RelatedItem = getRelatedElement(item, items);
              navigation.navigate("ItemPage", {
                name: RelatedItem[0].name,
                desc: RelatedItem[0].desc,
                contribution: RelatedItem[0].contribution,
                first: RelatedItem[0].first,
                second: RelatedItem[0].second,
                third: RelatedItem[0].third,
                detail: RelatedItem[0].detail,
                items: items,
              });
            }}
          >
            <Image
              style={[pageTheme.avatarMed, { margin: 2.5 }]}
              source={Items[item]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
