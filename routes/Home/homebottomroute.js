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

export default function HomeRoute({ database }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      lazy={false}
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
        initialParams={{
          database: database,
        }}
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
        name="CompBuilder"
        component={CompBuilder}
        initialParams={{
          champions: database.champions,
        }}
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
        initialParams={{
          champions: database.champions.sort((first, second) => {
            return first.name.localeCompare(second.name);
          }),
          clas: database.classes,
          items: database.items,
          origins: database.origins,
        }}
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
      <Tab.Screen
        name="PatchNotes"
        component={PatchNotes}
        initialParams={{
          notes: database.patchNotes.sort((first, second) => {
            return second.version.localeCompare(first.version);
          }),
        }}
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
    </Tab.Navigator>
  );
}
