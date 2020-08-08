import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import PatchNotes from "../../screens/PatchNotes/patchnotes";
import CompBuilder from "../../screens/Builder/compbuilder";
import Home from "./homedbroute";
import Database from "../Database/databasetoproute";
import { routeTheme } from "../../styles/route";

const Tab = createBottomTabNavigator();

export default function HomeRoute() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: routeTheme.barBG.backgroundColor,
        inactiveBackgroundColor: routeTheme.barBG.backgroundColor,
        style: routeTheme.bar,
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
              color={
                focused
                  ? routeTheme.focusedButton.color
                  : routeTheme.noFocusedButton.color
              }
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
              color={
                focused
                  ? routeTheme.focusedButton.color
                  : routeTheme.noFocusedButton.color
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="CompBuilder"
        component={CompBuilder}
        options={{
          tabBarLabel: "Comp Builder",
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="persons"
              size={20}
              color={
                focused
                  ? routeTheme.focusedButton.color
                  : routeTheme.noFocusedButton.color
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Database"
        component={Database}
        options={{
          tabBarLabel: "Database",
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="database"
              size={20}
              color={
                focused
                  ? routeTheme.focusedButton.color
                  : routeTheme.noFocusedButton.color
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
