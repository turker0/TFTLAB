import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Items from "../../assets/items/items";
import getRelatedElement from "../../helpers/getRelatedElement";

export default function ItemTier({ tier, list, items, navigation }) {
  return (
    <View style={{ marginVertical: 25, padding: 10 }}>
      <Text style={styles.tierTitle}>{tier} tier</Text>
      <View style={[styles.items, { width: list.length * 55 + 20 }]}>
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
            <Image style={styles.avatar} source={Items[item]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tierTitle: {
    fontSize: 32,
    fontFamily: "RobotoBold",
    color: "#ffffffe6",
  },
  items: {
    marginVertical: 5,
    marginRight: 20,
    borderRadius: 2,
    padding: 10,
    backgroundColor: "#1B475F",
    flexDirection: "row",
    maxWidth: Dimensions.get("window").width - 20,
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  avatar: {
    width: 46,
    height: 46,
    margin: 4.5,
    borderRadius: 4,
  },
});
