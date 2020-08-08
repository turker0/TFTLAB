import React from "react";
import { StatusBar, View, ScrollView } from "react-native";
import Champ from "../../components/ChampList/champs";
import Loading from "../../components/shared/loading";
import { pageTheme } from "../../styles/page";
import { global } from "../../styles/global";

export default function ChampList({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { champions } = route.params;
  return { list } ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar
        backgroundColor={global.statusBar.backgroundColor}
        barStyle="dark-content"
      />
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
