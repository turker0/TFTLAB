import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChampionDB from "../../screens/Database/championdb";
import ItemDB from "../../screens/Database/itemdb";
import ClassDB from "../../screens/Database/classdb";
import OriginDB from "../../screens/Database/origindb";
import Loading from "../../components/shared/loading";
import { routeTheme } from "../../styles/route";

const Tab = createMaterialTopTabNavigator();

const getDB = async (
  setChampions,
  setItems,
  setClass,
  setOrigin,
  setIsFetched
) => {
  //GET STATICS
  //GET CHAMPIONS
  fetch("https://tftlab.herokuapp.com/api/static/champions", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setChampions(resJson);
    })
    .catch((error) => console.error(error));

  //GET CLASSES
  fetch("https://tftlab.herokuapp.com/api/static/classes", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setClass(resJson);
    })
    .catch((error) => console.error(error));

  //GET ITEMS
  fetch("https://tftlab.herokuapp.com/api/static/items", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setItems(resJson);
    })
    .catch((error) => console.error(error));

  //GET ITEMS
  fetch("https://tftlab.herokuapp.com/api/static/origins", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setOrigin(resJson);
    })
    .catch((error) => console.error(error));

  setIsFetched(true);
};

export default function DatabaseTopRoute({ navigation }) {
  const [champions, setChampions] = useState(0);
  const [items, setItems] = useState(0);
  const [clas, setClass] = useState(0);
  const [origins, setOrigin] = useState(0);
  const [isFetched, setIsFetched] = useState(0);

  useEffect(() => {
    if (!isFetched) {
      getDB(setChampions, setItems, setClass, setOrigin, setIsFetched);
    }
  });

  return champions != 0 && items != 0 && clas != 0 && origins != 0 ? (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="CompList"
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
          tabBarLabel: "Champions",
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
    </Tab.Navigator>
  ) : (
    <Loading />
  );
}
