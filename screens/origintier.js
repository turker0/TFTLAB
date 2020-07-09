import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";

import OriginTier from "../components/origintier";

const getOrigin = async (setIsFetched, setOriginList) => {
  fetch("http://192.168.1.5:3000/api/origintier/", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setOriginList(resJson);
    })
    .catch((error) => console.error(error));
  setIsFetched(true);
};

export default function OriginTiers() {
  const [isFetched, setIsFetched] = useState(false);
  const [originList, setOriginList] = useState(0);
  useEffect(() => {
    if (!isFetched) getOrigin(setIsFetched, setOriginList);
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Text style={styles.title}>Origin Tier List</Text>
        <FlatList
          data={originList}
          renderItem={({ item }) => (
            <OriginTier tier={item.tier} origins={item.origins} />
          )}
          keyExtractor={(index) => index}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    width: Dimensions.get("window").width * 0.9,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: Dimensions.get("window").width * 0.03,
    padding: Dimensions.get("window").width * 0.03,
    elevation: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "RobotoBold",
    color: "#02233C",
    marginTop: "-7%",
    marginBottom: "10%",
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
    paddingVertical: "1%",
    borderRadius: 4,
    elevation: 2,
  },
});
