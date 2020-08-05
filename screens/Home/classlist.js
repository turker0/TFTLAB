import React from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Loading from "../../components/shared/loading";
import Classes from "../../components/ClassList/classes";

export default function ClassesTier({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { classes } = route.params;
  const { champions } = route.params;

  return { list } ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
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

const styles = StyleSheet.create({
  page: {
    width: Dimensions.get("window").width,
    height: "100%",
    backgroundColor: "#123040",
  },
});
