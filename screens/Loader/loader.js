import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { pageTheme } from "../../styles/page";

const Loader = () => {
  return (
    <View
      style={[
        pageTheme.page,
        { backgroundColor: pageTheme.darkBGMedium.backgroundColor },
      ]}
    >
      <Text style={pageTheme.title}>Loader</Text>
    </View>
  );
};

export default Loader;
