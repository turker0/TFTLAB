import React from "react";
import { View, ScrollView } from "react-native";
import Item from "../../components/ItemList/items";
import Loading from "../../components/shared/loading";
import { pageTheme } from "../../styles/page";

export default function ItemList({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { items } = route.params;
  return list ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={pageTheme.page}>
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
