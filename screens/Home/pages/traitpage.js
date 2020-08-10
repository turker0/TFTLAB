import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import classes from "../../../assets/classes/classes";
import origins from "../../../assets/origins/origins";
import avatars from "../../../assets/avatars/avatars";
import getChampBorderColor from "../../../helpers/getChampBorderColor";
import { pageTheme } from "../../../styles/page";
import RefactorFileName from "../../../helpers/refactorFileName";

const TraitPage = ({ route, navigation }) => {
  const { name } = route.params;
  const { desc } = route.params;
  const { count } = route.params;
  const { detail } = route.params;
  const { units } = route.params;
  const { type } = route.params;
  const { champions } = route.params;

  const scrollY = new Animated.Value(0);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [175, 35],
    extrapolate: "clamp",
    useNativeDriver: true,
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[pageTheme.absoWrapper, { height: headerHeight, padding: 10 }]}
      >
        <Image
          style={pageTheme.avatarBig}
          resizeMode="contain"
          source={
            type == 0
              ? classes[RefactorFileName(name, "trait")]
              : origins[RefactorFileName(name, "trait")]
          }
        />

        <Text style={pageTheme.title}>{name}</Text>
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          paddingBottom: headerHeight,
          transform: [{ translateY: headerHeight }],
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          alwaysBounceVertical={false}
          bounces={false}
          style={{ padding: 10 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={pageTheme.section}>
            <Text style={pageTheme.header}>Details</Text>
            {desc != 0 ? (
              <Text style={pageTheme.regularText}>{desc}</Text>
            ) : (
              <Text style={pageTheme.regularText}>No description</Text>
            )}
          </View>
          <View style={pageTheme.section}>
            <Text style={pageTheme.header}>Bonus</Text>
            {count.map((item, index) => (
              <View
                style={[
                  pageTheme.fdWrapper,
                  pageTheme.darkBGMedium,
                  { marginVertical: 5, padding: 10 },
                ]}
                key={index}
              >
                <Text style={pageTheme.regularText}>x{item}</Text>
                <Text
                  style={[pageTheme.regularText, { marginLeft: 15, flex: 1 }]}
                >
                  {detail[index]}
                </Text>
              </View>
            ))}
          </View>
          <View style={pageTheme.section}>
            <Text style={pageTheme.header}>Units</Text>
            <View style={pageTheme.flexWrap}>
              {units.map((item, index) => (
                <View
                  style={[
                    pageTheme.champAvatarWrapper,
                    {
                      backgroundColor: getChampBorderColor(item, champions),
                      margin: 2.5,
                    },
                  ]}
                  key={index}
                >
                  <Image
                    style={pageTheme.avatarMed}
                    source={avatars[RefactorFileName(item)]}
                  />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default TraitPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
  traitTitle: {
    fontSize: 30,
    marginTop: 5,
    fontFamily: "RobotoBlack",
    color: "#ffffffe6",
    textTransform: "capitalize",
    letterSpacing: 2,
  },
  section: {
    marginVertical: 20,
  },
  header: {
    fontSize: 28,
    fontFamily: "RobotoBold",
    color: "#E8ECEE",
    textTransform: "capitalize",
    marginVertical: 10,
  },
  bonusWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#1B475F",
    borderRadius: 4,
  },
  traitDesc: {
    fontSize: 20,
    color: "#B9C6CB",
    fontFamily: "RobotoRegular",
  },
  unitsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  avatarWrapper: {
    width: 56,
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 10,
  },
  avatar: {
    width: 52,
    height: 52,
  },
});
