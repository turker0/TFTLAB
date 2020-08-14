import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChampionDB from "../../screens/Database/championdb";
import ItemDB from "../../screens/Database/itemdb";
import ClassDB from "../../screens/Database/classdb";
import OriginDB from "../../screens/Database/origindb";
import { routeTheme } from "../../styles/route";
import Rolling from "../../screens/Database/rolling";

const Tab = createMaterialTopTabNavigator();

export default function DatabaseTopRoute({ navigation, route }) {
  const { champions, items, clas, origins } = route.params;

  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="ChampionDB"
      swipeEnabled={true}
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
        name="ChampionDB"
        component={ChampionDB}
        options={{
          tabBarLabel: "Champs",
        }}
        initialParams={{
          navigation: navigation,
          champions: champions,
        }}
      />
      <Tab.Screen
        name="ItemDB"
        component={ItemDB}
        options={{
          tabBarLabel: "Items",
        }}
        initialParams={{
          navigation: navigation,
          items: items,
        }}
      />
      <Tab.Screen
        name="ClassDB"
        component={ClassDB}
        options={{
          tabBarLabel: "Classes",
        }}
        initialParams={{
          navigation: navigation,
          classes: clas,
        }}
      />
      <Tab.Screen
        name="OriginDB"
        component={OriginDB}
        options={{
          tabBarLabel: "Origins",
        }}
        initialParams={{
          navigation: navigation,
          origins: origins,
        }}
      />
      <Tab.Screen
        name="Rolling"
        component={Rolling}
        options={{
          tabBarLabel: "Rolling",
        }}
      />
    </Tab.Navigator>
  );
}
