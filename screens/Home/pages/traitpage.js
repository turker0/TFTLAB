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
    outputRange: [150, 35],
    extrapolate: "clamp",
    useNativeDriver: true,
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.titleWrapper, { height: headerHeight }]}>
        <View style={styles.traitIconWrapper}>
          <Image
            style={styles.traitIcon}
            resizeMode="contain"
            source={type == 0 ? classes[name] : origins[name]}
          />
        </View>
        <Text style={styles.traitTitle}>{name}</Text>
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
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={styles.section}>
            <Text style={styles.header}>Details</Text>
            {desc != 0 ? (
              <Text style={styles.traitDesc}>{desc}</Text>
            ) : (
              <Text style={styles.traitDesc}>No description</Text>
            )}
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Bonus</Text>
            {count.map((item, index) => (
              <View style={styles.bonusWrapper} key={index}>
                <Text style={styles.traitDesc}>x{item}</Text>
                <Text style={[styles.traitDesc, { marginLeft: 15, flex: 1 }]}>
                  {detail[index]}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Units</Text>
            <View style={styles.unitsWrapper}>
              {units.map((item, index) => (
                <View
                  style={[
                    styles.avatarWrapper,
                    { backgroundColor: getChampBorderColor(item, champions) },
                  ]}
                  key={index}
                >
                  <Image style={styles.avatar} source={avatars[item]} />
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
