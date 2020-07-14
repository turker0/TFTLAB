import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function NoteAvatar({ version, index, setCurrent }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        setCurrent(index);
      }}
    >
      <Text style={styles.version}>{version}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#34495E",
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  version: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "RobotoMedium",
  },
});
