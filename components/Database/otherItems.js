import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { pageTheme } from "../../styles/page";
import { FontAwesome } from "@expo/vector-icons";

export default function OtherItems({ tag, otherTags, setOtherTags, index }) {
  return (
    <TouchableOpacity
      onPress={() => {
        otherTags == index ? setOtherTags(0) : setOtherTags(index);
      }}
    >
      <View
        style={[
          pageTheme.darkBGMedium,
          pageTheme.fdWrapperAIC,
          {
            margin: 2.5,
            backgroundColor:
              otherTags == index
                ? pageTheme.splash.color
                : pageTheme.darkBGMedium.backgroundColor,
          },
        ]}
      >
        <Text style={[pageTheme.smallText, { marginRight: 2.5 }]}>{tag}</Text>
        {otherTags == index ? (
          <FontAwesome
            name="remove"
            size={18}
            color={pageTheme.regularText.color}
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}
