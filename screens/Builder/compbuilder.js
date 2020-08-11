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
import RefactorFileName from "../../helpers/refactorFileName";

const CompBuilder = ({ route, navigation }) => {
  const [comp, setComp] = useState([]);
  const [traits, setTraits] = useState(0);
  const { champions } = route.params;
  const [isShrunk, setIsShrunk] = useState(true);
  const topScrollRef = useRef(null);

  useEffect(() => {
    setTraits(getCompTraits(comp));
  }, [comp]);

  const deneme = (item) => {
    setComp([...comp, item]);
  };

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
                ? avatars[RefactorFileName(comp[i])]
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
                    <View
                      key={index}
                      style={[pageTheme.fdWrapper, { marginVertical: 10 }]}
                    >
                      <View
                        style={{
                          width: 80,
                          alignItems: "flex-start",
                        }}
                      >
                        <Text
                          numberOfLines={1}
                          style={[
                            pageTheme.textDetail,
                            {
                              marginTop: 0,
                              textTransform: "capitalize",
                              color: pageTheme.regularText.color,
                            },
                          ]}
                        >
                          {traits.traits[index]}
                        </Text>
                        <Image
                          style={pageTheme.avatarMed}
                          source={
                            origins[RefactorFileName(item, "trait")] !=
                            undefined
                              ? origins[RefactorFileName(item, "trait")]
                              : classes[RefactorFileName(item, "trait")]
                          }
                        />
                      </View>

                      <View style={[pageTheme.fdWrapperAIC, { flex: 1 }]}>
                        <Text
                          style={[
                            pageTheme.regularText,
                            {
                              color: traits.colors[index],
                              marginTop: 0,
                              fontFamily: "RobotoBold",
                            },
                          ]}
                        >
                          {traits.counts[index]}
                        </Text>
                        <Text
                          style={[
                            pageTheme.regularText,
                            { marginTop: 0, marginHorizontal: 10, flex: 1 },
                          ]}
                        >
                          {traits.details[index]}
                        </Text>
                      </View>
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
                    style={[pageTheme.fdWrapper, { marginVertical: 10 }]}
                  >
                    <View
                      style={{
                        alignItems: "flex-start",
                        width: 80,
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={[
                          pageTheme.textDetail,
                          {
                            marginTop: 0,
                            textTransform: "capitalize",
                            color: pageTheme.regularText.color,
                          },
                        ]}
                      >
                        {item}
                      </Text>
                      <Image
                        style={pageTheme.avatarMed}
                        source={
                          origins[RefactorFileName(item, "trait")] != undefined
                            ? origins[RefactorFileName(item, "trait")]
                            : classes[RefactorFileName(item, "trait")]
                        }
                      />
                    </View>
                    <View style={[pageTheme.fdWrapperAIC, { flex: 1 }]}>
                      <Text
                        style={[
                          pageTheme.regularText,
                          {
                            color: traits.colors[index],
                            marginTop: 0,
                            fontFamily: "RobotoBold",
                          },
                        ]}
                      >
                        {traits.counts[index]}
                      </Text>
                      <Text
                        style={[
                          pageTheme.regularText,

                          { marginTop: 0, marginHorizontal: 10, flex: 1 },
                        ]}
                      >
                        {traits.details[index] != 0
                          ? traits.details[index]
                          : "No bonus earned yet."}
                      </Text>
                    </View>
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
                    ? deneme(item.name)
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
                    source={avatars[RefactorFileName(item.name)]}
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
