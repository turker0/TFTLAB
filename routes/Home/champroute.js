import React from "react";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
import ChampPage from "../../screens/Home/champage";
import HeaderBG from "../../components/shared/headerbg";

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
          title: route.params.name,
          headerTitleStyle: {
            fontFamily: "RobotoBold",
            fontSize: 24,
            color: "#fff",
            marginLeft: -20,
          },
          headerBackground: () => (
            <HeaderBG tint="light" name={route.params.name} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default ChampRoute;

const styles = StyleSheet.create({});
