import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TeamComp from "../../screens/Home/teamcomps";
import ChampTier from "../../screens/Home/champtier";
import ItemTier from "../../screens/Home/itemtier";
import ClassTier from "../../screens/Home/classtier";
import OriginTier from "../../screens/Home/origintier";
import { Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";
import { TabBarItem } from "react-native-tab-view";

const Tab = createMaterialTopTabNavigator();

export default function HomeTopRoute() {
  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="Comps"
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#88a0a7",
        pressColor: "#88a0a7",
        pressOpacity: 0.5,
        tabStyle: {
          width: Dimensions.get("window").width / 5,
          marginTop: -5,
          justifyContent: "center",
          height: 50,
          elevation: 5,
        },
        labelStyle: {
          fontSize: 12,
          textTransform: "capitalize",
          fontFamily: "RobotoBlack",
          letterSpacing: 0.5,
        },
        style: {
          marginTop: 25,
          backgroundColor: "#102531",
        },
        indicatorStyle: {
          height: 1.6,
          backgroundColor: "#f48024",
        },
      }}
    >
      <Tab.Screen name="Comps" component={TeamComp} />
      <Tab.Screen name="Champs" component={ChampTier} />
      <Tab.Screen name="Items" component={ItemTier} />
      <Tab.Screen name="Classes" component={ClassTier} />
      <Tab.Screen name="Origins" component={OriginTier} />
    </Tab.Navigator>
  );
}
