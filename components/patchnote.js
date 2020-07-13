import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function PatchHeader({ note, index }) {
  return (
    <View style={styles.container}>
      {note.header ? <Text style={styles.header}>{note.header}</Text> : null}
      {note.header2 ? <Text style={styles.header2}>{note.header2}</Text> : null}
      <View style={styles.contextWrapper}>
        <FlatList
          data={note.note}
          renderItem={({ item }) => (
            <View style={styles.entryWrapper}>
              <FontAwesome
                name="circle"
                size={8}
                color="#39ADFA"
                style={{ marginTop: "1.5%", elevation: 5 }}
              />
              <Text style={styles.context}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: "left",
    fontFamily: "RobotoBold",
    color: "#02233C",
    borderBottomWidth: 0.5,
    borderColor: "#02233C",
  },
  header2: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "left",
    fontWeight: "900",
    fontFamily: "RobotoMedium",
    color: "#021E33",
  },
  contextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  entryWrapper: {
    flexDirection: "row",
  },
  context: {
    fontSize: 14,
    marginBottom: 3,
    marginLeft: 5,
    textAlign: "left",
    fontFamily: "RobotoLight",
    color: "#011727",
  },
});
