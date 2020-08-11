import React from "react";
import { View, ScrollView } from "react-native";
import Champ from "../../components/ChampList/champs";
import Loading from "../../components/shared/loading";
import { pageTheme } from "../../styles/page";

export default function ChampList({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { champions } = route.params;
  return { list } ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={pageTheme.page}>
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
