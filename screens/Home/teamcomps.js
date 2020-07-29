import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Comps from "../../components/Comps/comps";
import TeamComp from "../../components/Comps/teamcomp";
import Loading from "../../components/shared/loading";
import { ScrollView } from "react-native-gesture-handler";

const getComps = async (setIsFetched, setComps) => {
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        {comps != 0 ? (
          comps.map((item, index) => (
            <View key={index}>
              <TeamComp comp={item} navigation={navigation} />
            </View>
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
