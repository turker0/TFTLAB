import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import classes from "../../assets/classes/classes";
import origins from "../../assets/origins/origins";
import Tooltip from "react-native-walkthrough-tooltip";
import checkIsClass from "../../helpers/checkIsClass";
import getTraitBorderColor from "../../helpers/getTraitBorderColor";
import TraitDetails from "./traitdetails";

export default function CompTrait({ trait, count, desc, combo }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Tooltip
      isVisible={isVisible}
      content={
        <TraitDetails name={trait} count={count} desc={desc} combo={combo} />
      }
      placement="center"
      onClose={() => setIsVisible(false)}
      contentStyle={styles.tooltip}
      showChildInTooltip={false}
    >
      <TouchableHighlight onPress={() => setIsVisible(true)}>
        <View
          style={[
            styles.container,
            { backgroundColor: getTraitBorderColor(trait, count) },
          ]}
        >
          <Image
            style={styles.logo}
            source={checkIsClass(trait) ? classes[trait] : origins[trait]}
          />
          <Text style={styles.trait}>{count}</Text>
        </View>
      </TouchableHighlight>
    </Tooltip>
  );
}

const styles = StyleSheet.create({
  tooltip: {
    width: Dimensions.get("window").width * 0.65,
    height: "auto",
    backgroundColor: "#34495e",
  },
  container: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 4,
    padding: 5,
  },
  trait: {
    fontSize: 10,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -0.5, height: 0 },
    textShadowRadius: 5,
    fontFamily: "RobotoBold",
    marginLeft: "10%",
  },
  logo: {
    width: 10,
    height: 10,
  },
});
