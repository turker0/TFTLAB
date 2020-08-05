import React from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Item from "../../components/ItemList/items";
import Loading from "../../components/shared/loading";

export default function ItemList({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { items } = route.params;
  return { list } ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        {list != 0 ? (
          list.map((item, index) => (
            <Item
              tier={item.tier}
              list={item.items}
              items={items}
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
