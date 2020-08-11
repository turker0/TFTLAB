import React, { useState, useEffect } from "react";
import { Text, View, Animated, Dimensions, StatusBar } from "react-native";
import { pageTheme } from "../../styles/page";
import { global } from "../../styles/global";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeBottomRoute from "../../routes/Home/homebottomroute";
import { Easing } from "react-native-reanimated";
import Loader from "../../components/Updater/loader";
import storeDb from "../../helpers/storeDb";

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: global.theme.backgroundColor,
  },
};

export default function Updater() {
  const [database, setDatabase] = useState({
    //statics
    champions: 0,
    classes: 0,
    origins: 0,
    items: 0,
    //dynamics
    champList: 0,
    classList: 0,
    compList: 0,
    itemList: 0,
    originList: 0,
    patchNotes: 0,
  });

  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    //GET STATICS
    fetch("https://tftlab.herokuapp.com/api/static/champions", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          champions: resJson,
        }));
      })
      .catch((error) => console.error(error));
    //
    fetch("https://tftlab.herokuapp.com/api/static/classes", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          classes: resJson,
        }));
      })
      .catch((error) => console.error(error));
    //
    fetch("https://tftlab.herokuapp.com/api/static/origins", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          origins: resJson,
        }));
      })
      .catch((error) => console.error(error));
    //
    fetch("https://tftlab.herokuapp.com/api/static/items", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          items: resJson,
        }));
      })
      .catch((error) => console.error(error));

    //GET DYNAMICS
    fetch("https://tftlab.herokuapp.com/api/dynamic/champlists", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          champList: resJson,
        }));
      })
      .catch((error) => console.error(error));
    //
    fetch("https://tftlab.herokuapp.com/api/dynamic/classlists", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          classList: resJson,
        }));
      })
      .catch((error) => console.error(error));
    //
    fetch("https://tftlab.herokuapp.com/api/dynamic/complists", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          compList: resJson,
        }));
      })
      .catch((error) => console.error(error));
    //
    fetch("https://tftlab.herokuapp.com/api/dynamic/itemlists", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          itemList: resJson,
        }));
      })
      .catch((error) => console.error(error));
    //
    fetch("https://tftlab.herokuapp.com/api/dynamic/originlists", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          originList: resJson,
        }));
      })
      .catch((error) => console.error(error));
    //
    fetch("https://tftlab.herokuapp.com/api/dynamic/patchnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        setDatabase((prev) => ({
          ...prev,
          patchNotes: resJson,
        }));
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    database.compList != 0 &&
    database.champions != 0 &&
    database.champList != 0 &&
    database.classes != 0 &&
    database.classList != 0 &&
    database.origins != 0 &&
    database.originList != 0 &&
    database.items != 0 &&
    database.itemList != 0 &&
    database.patchNotes != 0
      ? storeDb(database)
      : null;
  }, [database]);

  const rotate = new Animated.Value(0);
  const rotation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["-35deg", "-10deg"],
  });

  const animateLogo = () => {
    rotate.setValue(0);
    Animated.timing(rotate, {
      toValue: 1,
      duration: 333,
      delay: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(rotate, {
        toValue: 0,
        duration: 333,
        delay: 0,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => animateLogo());
    });
  };

  {
    database.compList != 0 &&
    database.champions != 0 &&
    database.champList != 0 &&
    database.classes != 0 &&
    database.classList != 0 &&
    database.origins != 0 &&
    database.originList != 0 &&
    database.items != 0 &&
    database.itemList != 0 &&
    database.patchNotes != 0
      ? animateLogo()
      : null;

    return !isDone ? (
      <View
        style={[
          pageTheme.page,
          global.theme,
          { alignItems: "center", justifyContent: "flex-end" },
        ]}
      >
        <StatusBar
          backgroundColor={global.statusBar.backgroundColor}
          barStyle="dark-content"
        />
        <View
          style={[
            pageTheme.fdCenter,
            { marginBottom: Dimensions.get("window").height * 0.2 },
          ]}
        >
          <Text style={pageTheme.logoTitle}>TFT</Text>
          <Animated.Image
            style={[
              pageTheme.avatarBig,
              {
                transform: [{ rotate: rotation }],
              },
            ]}
            source={require("../../assets/logo.png")}
          />
        </View>
        <Text style={[pageTheme.regularText, { marginVertical: 25 }]}>
          Oh! It seems new patch comes out.
        </Text>
        <View
          style={{
            marginBottom: Dimensions.get("window").height * 0.08,
            alignItems: "center",
          }}
        >
          {database.compList != 0 &&
          database.champions != 0 &&
          database.champList != 0 &&
          database.classes != 0 &&
          database.classList != 0 &&
          database.origins != 0 &&
          database.originList != 0 &&
          database.items != 0 &&
          database.itemList != 0 &&
          database.patchNotes != 0 ? (
            <Loader setIsDone={setIsDone} />
          ) : null}
          <Text style={[pageTheme.textDetail, { marginTop: 10 }]}>
            updating new patch...
          </Text>
        </View>
      </View>
    ) : (
      <NavigationContainer theme={MyTheme}>
        <HomeBottomRoute database={database} />
      </NavigationContainer>
    );
  }
}
