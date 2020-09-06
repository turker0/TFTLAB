import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CompList from "../../screens/Home/complist";
import ChampList from "../../screens/Home/champlist";
import ItemList from "../../screens/Home/itemlist";
import ClassList from "../../screens/Home/classlist";
import OriginList from "../../screens/Home/originlist";
import { routeTheme } from "../../styles/route";

const Tab = createMaterialTopTabNavigator();

export default function HomeTopRoute({ navigation, database }) {
  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="CompList"
      swipeEnabled={false}
      tabBarOptions={{
        activeTintColor: routeTheme.focusedButton.color,
        inactiveTintColor: routeTheme.noFocusedButton.color,
        scrollEnabled: true,
        pressColor: routeTheme.noFocusedButton.color,
        pressOpacity: routeTheme.pressColor.opacity,
        tabStyle: routeTheme.tabStyle,
        labelStyle: routeTheme.labelStyle,
        style: routeTheme.bar,
        indicatorStyle: routeTheme.indicatorStyle,
      }}
    >
      <Tab.Screen
        name="Comps"
        component={CompList}
        initialParams={{
          navigation: navigation,
          list: database.compList.sort((first, second) => {
            if (first.tier[0] === "S") {
              return -1;
            } else if (second.tier[0] === "S") {
              return 1;
            } else {
              return first.tier.localeCompare(second.tier);
            }
          }),
          champions: database.champions,
        }}
      />
      <Tab.Screen
        name="Champs"
        component={ChampList}
        initialParams={{
          navigation: navigation,
          list: database.champList.sort((first, second) => {
            if (first.tier[0] === "S") {
              return -1;
            } else if (second.tier[0] === "S") {
              return 1;
            } else {
              return first.tier.localeCompare(second.tier);
            }
          }),
          champions: database.champions,
        }}
      />
      <Tab.Screen
        name="Items"
        component={ItemList}
        initialParams={{
          navigation: navigation,
          list: database.itemList.sort((first, second) => {
            if (first.tier[0] === "S") {
              return -1;
            } else if (second.tier[0] === "S") {
              return 1;
            } else {
              return first.tier.localeCompare(second.tier);
            }
          }),
          items: database.items,
        }}
      />
      <Tab.Screen
        name="Classes"
        component={ClassList}
        initialParams={{
          navigation: navigation,
          list: database.classList.sort((first, second) => {
            if (first.tier[0] === "S") {
              return -1;
            } else if (second.tier[0] === "S") {
              return 1;
            } else {
              return first.tier.localeCompare(second.tier);
            }
          }),
          classes: database.classes,
          champions: database.champions,
        }}
      />
      <Tab.Screen
        name="Origins"
        component={OriginList}
        initialParams={{
          navigation: navigation,
          list: database.originList.sort((first, second) => {
            if (first.tier[0] === "S") {
              return -1;
            } else if (second.tier[0] === "S") {
              return 1;
            } else {
              return first.tier.localeCompare(second.tier);
            }
          }),
          origins: database.origins,
          champions: database.champions,
        }}
      />
    </Tab.Navigator>
  );
}
