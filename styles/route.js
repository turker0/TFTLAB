import { StyleSheet } from "react-native";

export const routeTheme = StyleSheet.create({
  bar: {
    height: 50,
    elevation: 5,
    zIndex: 5,
    borderTopWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#102531",
  },
  barBG: {
    backgroundColor: "#102531",
    elevation: 5,
    zIndex: 5,
  },
  focusedButton: {
    color: "#fff",
  },
  noFocusedButton: {
    color: "#88a0a7",
  },
  pressColor: {
    opacity: 0.5,
  },
  tabStyle: {
    width: 100,
    marginTop: -5,
    justifyContent: "center",
    elevation: 5,
    zIndex: 5,
  },
  labelStyle: {
    fontSize: 18,
    textTransform: "capitalize",
    fontFamily: "RobotoBold",
  },
  indicatorStyle: {
    height: 3,
    backgroundColor: "#f48024",
  },
  headerTitleStyle: {
    fontFamily: "RobotoBold",
    fontSize: 24,
    color: "#fff",
    marginLeft: -20,
  },
});
