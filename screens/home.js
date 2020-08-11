import React from "react";
import HomeTopRoute from "../routes/Home/hometoproute";

export default function Welcome({ navigation, route }) {
  const { database } = route.params;
  return <HomeTopRoute navigation={navigation} database={database} />;
}
