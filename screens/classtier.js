import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";

import ClassTier from "../components/classtier";

const getClass = async (setIsFetched, setClassList) => {
  fetch("http://192.168.1.5:3000/api/classtier/", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setClassList(resJson);
    })
    .catch((error) => console.error(error));
  setIsFetched(true);
};

export default function ClassesTier() {
  const [isFetched, setIsFetched] = useState(false);
  const [classList, setClassList] = useState(0);
  useEffect(() => {
    if (!isFetched) getClass(setIsFetched, setClassList);
  });
  return { classList } ? (
    <View>
      <View style={styles.page}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={classList}
          renderItem={({ item }) => (
            <ClassTier tier={item.tier} classes={item.classes} />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  page: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.8,
    backgroundColor: "#123040",
    alignItems: "center",
    borderRadius: 8,
    margin: Dimensions.get("window").width * 0.03,
    padding: Dimensions.get("window").width * 0.03,
    elevation: 5,
  },
});
