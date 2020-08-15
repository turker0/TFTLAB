import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "../../screens/home";
import ChampPage from "../../screens/Home/pages/champage";
import CompPage from "../../screens/Home/pages/comppage";
import ItemPage from "../../screens/Home/pages/itempage";
import TraitPage from "../../screens/Home/pages/traitpage";
import { routeTheme } from "../../styles/route";

const Stack = createStackNavigator();

const ChampRoute = ({ route, navigation }) => {
  const { database } = route.params;

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: routeTheme.focusedButton.color,
        headerStyle: {
          backgroundColor: routeTheme.barBG,
        },
        headerTitleStyle: routeTheme.labelStyle,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{
          database: database,
        }}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChampPage"
        component={ChampPage}
        options={{
          title: "Champion Page",
        }}
      />
      <Stack.Screen
        name="CompPage"
        component={CompPage}
        options={{
          title: "Team Comp Page",
        }}
      />
      <Stack.Screen
        name="ItemPage"
        component={ItemPage}
        options={{
          title: "Item Page",
        }}
      />
      <Stack.Screen
        name="TraitPage"
        component={TraitPage}
        options={{
          title: "Trait Page",
        }}
      />
    </Stack.Navigator>
  );
};

export default ChampRoute;
