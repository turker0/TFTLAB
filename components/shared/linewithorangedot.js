import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { pageTheme } from "../../styles/page";

export default function LineWithOrangeDot({ label, text }) {
  return (
    <View style={pageTheme.fdWrapperAIC}>
      <Text style={pageTheme.pointer}>⦿</Text>
      <Text style={pageTheme.regularText}>
        {label != undefined ? label + ":" : null} {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
