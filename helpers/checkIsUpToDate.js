import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeBottomRoute from "../routes/Home/homebottomroute";
import AsyncStorage from "@react-native-community/async-storage";
import Updater from "../screens/Updater/updater";

const readFile = async (key) => {
  try {
    const file = await AsyncStorage.getItem(key).then((name) => {});
    return JSON.parse(file);
  } catch (e) {
    console.log(e);
  }
};

const writeFile = async (key, value) => {
  try {
    const file = JSON.stringify(value);
    await AsyncStorage.setItem(key, value).then((name) => {});
  } catch (e) {
    console.log(e);
  }
};

const checkIsUpToDate = () => {
  const [db, setDb] = useState(0);

  const currentDate = {
    yaer: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  useEffect(() => {
    const lastExecuteDate = readFile("@last");
    let isUpToDate;

    if (lastExecuteDate != null) {
      let updateDate;

      fetch("https://tftlab.herokuapp.com/api/dynamic/update", {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((resJson) => {
          updateDate = resJson;
        })
        .catch((error) => console.error(error));

      isUpToDate =
        lastExecuteDate.year > updateDate.year
          ? true
          : lastExecuteDate.month > updateDate.month
          ? true
          : lastExecuteDate.day > updateDate.day
          ? true
          : false;

      if (isUpToDate) {
        //LOCALDAN DB YI OKU
        //CALISTIR

        setDb(readFile("@database"));
      } else {
        //GUNCELLE
        //CALISTIR
      }
    } else {
      //GUNCELLE
      //CALISTIR
    }
    writeFile("@last", currentDate);
  }, []);

  return db == 0 ? (
    <NavigationContainer>
      <HomeBottomRoute database={db} />
    </NavigationContainer>
  ) : (
    <Updater />
  );
};

export default checkIsUpToDate;
