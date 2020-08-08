import React from "react";
import { View, ScrollView } from "react-native";
import Loading from "../../components/shared/loading";
import Origin from "../../components/OriginList/origins";
import { pageTheme } from "../../styles/page";

export default function OriginTiers({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { origins } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={pageTheme.page}>
        {list != 0 ? (
          list.map((item, index) => (
            <Origin
              tier={item.tier}
              list={item.origins}
              origins={origins}
              navigation={navigation}
              key={index}
            />
          ))
        ) : (
          <Loading />
        )}
      </View>
    </ScrollView>
  );
}
