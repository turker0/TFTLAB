import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PatchNotes from "../screens/patchnotes";
import ItemBuilder from "../screens/itembuilder";
import CompBuilder from "../screens/compbuilder";
import Home from "../screens/home";

const Tab = createBottomTabNavigator();

export default function HomeRoute() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: "#fff",
        activeTintColor: "#fff",
        activeBackgroundColor: "#123040",
        inactiveBackgroundColor: "#34495E",
        style: {
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({}) => <Feather name="home" size={18} color="#fff" />,
        }}
      />
      <Tab.Screen
        name="PatchNotes"
        component={PatchNotes}
        options={{
          tabBarLabel: "Patch Notes",
          tabBarIcon: ({}) => (
            <FontAwesome5 name="scroll" size={18} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="CompBuilder"
        component={CompBuilder}
        options={{
          tabBarLabel: "Team Builder",
          tabBarIcon: ({}) => (
            <Fontisto name="persons" size={18} color="#fff" />
          ),
        }}
      />
      <Tab.Screen
        name="ItemBuilder"
        component={ItemBuilder}
        options={{
          tabBarLabel: "Item Builder",
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="sword" size={18} color="#fff" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
