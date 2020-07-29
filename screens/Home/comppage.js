import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CompPage = ({ route, navigation }) => {
  const { name } = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default CompPage;

const styles = StyleSheet.create({});
