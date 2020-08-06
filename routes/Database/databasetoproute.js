import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChampionDB from "../../screens/Database/championdb";
import ItemDB from "../../screens/Database/itemdb";
import ClassDB from "../../screens/Database/classdb";
import OriginDB from "../../screens/Database/origindb";

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
  fetch("http://192.168.1.5:3000/api/static/champions", {
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
  fetch("http://192.168.1.5:3000/api/static/classes", {
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
  fetch("http://192.168.1.5:3000/api/static/items", {
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
  fetch("http://192.168.1.5:3000/api/static/origins", {
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
      swipeEnabled={false}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#88a0a7",
        scrollEnabled: true,
        pressColor: "#88a0a7",
        pressOpacity: 0.5,
        tabStyle: {
          width: 100,
          marginTop: -5,
          justifyContent: "center",
          elevation: 5,
        },
        labelStyle: {
          fontSize: 18,
          textTransform: "capitalize",
          fontFamily: "RobotoBold",
        },
        style: {
          backgroundColor: "#102531",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        },
        indicatorStyle: {
          height: 1.6,
          backgroundColor: "#f48024",
        },
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
  ) : null;
}
