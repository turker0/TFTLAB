import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CompList from "../../screens/Home/complist";
import ChampList from "../../screens/Home/champlist";
import ItemList from "../../screens/Home/itemlist";
import ClassList from "../../screens/Home/classlist";
import OriginList from "../../screens/Home/originlist";
import Loading from "../../components/shared/loading";
import { routeTheme } from "../../styles/route";

const Tab = createMaterialTopTabNavigator();

const getDB = async (
  setChamplist,
  setClasslist,
  setComplist,
  setItemlist,
  setOriginlist,
  setChampions,
  setItems,
  setClass,
  setOrigin,
  setIsFetched
) => {
  //GET DYNAMICS
  //GET CHAMPLIST
  fetch("https://tftlab.herokuapp.com/api/dynamic/champlists", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Accept: "application/json, text/plain, */*", // It can be used to overcome cors errors
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setChamplist(resJson);
    })
    .catch((error) => console.error(error));

  //GET CLASSLIST
  fetch("https://tftlab.herokuapp.com/api/dynamic/classlists", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setClasslist(resJson);
    })
    .catch((error) => console.error(error));

  //GET COMPLIST
  fetch("https://tftlab.herokuapp.com/api/dynamic/complists", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setComplist(resJson);
    })
    .catch((error) => console.error(error));

  //GET ITEMLIST
  fetch("https://tftlab.herokuapp.com/api/dynamic/itemlists", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setItemlist(resJson);
    })
    .catch((error) => console.error(error));

  //GET ORIGINLIST
  fetch("https://tftlab.herokuapp.com/api/dynamic/originlists", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setOriginlist(resJson);
    })
    .catch((error) => console.error(error));

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

export default function HomeTopRoute({ navigation }) {
  const [champlist, setChamplist] = useState(0);
  const [classlist, setClasslist] = useState(0);
  const [complist, setComplist] = useState(0);
  const [itemlist, setItemlist] = useState(0);
  const [originlist, setOriginlist] = useState(0);
  const [champions, setChampions] = useState(0);
  const [items, setItems] = useState(0);
  const [clas, setClass] = useState(0);
  const [origins, setOrigin] = useState(0);
  const [isFetched, setIsFetched] = useState(0);

  useEffect(() => {
    if (!isFetched) {
      getDB(
        setChamplist,
        setClasslist,
        setComplist,
        setItemlist,
        setOriginlist,
        setChampions,
        setItems,
        setClass,
        setOrigin,
        setIsFetched
      );
    }
  });
  return champlist != 0 &&
    classlist != 0 &&
    complist != 0 &&
    itemlist != 0 &&
    originlist != 0 &&
    champions != 0 &&
    items != 0 &&
    clas != 0 &&
    origins != 0 ? (
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
          list: complist,
          champions: champions,
        }}
      />
      <Tab.Screen
        name="Champs"
        component={ChampList}
        initialParams={{
          navigation: navigation,
          list: champlist,
          champions: champions,
        }}
      />
      <Tab.Screen
        name="Items"
        component={ItemList}
        initialParams={{
          navigation: navigation,
          list: itemlist,
          items: items,
        }}
      />
      <Tab.Screen
        name="Classes"
        component={ClassList}
        initialParams={{
          navigation: navigation,
          list: classlist,
          classes: clas,
          champions: champions,
        }}
      />
      <Tab.Screen
        name="Origins"
        component={OriginList}
        initialParams={{
          navigation: navigation,
          list: originlist,
          origins: origins,
          champions: champions,
        }}
      />
    </Tab.Navigator>
  ) : (
    <Loading />
  );
}
