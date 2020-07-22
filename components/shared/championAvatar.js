import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import avatars from "../../assets/avatars/avatars";
import Tooltip from "react-native-walkthrough-tooltip";
import ChampDetails from "../TeamComps/champdetails";

export default function ChampionAvatar({
  name,
  gold,
  origin,
  type,
  skill,
  details,
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View
      style={[
        styles.container,
        gold === 1
          ? { backgroundColor: "#213042" }
          : gold === 2
          ? { backgroundColor: "#156831" }
          : gold === 3
          ? { backgroundColor: "#12407c" }
          : gold === 4
          ? { backgroundColor: "#893088" }
          : { backgroundColor: "#b89d27" },
      ]}
    >
      <Tooltip
        isVisible={isVisible}
        content={
          <ChampDetails
            name={name}
            gold={gold}
            origin={origin}
            type={type}
            skill={skill}
            details={details}
          />
        }
        placement="center"
        onClose={() => setIsVisible(false)}
        contentStyle={styles.tooltip}
        showChildInTooltip={false}
      >
        <TouchableHighlight onPress={() => setIsVisible(true)}>
          <Image style={styles.logo} source={avatars[name]} />
        </TouchableHighlight>
      </Tooltip>
    </View>
  );
}

const styles = StyleSheet.create({
  tooltip: {
    width: Dimensions.get("window").width * 0.8,
    height: "auto",
    backgroundColor: "#34495e",
  },
  container: {
    marginLeft: 5,
    marginTop: 5,
    elevation: 5,
    width: (Dimensions.get("window").width * 0.75 - 60) / 5.5,
    height: (Dimensions.get("window").width * 0.75 - 60) / 5.5,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 6,
    height: (Dimensions.get("window").width * 0.75 - 60) / 6,
  },
});
