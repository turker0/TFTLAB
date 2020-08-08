import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { pageTheme } from "../../styles/page";

export default function NoteAvatar({ version, index, setCurrent, current }) {
  return (
    <TouchableHighlight
      style={[
        pageTheme.noteAvatar,
        current == index
          ? { borderColor: "#f48024" }
          : { borderColor: "#123040" },
      ]}
      onPress={() => {
        setCurrent(index);
      }}
    >
      <Text
        style={[
          pageTheme.textDetail,
          current == index ? { color: "#f48024" } : { color: "#ffffffe6" },
        ]}
      >
        {version}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 52,
    height: 52,
    backgroundColor: "#102531",
    borderRadius: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
  },
  version: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "RobotoMedium",
  },
});
