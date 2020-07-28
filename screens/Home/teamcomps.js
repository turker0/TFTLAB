import React, { useState, useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import TeamComp from "../../components/TeamComps/teamcomp";
import Loading from "../../components/shared/loading";

const getComps = async (setIsFetched, setComps) => {
  fetch("http://192.168.1.5:3000/api/teamcomp/", {
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
  setIsFetched(true);
};

export default function TeamComps({ route }) {
  const [isFetched, setIsFetched] = useState(false);
  const [comps, setComps] = useState(0);
  useEffect(() => {
    if (!isFetched) getComps(setIsFetched, setComps);
  });
  const { navigation } = route.params;
  return (
    <View style={styles.page}>
      {comps != 0 ? (
        <Animated.FlatList
          data={comps}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TeamComp
              tier={item.tier}
              name={item.name}
              champs={item.champs}
              traits={item.traits}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
  },
});
