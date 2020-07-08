import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PatchNotes from "../screens/patchnotes";
import ItemBuilder from "../screens/itembuilder";
import CompBuilder from "../screens/compbuilder";
import Home from "../screens/home";

const Tab = createBottomTabNavigator();

export default function HomeRoute() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="PatchNotes" component={PatchNotes} />
      <Tab.Screen name="CompBuilder" component={CompBuilder} />
      <Tab.Screen name="ItemBuilder" component={ItemBuilder} />
    </Tab.Navigator>
  );
}
