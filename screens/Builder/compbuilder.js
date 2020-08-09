import React, { useState, useEffect, useRef } from "react";
import {
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
import { pageTheme } from "../../styles/page";
import { Easing } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";

const getChampions = async (setChampions, setIsFetched) => {
  fetch("https://tftlab.herokuapp.com/api/static/champions", {
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
  const [isFetched, setIsFetched] = useState(false);
  const [comp, setComp] = useState([]);
  const [traits, setTraits] = useState(0);
  const [champions, setChampions] = useState(0);
  const [isShrunk, setIsShrunk] = useState(true);
  const topScrollRef = useRef(null);

  useEffect(() => {
    if (!isFetched) {
      getChampions(setChampions, setIsFetched);
    }
  });

  const topHeight = new Animated.Value(Dimensions.get("window").height - 200);

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
            pageTheme.builderChild,
            {
              backgroundColor:
                comp[i] != undefined ? getChampBorderColor(comp[i]) : "#1B475F",
            },
          ]}
        >
          <Image
            style={
              comp[i] != undefined
                ? pageTheme.builderChildAvatar
                : { width: 18, height: 18 }
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
    <View style={pageTheme.centeredFlex}>
      <Animated.View
        style={{
          height: topHeight,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} ref={topScrollRef}>
          <View style={pageTheme.page}>
            <Text style={pageTheme.title}>Team Comp Builder</Text>
            <View style={[pageTheme.flexWrap, pageTheme.centeredFlex]}>
              {compComponent}
            </View>
            {comp.length >= 1 ? (
              <View style={pageTheme.section}>
                <Text style={[pageTheme.header]}>{comp.length}/10</Text>
                <TouchableOpacity
                  onPress={() => {
                    setComp([]);
                    setTraits(0);
                  }}
                >
                  <Text
                    style={[
                      pageTheme.regularText,
                      pageTheme.darkBGSmall,
                      {
                        alignSelf: "flex-start",
                        paddingVertical: 6,
                        paddingHorizontal: 10,
                      },
                    ]}
                  >
                    reset
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}

            <View style={pageTheme.section}>
              <Text style={pageTheme.header}>Bonus</Text>
              {traits.traits != undefined ? (
                traits.traits.map((item, index) =>
                  traits.details[index] != 0 ? (
                    <View key={index} style={pageTheme.fdWrapperAIC}>
                      <Image
                        style={pageTheme.avatarMed}
                        source={
                          origins[item] != undefined
                            ? origins[item]
                            : classes[item]
                        }
                      />
                      <Text
                        style={[
                          pageTheme.regularText,
                          { color: traits.colors[index], marginHorizontal: 10 },
                        ]}
                      >
                        x{traits.counts[index]}
                      </Text>

                      <Text style={pageTheme.regularText}>
                        {traits.details[index]}
                      </Text>
                    </View>
                  ) : null
                )
              ) : (
                <Text style={pageTheme.regularText}>No bonus earned yet.</Text>
              )}
            </View>
            <View style={pageTheme.section}>
              <Text style={pageTheme.header}>All Traits</Text>
              {traits.traits != undefined ? (
                traits.traits.map((item, index) => (
                  <View
                    key={index}
                    style={[pageTheme.fdWrapperAIC, pageTheme.flexWrap]}
                  >
                    <Image
                      style={pageTheme.avatarSmall}
                      source={
                        origins[item] != undefined
                          ? origins[item]
                          : classes[item]
                      }
                    />
                    <Text
                      style={[
                        pageTheme.regularText,
                        {
                          color: traits.colors[index],
                          marginHorizontal: 5,
                        },
                      ]}
                    >
                      x{traits.counts[index]}
                    </Text>
                    <Text
                      style={[
                        pageTheme.regularText,
                        {
                          color: traits.colors[index],
                          textTransform: "capitalize",
                          marginHorizontal: 5,
                        },
                      ]}
                    >
                      {item}:
                    </Text>
                    <Text style={pageTheme.regularText}>
                      {traits.details[index] != 0
                        ? traits.details[index]
                        : "No bonus earned yet."}
                    </Text>
                  </View>
                ))
              ) : (
                <Text style={pageTheme.regularText}>
                  Select champion to build a team comp.
                </Text>
              )}
            </View>
          </View>
        </ScrollView>
      </Animated.View>
      <View style={{ flex: 1, elevation: 5 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          alwaysBounceVertical={false}
          bounces={false}
        >
          <TouchableOpacity
            onPress={() => {
              topScrollRef.current?.scrollTo({
                x: 0,
                y: isShrunk ? 25 : 0,
              });
              Animated.timing(topHeight, {
                toValue: isShrunk ? 200 : Dimensions.get("window").height - 200,
                duration: 666,
                easing: Easing.linear,
                delay: 0,
                useNativeDriver: false,
              }).start(() => {
                setIsShrunk(!isShrunk);
              });
            }}
            style={{ alignSelf: "center" }}
          >
            <MaterialIcons
              name={!isShrunk ? "expand-more" : "expand-less"}
              size={54}
              color="#fff"
            />
          </TouchableOpacity>
          <View
            style={[
              pageTheme.flexWrap,
              pageTheme.centeredFlex,
              {
                backgroundColor: pageTheme.darkBGMedium.backgroundColor,
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
                paddingVertical: 10,
                width: Dimensions.get("window").width * 0.95,
              },
            ]}
          >
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
                    pageTheme.darkBGSmall,
                    {
                      backgroundColor: !comp.includes(item.name)
                        ? getChampBorderColor(item.name)
                        : "#123040",
                      margin: 2.5,
                    },
                  ]}
                >
                  <ImageBackground
                    style={pageTheme.avatarMed}
                    source={avatars[item.name]}
                    imageStyle={{ opacity: comp.includes(item.name) ? 0.5 : 1 }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  ) : (
    <Loading />
  );
};

export default CompBuilder;
