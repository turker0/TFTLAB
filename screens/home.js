import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import TeamComps from "./teamcomps";
import ChampTier from "./champtier";
import ItemTier from "./itemtier";
import ClassTier from "./classtier";
import OriginTier from "./origintier";

export default function Welcome() {
  const refScrollView = useRef(null);
  const refBorder = useRef(null);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.titleWrapper}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.title}>TFTLAB</Text>
      </View>
      <View style={styles.navbarWrapper}>
        <Text
          style={styles.navbarTitle}
          onPress={() => {
            refScrollView.current?.scrollTo({
              x: 0,
              animated: true,
            });
            refBorder.current.setNativeProps({
              style: {
                left: 0,
              },
            });
          }}
        >
          Comps
        </Text>

        <Text
          style={styles.navbarTitle}
          onPress={() => {
            refScrollView.current?.scrollTo({
              x: Dimensions.get("window").width,
              animated: true,
            });
            refBorder.current.setNativeProps({
              style: {
                left: Dimensions.get("window").width * 0.18,
              },
            });
          }}
        >
          Champs
        </Text>
        <Text
          style={styles.navbarTitle}
          onPress={() => {
            refScrollView.current?.scrollTo({
              x: Dimensions.get("window").width * 2,
              animated: true,
            });
            refBorder.current.setNativeProps({
              style: {
                left: Dimensions.get("window").width * 0.36,
              },
            });
          }}
        >
          Items
        </Text>
        <Text
          style={styles.navbarTitle}
          onPress={() => {
            refScrollView.current?.scrollTo({
              x: Dimensions.get("window").width * 3,
              animated: true,
            });
            refBorder.current.setNativeProps({
              style: {
                left: Dimensions.get("window").width * 0.54,
              },
            });
          }}
        >
          Classes
        </Text>
        <Text
          style={styles.navbarTitle}
          onPress={() => {
            refScrollView.current?.scrollTo({
              x: Dimensions.get("window").width * 4,
              animated: true,
            });
            refBorder.current.setNativeProps({
              style: {
                left: Dimensions.get("window").width * 0.72,
              },
            });
          }}
        >
          Origins
        </Text>
        <View style={styles.border} ref={refBorder}></View>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        pagingEnabled={true}
        onMomentumScrollEnd={(event) => {
          refBorder.current.setNativeProps({
            style: {
              left:
                ((Dimensions.get("window").width * 0.9) / 5) *
                (event.nativeEvent.contentOffset.x /
                  Dimensions.get("window").width),
            },
          });
        }}
        ref={refScrollView}
      >
        <TeamComps />
        <ChampTier />
        <ItemTier />
        <ClassTier />
        <OriginTier />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    backgroundColor: "#102531",
  },
  titleWrapper: {
    paddingVertical: 20,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: "RobotoBlack",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -0.75, height: 0 },
    textShadowRadius: 5,
    letterSpacing: 3,
  },
  navbarWrapper: {
    flexDirection: "row",
    width: "90%",
    height: 25,
    backgroundColor: "#123040",
    elevation: 5,
    position: "relative",
  },
  navbarTitle: {
    fontSize: 14,
    fontFamily: "RobotoBold",
    width: (Dimensions.get("window").width * 0.9) / 5,
    height: 25,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#F2F6F7",
  },
  border: {
    width: (Dimensions.get("window").width * 0.9) / 5,
    height: 2,
    backgroundColor: "#88a0a7",
    elevation: 6,
    left: 0,
    top: 23,
    position: "absolute",
  },
  pageTitle: {
    fontSize: 24,
    fontFamily: "RobotoBold",
    color: "#fff",
  },
  page: {
    width: Dimensions.get("window").width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    margin: Dimensions.get("window").width * 0.03,
  },
  cardWrapper: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
