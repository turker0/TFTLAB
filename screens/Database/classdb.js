import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ItemBuilder() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ paddingTop: 100 }}>
          <Text style={styles.title}>Item Builder</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontFamily: "RobotoBold",
    color: "#E8ECEE",
    textTransform: "capitalize",
    margin: 10,
  },
  section: {
    paddingVertical: 25,
  },
});
