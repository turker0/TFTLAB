import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  ImageBackground,
} from "react-native";
import Loading from "../../components/shared/loading";
import avatars from "../../assets/avatars/avatars";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import getCompTraits from "../../helpers/getCompTraits";
import origins from "../../assets/origins/origins";
import classes from "../../assets/classes/classes";
import { AntDesign } from "@expo/vector-icons";

const getChampions = async (setChampions, setIsFetched) => {
  fetch("http://192.168.1.5:3000/api/static/champions", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Accept: "application/json, text/plain, */*", // It can be used to overcome cors errors
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setChampions(resJson);
    })
    .catch((error) => console.error(error));
  setIsFetched(true);
};

const CompBuilder = () => {
  const [champions, setChampions] = useState(0);
  const [isFetched, setIsFetched] = useState(false);
  const [comp, setComp] = useState([]);
  const [traits, setTraits] = useState(0);
  const [isShrunk, setIsShrunk] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!isFetched) {
      getChampions(setChampions, setIsFetched);
    }
  });

  const headerPadding = new Animated.Value(100);

  const height = new Animated.Value(90);

  const animateChamps = () => {
    Animated.timing(headerPadding, {
      toValue: isShrunk ? 0 : 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(height, {
      toValue: isShrunk ? 325 : 90,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      !isShrunk
        ? scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true })
        : null;
      setIsShrunk(!isShrunk);
    });
  };

  let compComponent = [];

  for (let i = 0; i < 10; i++) {
    compComponent.push(
      <TouchableOpacity
        onPress={() => {
          comp.length > 0 && comp[i] != undefined
            ? [
                setComp(
                  comp.filter((item) => {
                    return item != comp[i];
                  })
                ),
                setTraits(getCompTraits(comp)),
              ]
            : null;
        }}
        key={i}
      >
        <View
          style={[
            styles.compComponent,
            {
              backgroundColor:
                comp[i] != undefined ? getChampBorderColor(comp[i]) : "#1B475F",
            },
          ]}
        >
          <Image
            style={
              comp[i] != undefined
                ? styles.compAvatar
                : { width: 16, height: 16 }
            }
            source={
              comp[i] != undefined
                ? avatars[comp[i]]
                : require("../../assets/builder/plus.png")
            }
          />
        </View>
      </TouchableOpacity>
    );
  }

  return champions != 0 ? (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
        <Animated.View style={{ paddingVertical: headerPadding }}>
          <Text style={styles.title}>Team Comp Builder</Text>
          <View style={styles.compWrapper}>{compComponent}</View>

          {comp.length >= 1 ? (
            <View style={styles.section}>
              <Text style={[styles.header, { textAlign: "center" }]}>
                {comp.length}/10
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setComp([]);
                }}
              >
                <Text
                  style={[
                    styles.traitCount,
                    {
                      textAlign: "center",
                      alignSelf: "center",
                      color: "#fff",
                      backgroundColor: "#1B475F",
                      paddingHorizontal: 20,
                      paddingVertical: 5,
                      borderRadius: 4,
                    },
                  ]}
                >
                  reset
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}

          <View style={styles.section}>
            <Text style={styles.header}>Bonus</Text>
            {traits.traits != undefined ? (
              traits.traits.map((item, index) =>
                traits.details[index] != 0 ? (
                  <View key={index} style={styles.traitsWrapper}>
                    <Image
                      style={styles.trait}
                      source={
                        origins[item] != undefined
                          ? origins[item]
                          : classes[item]
                      }
                    />
                    <Text
                      style={[
                        styles.traitCount,
                        { color: traits.colors[index] },
                      ]}
                    >
                      ({traits.counts[index]})
                    </Text>

                    <Text style={styles.traitDetail}>
                      {traits.details[index]}
                    </Text>
                  </View>
                ) : null
              )
            ) : (
              <Text style={styles.traitDetail}>No bonus earned yet.</Text>
            )}
          </View>
        </Animated.View>
      </ScrollView>

      <Animated.View style={{ height: height, position: "relative" }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <View style={styles.upDownButton}>
            <TouchableOpacity
              onPress={() => {
                animateChamps();
              }}
            >
              <AntDesign
                name={isShrunk ? "up" : "down"}
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.compBuilderWrapper}>
            {champions.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  comp.length < 10 && !comp.includes(item.name)
                    ? [
                        setComp([...comp, item.name]),
                        setTraits(getCompTraits(comp)),
                      ]
                    : null;
                }}
              >
                <View
                  style={[
                    styles.avatarWrapper,
                    {
                      backgroundColor: !comp.includes(item.name)
                        ? getChampBorderColor(item.name)
                        : "#123040",
                    },
                  ]}
                >
                  <ImageBackground
                    style={styles.avatar}
                    source={avatars[item.name]}
                    imageStyle={{ opacity: comp.includes(item.name) ? 0.5 : 1 }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  ) : (
    <Loading />
  );
};

export default CompBuilder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  compWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: "RobotoBold",
    color: "#E8ECEE",
    textTransform: "capitalize",
    margin: 10,
  },
  compComponent: {
    width: Dimensions.get("window").width / 5 - 10,
    height: Dimensions.get("window").width / 5 - 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    margin: 5,
    borderRadius: 4,
  },
  compAvatar: {
    width: Dimensions.get("window").width / 5 - 15,
    height: Dimensions.get("window").width / 5 - 15,
    borderRadius: 4,
  },
  traitsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  trait: {
    width: 32,
    height: 32,
  },
  traitCount: {
    fontSize: 16,
    fontFamily: "RobotoBold",
    textTransform: "capitalize",
    marginHorizontal: 10,
  },
  traitDetail: {
    fontSize: 14,
    fontFamily: "RobotoRegular",
    color: "#B9C7CB",
    width: Dimensions.get("window").width * 0.75,
  },
  section: {
    marginVertical: 20,
    padding: 10,
  },
  header: {
    fontSize: 28,
    fontFamily: "RobotoBold",
    color: "#E8ECEE",
    textTransform: "capitalize",
    marginVertical: 10,
  },
  upDownButton: {
    position: "absolute",
    left: (Dimensions.get("window").width - 25) / 2,
    top: 0,
    width: 25,
    height: 25,
  },
  compBuilderWrapper: {
    alignSelf: "flex-end",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 25,
  },
  avatarWrapper: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 4,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 4,
  },
});
