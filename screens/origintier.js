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
    <View>
      <View style={styles.page}>
        <FlatList
          data={originList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <OriginTier tier={item.tier} origins={item.origins} />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </View>
  );
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
