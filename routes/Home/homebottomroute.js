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

//import db json files
//import statics
import champions from "../../db/static/champions.json";
import classes from "../../db/static/classes.json";
import items from "../../db/static/items.json";
import origins from "../../db/static/origins.json";

//import dynamics
import champList from "../../db/dynamic/champlist.json";
import classList from "../../db/dynamic/classlist.json";
import compList from "../../db/dynamic/complist.json";
import itemList from "../../db/dynamic/itemlist.json";
import originList from "../../db/dynamic/originlist.json";
import patchNotes from "../../db/dynamic/patchnotes.json";

const Tab = createBottomTabNavigator();

export default function HomeRoute({ database }) {
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
        initialParams={{
          database:
            database != undefined
              ? database
              : {
                  champions: champions,
                  classes: classes,
                  items: items,
                  origins: origins,
                  champList: champList,
                  classList: classList,
                  compList: compList,
                  itemList: itemList,
                  originList: originList,
                  patchNotes: patchNotes,
                },
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
          champions: database != undefined ? database.champions : champions,
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
          champions: database != undefined ? database.champions : champions,
          clas: database != undefined ? database.classes : classes,
          items: database != undefined ? database.items : items,
          origins: database != undefined ? database.origins : origins,
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
          notes: database != undefined ? database.patchNotes : patchNotes,
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
