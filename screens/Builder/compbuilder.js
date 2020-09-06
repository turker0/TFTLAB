import React, { useState, useEffect } from "react";
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
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import getCompTraits from "../../helpers/getCompTraits";
import origins from "../../assets/origins/origins";
import classes from "../../assets/classes/classes";
import { pageTheme } from "../../styles/page";
import { global } from "../../styles/global";
import RefactorFileName from "../../helpers/refactorFileName";
import FilterBox from "../../components/Database/filterbox";
import Tag from "../../components/Database/tag";

const CompBuilder = ({ route, navigation }) => {
  const costs = [1, 2, 3, 4, 5];
  const [filter, setFilter] = useState("");
  const [tags, setTags] = useState([]);

  const [listData, setListData] = useState(route.params.champions);
  const [listFullData, setListFullData] = useState(route.params.champions);

  const [comp, setComp] = useState([]);
  const [traits, setTraits] = useState(0);

  useEffect(() => {
    setTraits(getCompTraits(comp));
  }, [comp]);

  const deneme = (item) => {
    setComp([...comp, item]);
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

  const scrollY = new Animated.Value(0);

  useEffect(() => {
    setListData(
      listFullData.filter((item) => {
        return (
          item.name.toLowerCase().includes(filter.toLowerCase()) &&
          (tags.length > 0 ? tags.includes(item.stats.cost) : 1)
        );
      })
    );
  }, [filter, tags]);

  return listData != 0 ? (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
    >
      <Animated.View
        style={[
          pageTheme.page,
          {
            transform: [{ translateY: Animated.multiply(scrollY, 0.9) }],
          },
        ]}
      >
        <Text style={pageTheme.title}>Team Comp Builder</Text>
        <View style={[pageTheme.flexWrap, pageTheme.centeredFlex]}>
          {compComponent}
        </View>
        {comp.length >= 1 ? (
          <View
            style={[
              pageTheme.centeredFlex,
              pageTheme.fdWrapperAIC,
              { marginTop: 10 },
            ]}
          >
            <Text style={pageTheme.textBig}>{comp.length}/10</Text>
            <TouchableOpacity
              onPress={() => {
                setComp([]);
                setTraits(0);
              }}
              style={[
                pageTheme.darkBGSmall,
                {
                  paddingHorizontal: 5,
                  marginLeft: 10,
                },
              ]}
            >
              <Text style={pageTheme.textMed}>reset</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </Animated.View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={[
            pageTheme.section,
            {
              width: Dimensions.get("window").width * 0.9,
              marginHorizontal: 5,
              backgroundColor: "#102531",
              borderTopRightRadius: 18,
              borderTopLeftRadius: 18,
              paddingHorizontal: 10,
              paddingTop: 10,
              marginBottom: 0,
            },
          ]}
        >
          <Text style={pageTheme.header}>Champions</Text>
          <FilterBox filter={filter} setFilter={setFilter} type={"champion"} />
          <View
            style={[
              pageTheme.fdWrapperAIC,
              {
                justifyContent: "center",
                marginBottom: 10,
              },
            ]}
          >
            {costs.map((item, index) => (
              <Tag
                tag={item}
                key={index}
                tags={tags}
                setTags={setTags}
                type={"gold"}
              />
            ))}
          </View>
          <View style={[pageTheme.flexWrap, pageTheme.centeredFlex]}>
            {listData.map((item, index) => (
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
                    imageStyle={{
                      opacity: comp.includes(item.name) ? 0.5 : 1,
                    }}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={[
            pageTheme.section,
            {
              width: Dimensions.get("window").width * 0.9,
              marginHorizontal: 5,
              backgroundColor: "#102531",
              borderTopRightRadius: 18,
              borderTopLeftRadius: 18,
              paddingHorizontal: 10,
              paddingTop: 10,
              marginBottom: 0,
            },
          ]}
        >
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
        <View
          style={[
            pageTheme.section,
            {
              width: Dimensions.get("window").width * 0.9,
              marginHorizontal: 5,
              backgroundColor: "#102531",
              borderTopRightRadius: 18,
              borderTopLeftRadius: 18,
              paddingHorizontal: 10,
              paddingTop: 10,
              marginBottom: 0,
            },
          ]}
        >
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
      </ScrollView>
    </Animated.ScrollView>
  ) : (
    <Loading />
  );
};

export default CompBuilder;
