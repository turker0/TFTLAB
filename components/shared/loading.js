import React from "react";
import { View, ActivityIndicator } from "react-native";
import { pageTheme } from "../../styles/page";

export default function Loadin() {
  return (
    <View style={[pageTheme.page, pageTheme.centeredFlex]}>
      <ActivityIndicator size="large" color="#88a0a7" />
    </View>
  );
}
