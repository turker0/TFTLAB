import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import TeamComp from "../../components/Comps/teamcomp";
import Loading from "../../components/shared/loading";
import { ScrollView } from "react-native-gesture-handler";

const getDetails = async (setIsFetched, setComps, setChampions) => {
  fetch("http://192.168.1.5:3000/api/comps/", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setComps(resJson);
    })
    .catch((error) => console.error(error));

  fetch("http://192.168.1.5:3000/api/champions/", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setChampions(resJson);
    })
    .catch((error) => console.error(error));

  setIsFetched(true);
};

export default function TeamComps({ route }) {
  const [isFetched, setIsFetched] = useState(false);
  const [comps, setComps] = useState(0);
  const [champions, setChampions] = useState(0);
  useEffect(() => {
    if (!isFetched) getDetails(setIsFetched, setComps, setChampions);
  });
  const { navigation } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.page}>
        {comps != 0 && champions != 0 ? (
          comps.map((item, index) => (
            <TeamComp
              comp={item}
              navigation={navigation}
              champions={champions}
              key={index}
            />
          ))
        ) : (
          <Loading />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    width: "100%",
    backgroundColor: "transparent",
    padding: 10,
  },
});
