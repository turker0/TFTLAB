import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function NoteAvatar({ version, index, setCurrent, scrollview }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        setCurrent(index);
        scrollview.current?.scrollTo({
          x: 0,
          y: 0,
          animated: true,
        });
      }}
    >
      <Text style={styles.version}>{version}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#123040",
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    marginHorizontal: 3,
    justifyContent: "center",
  },
  version: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "RobotoMedium",
  },
});
