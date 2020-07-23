import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, FlatList } from "react-native";
import ChampTier from "../../components/ChampTier/champtier";
import Loading from "../../components/shared/loading";

const getComps = async (setIsFetched, setChampsList) => {
  fetch("http://192.168.1.5:3000/api/champtier/", {
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

export default function ChampsTier() {
  const [isFetched, setIsFetched] = useState(false);
  const [champsList, setChampsList] = useState(0);
  useEffect(() => {
    if (!isFetched) getComps(setIsFetched, setChampsList);
  });

  return { champsList } ? (
    <View style={styles.page}>
      {champsList != 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={champsList}
          renderItem={({ item }) => (
            <ChampTier tier={item.tier} champs={item.champs} />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      ) : (
        <Loading />
      )}
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  page: {
    width: "101%",
    backgroundColor: "#123040",
    alignItems: "center",
  },
});