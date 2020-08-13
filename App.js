import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import HomeBottomRoute from "./routes/Home/homebottomroute";
import AsyncStorage from "@react-native-community/async-storage";
import Updater from "./screens/Updater/updater";
import Loader from "./screens/Loader/loader";
import { global } from "./styles/global";

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: global.theme.backgroundColor,
  },
};

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
    await AsyncStorage.setItem(key, file).then(() => {});
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
  const [isResolved, setIsResolved] = useState(0);

  const currentDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  useEffect(() => {
    readFile("@last")
      .then((lastExecuteDate) => {
        if (lastExecuteDate != null) {
          fetch("https://tftlab.herokuapp.com/api/dynamic/update", {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((resJson) => {
              let tempUp2Date =
                lastExecuteDate.year > resJson[0].year
                  ? true
                  : lastExecuteDate.month > resJson[0].month
                  ? true
                  : lastExecuteDate.day > resJson[0].day
                  ? true
                  : false;
              setIsUpToDate(tempUp2Date);

              if (tempUp2Date) {
                //LOCALDAN DB YI OKU
                //CALISTIR
                console.log("guncel");
                let tmpDB = readFile("@database");
                tmpDB.then((el) => {
                  setDb(el);
                  setIsResolved(true);
                });
              } else {
                //GUNCELLE
                //CALISTIR
                console.log(
                  "Guncel degil1",
                  isUpToDate,
                  lastExecuteDate,
                  resJson[0]
                );
                setIsUpToDate(false);
                setIsResolved(true);
              }
            })
            .catch((error) => console.error(error));
        } else {
          //GUNCELLE
          //CALISTIR
          console.log("Guncel degil2");
          setIsUpToDate(false);
        }
        writeFile("@last", currentDate);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!loaded) {
    return <AppLoading />;
  } else {
    return isResolved ? (
      isUpToDate && db ? (
        <NavigationContainer theme={MyTheme}>
          <HomeBottomRoute database={db} />
        </NavigationContainer>
      ) : (
        <Updater />
      )
    ) : (
      <Loader />
    );
  }
};

export default App;
