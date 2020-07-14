import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import classes from "../assets/classes/classes";
import Tooltip from "react-native-walkthrough-tooltip";
import ClassDetails from "./classdetails";

export default function ClassAvatar({ Class }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Tooltip
        isVisible={isVisible}
        content={<ClassDetails Class={Class} />}
        placement="center"
        onClose={() => setIsVisible(false)}
        contentStyle={styles.tooltip}
        showChildInTooltip={false}
      >
        <TouchableHighlight onPress={() => setIsVisible(true)}>
          <Image style={styles.logo} source={classes[Class.name]} />
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
    marginHorizontal: 5,
    marginTop: 5,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    width: (Dimensions.get("window").width * 0.75 - 60) / 5,
  },
  logo: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 6,
    height: (Dimensions.get("window").width * 0.75 - 60) / 6,
  },
});
