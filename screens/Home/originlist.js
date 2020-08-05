import React from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Loading from "../../components/shared/loading";
import Origin from "../../components/OriginList/origins";

export default function OriginTiers({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { origins } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
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

const styles = StyleSheet.create({
  page: {
    width: Dimensions.get("window").width,
    height: "100%",
    backgroundColor: "#123040",
  },
});
