import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function NoteAvatar({
  version,
  index,
  setCurrent,
  scrollview,
  current,
}) {
  return (
    <TouchableHighlight
      style={[
        styles.container,
        current == index
          ? { borderColor: "#f48024" }
          : { borderColor: "#123040" },
      ]}
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
    width: 40,
    height: 40,
    backgroundColor: "#123040",
    borderRadius: 50,
    borderWidth: 1,
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
