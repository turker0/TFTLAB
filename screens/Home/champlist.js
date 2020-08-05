import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Champ from "../../components/ChampList/champs";
import Loading from "../../components/shared/loading";

export default function ChampList({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { champions } = route.params;
  return { list } ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        {list != 0 && champions != 0 ? (
          list.map((item, index) => (
            <Champ
              tier={item.tier}
              list={item.champs}
              champions={champions}
              navigation={navigation}
              key={index}
            />
          ))
        ) : (
          <Loading />
        )}
      </View>
    </ScrollView>
  ) : null;
}

const styles = StyleSheet.create({
  page: {
    width: "101%",
    backgroundColor: "#123040",
  },
});
