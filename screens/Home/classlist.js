import React from "react";
import { View, ScrollView } from "react-native";
import Loading from "../../components/shared/loading";
import Classes from "../../components/ClassList/classes";
import { pageTheme } from "../../styles/page";

export default function ClassesTier({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { classes } = route.params;
  const { champions } = route.params;

  return { list } ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={pageTheme.page}>
        {list != 0 ? (
          list.map((item, index) => (
            <Classes
              tier={item.tier}
              list={item.classes}
              classes={classes}
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
