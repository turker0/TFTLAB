import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import HomeBottomRoute from "./routes/Home/homebottomroute";
import AsyncStorage from "@react-native-community/async-storage";
import Updater from "./screens/Updater/updater";

const readFile = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const writeFile = async (key, value) => {
  try {
    const file = JSON.stringify(value);
    await AsyncStorage.setItem(key, file).then(() => {
      console.log("saved");
    });
  } catch (e) {
    console.log(e);
  }
};

const App = () => {
  const [loaded, error] = useFonts({
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  const [db, setDb] = useState(0);
  const [isUpToDate, setIsUpToDate] = useState(0);
  const [lastExecuteDate, setLastExecuteDate] = useState(0);

  const currentDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  useEffect(() => {
    readFile("@last")
      .then((res) => {
        setLastExecuteDate(res);
      })
      .then((resJson) => {
        console.log("777", resJson);
      })
      .catch((e) => console.log(e));

    if (lastExecuteDate != null) {
      fetch("https://tftlab.herokuapp.com/api/dynamic/update", {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((resJson) => {
          setIsUpToDate(
            lastExecuteDate.year > resJson[0].year
              ? true
              : lastExecuteDate.month > resJson[0].month
              ? true
              : lastExecuteDate.day > resJson[0].day
              ? true
              : false
          );
        })
        .catch((error) => console.error(error));

      console.log("113", isUpToDate);

      if (isUpToDate) {
        //LOCALDAN DB YI OKU
        //CALISTIR
        console.log("guncel");

        setDb(readFile("@database"));
      } else {
        //GUNCELLE
        //CALISTIR
        console.log("Guncel degil1");
        setIsUpToDate(false);
      }
    } else {
      //GUNCELLE
      //CALISTIR
      console.log("Guncel degil2");
      setIsUpToDate(false);
    }
    writeFile("@last", currentDate);
  }, []);

  if (!loaded) {
    return <AppLoading />;
  } else {
    return isUpToDate ? (
      <NavigationContainer>
        <HomeBottomRoute database={db} />
      </NavigationContainer>
    ) : (
      <Updater />
    );
  }
};

export default App;
