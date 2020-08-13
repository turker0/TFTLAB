import React from "react";
import { View, StatusBar } from "react-native";
import Comp from "../../components/CompList/comps";
import Loading from "../../components/shared/loading";
import { ScrollView } from "react-native-gesture-handler";
import { pageTheme } from "../../styles/page";
import { global } from "../../styles/global";

export default function CompList({ route }) {
  const { navigation } = route.params;
  const { list } = route.params;
  const { champions } = route.params;
  return navigation != undefined &&
    list != undefined &&
    champions != undefined ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar
        backgroundColor={global.statusBar.backgroundColor}
        barStyle="dark-content"
      />
      <View style={pageTheme.page}>
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
  ) : null;
}
