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
        activeTintColor: "#fff",
        inactiveTintColor: "#88a0a7",
        activeBackgroundColor: "#34495E",
        inactiveBackgroundColor: "#34495E",
        labelStyle: {
          fontSize: 12,
          fontFamily: "RobotoBold",
          letterSpacing: 1,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={20}
              color={focused ? "#fff" : "#88a0a7"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PatchNotes"
        component={PatchNotes}
        options={{
          tabBarLabel: "Patch Notes",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="scroll"
              size={20}
              color={focused ? "#fff" : "#88a0a7"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CompBuilder"
        component={CompBuilder}
        options={{
          tabBarLabel: "Team Builder",
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="persons"
              size={20}
              color={focused ? "#fff" : "#88a0a7"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ItemBuilder"
        component={ItemBuilder}
        options={{
          tabBarLabel: "Item Builder",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="sword"
              size={20}
              color={focused ? "#fff" : "#88a0a7"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
