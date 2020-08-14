import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { pageTheme } from "../../styles/page";
import { FontAwesome } from "@expo/vector-icons";

export default function Tag({ tag, tags, setTags, type }) {
  return (
    <TouchableOpacity
      onPress={() => {
        !tags.includes(tag)
          ? setTags([...tags, tag])
          : setTags(
              tags.filter((item) => {
                return item != tag;
              })
            );
      }}
      style={[
        pageTheme.darkBGMedium,
        pageTheme.fdWrapperAIC,
        {
          paddingHorizontal: 7.5,
          margin: 2.5,
          backgroundColor:
            type == "gold"
              ? tag == 5
                ? "#b89d27"
                : tag == 4
                ? "#893088"
                : tag == 3
                ? "#12407c"
                : tag == 2
                ? "#156831"
                : "#213042"
              : pageTheme.darkBGMedium.backgroundColor,
        },
      ]}
    >
      <Text style={[pageTheme.smallText, { marginRight: 2.5 }]}>
        {tag} {type}
      </Text>
      {tags.includes(tag) ? (
        <FontAwesome
          name="remove"
          size={18}
          color={pageTheme.regularText.color}
        />
      ) : null}
    </TouchableOpacity>
  );
}
