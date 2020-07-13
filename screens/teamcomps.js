import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import TeamComp from "../components/teamcomp";

const getComps = async (setIsFetched, setComps) => {
  fetch("http://192.168.1.5:3000/api/teamcomps/", {
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

export default function TeamComps() {
  const [isFetched, setIsFetched] = useState(false);
  const [comps, setComps] = useState(0);
  useEffect(() => {
    if (!isFetched) getComps(setIsFetched, setComps);
  });
  return { isFetched } ? (
    <View>
      <View style={styles.page}>
        <FlatList
          data={comps}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TeamComp
              tier={item.tier}
              name={item.name}
              champs={item.champs}
              traits={item.traits}
            />
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
