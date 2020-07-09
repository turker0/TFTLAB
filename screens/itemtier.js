import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";

import ItemTier from "../components/itemtier";

const getItems = async (setIsFetched, setChampsList) => {
  fetch("http://192.168.1.5:3000/api/itemtier/", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setChampsList(resJson);
    })
    .catch((error) => console.error(error));
  setIsFetched(true);
};

export default function ItemsTier() {
  const [isFetched, setIsFetched] = useState(false);
  const [itemList, setItemList] = useState(0);
  useEffect(() => {
    if (!isFetched) getItems(setIsFetched, setItemList);
  });
  return { itemList } ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Text style={styles.title}>Item Tier List</Text>
        <FlatList
          data={itemList}
          renderItem={({ item }) => (
            <ItemTier tier={item.tier} items={item.items} />
          )}
          keyExtractor={(index) => index}
        />
      </View>
    </ScrollView>
  ) : null;
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
