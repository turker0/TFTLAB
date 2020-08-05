import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Comp from "../../components/CompList/comps";
import Loading from "../../components/shared/loading";
import { ScrollView } from "react-native-gesture-handler";

export default function CompList({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { champions } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <View style={styles.page}>
        {list != 0 && champions != 0 ? (
          list.map((item, index) => (
            <Comp
              list={item}
              navigation={navigation}
              champions={champions}
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
    width: "100%",
    backgroundColor: "transparent",
    padding: 10,
  },
});
