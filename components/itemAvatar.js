import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import items from "../assets/items/items";
import Tooltip from "react-native-walkthrough-tooltip";
import ItemDetails from "./itemdetails";

export default function ItemAvatar({ item }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Tooltip
        isVisible={isVisible}
        content={<ItemDetails Item={item} />}
        placement="center"
        onClose={() => setIsVisible(false)}
        contentStyle={styles.tooltip}
        showChildInTooltip={false}
      >
        <TouchableHighlight onPress={() => setIsVisible(true)}>
          <Image style={styles.logo} source={items[item.name]} />
        </TouchableHighlight>
      </Tooltip>
    </View>
  );
}

const styles = StyleSheet.create({
  tooltip: {
    width: Dimensions.get("window").width * 0.9,
    height: "auto",
    backgroundColor: "#34495e",
  },
  container: {
    marginHorizontal: 5,
    marginTop: 5,
    elevation: 5,
  },
  logo: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 6,
    height: (Dimensions.get("window").width * 0.75 - 60) / 6,
  },
});
