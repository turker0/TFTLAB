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

const Stack = createStackNavigator();

const ChampRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#102531",
        },
        headerTitleStyle: {
          fontFamily: "RobotoBold",
          fontSize: 24,
          color: "#fff",
          marginLeft: -20,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ChampPage" component={ChampPage} />
      <Stack.Screen name="CompPage" component={CompPage} />
      <Stack.Screen name="ItemPage" component={ItemPage} />
      <Stack.Screen name="TraitPage" component={TraitPage} />
    </Stack.Navigator>
  );
};

export default ChampRoute;
