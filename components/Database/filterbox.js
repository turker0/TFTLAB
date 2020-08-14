import React from "react";
import { View, TextInput } from "react-native";
import { pageTheme } from "../../styles/page";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FilterBox({ filter, setFilter, type }) {
  return (
    <View
      style={[
        pageTheme.fdWrapperAIC,
        pageTheme.darkBGMedium,
        pageTheme.section,
        { justifyContent: "flex-start", paddingHorizontal: 10 },
      ]}
    >
      <View
        style={[
          pageTheme.fdWrapperAIC,
          { justifyContent: "flex-start", flex: 1 },
        ]}
      >
        <EvilIcons
          name="search"
          size={24}
          color={pageTheme.regularText.color}
        />
        <TextInput
          style={[
            pageTheme.regularText,
            { marginTop: 0, paddingHorizontal: 10 },
          ]}
          placeholder={"Search by " + type + " name."}
          value={filter}
          numberOfLines={1}
          onChangeText={(text) => {
            setFilter(text);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setFilter("");
        }}
      >
        <FontAwesome
          name="remove"
          size={24}
          color={pageTheme.regularText.color}
        />
      </TouchableOpacity>
    </View>
  );
}
