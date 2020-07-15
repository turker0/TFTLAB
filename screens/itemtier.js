import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, FlatList } from "react-native";
import ItemTier from "../components/itemtier";
import Loading from "../components/loading";

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
    <View>
      <View style={styles.page}>
        {itemList != 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={itemList}
            renderItem={({ item }) => (
              <ItemTier tier={item.tier} items={item.items} />
            )}
            keyExtractor={(item, index) => String(index)}
          />
        ) : (
          <Loading />
        )}
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  page: {
    width: Dimensions.get("window").width * 0.9,
    marginHorizontal: Dimensions.get("window").width * 0.05,
    backgroundColor: "#123040",
    alignItems: "center",
    elevation: 5,
  },
});
