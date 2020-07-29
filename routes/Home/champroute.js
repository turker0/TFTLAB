import React from "react";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
import ChampPage from "../../screens/Home/champage";
import CompPage from "../../screens/Home/comppage";

const Stack = createStackNavigator();

const ChampRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChampPage"
        component={ChampPage}
        options={({ route }) => ({
          title: null,
          headerTitleStyle: {
            fontFamily: "RobotoBold",
            fontSize: 24,
            color: "#fff",
            marginLeft: -20,
          },
        })}
      />
      <Stack.Screen
        name="CompPage"
        component={CompPage}
        options={({ route }) => ({
          title: null,
          headerTitleStyle: {
            fontFamily: "RobotoBold",
            fontSize: 24,
            color: "#fff",
            marginLeft: -20,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default ChampRoute;

const styles = StyleSheet.create({});
