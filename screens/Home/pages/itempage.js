import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import items from "../../../assets/items/items";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ItemPage = ({ route, navigation }) => {
  const { name } = route.params;
  const { desc } = route.params;
  const { contribution } = route.params;
  const { first } = route.params;
  const { second } = route.params;
  const { third } = route.params;
  const { detail } = route.params;

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
        <View style={styles.itemIconWrapper}>
          <Image
            style={styles.itemIcon}
            resizeMode="contain"
            source={items[name]}
          />
        </View>
        <Text style={styles.itemTitle}>{name}</Text>
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
            <Text style={styles.header}>Description</Text>
            <Text style={styles.itemDesc}>{desc}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Contribution</Text>
            {contribution.map((item, index) =>
              item != 0 ? (
                <View style={styles.contributionWrapper} key={index}>
                  <Text style={styles.icon}>⦿</Text>
                  <Text style={styles.itemDesc}>{item}</Text>
                </View>
              ) : (
                <Text style={styles.itemDesc} key={index}>
                  No contribution.
                </Text>
              )
            )}
          </View>
          <View style={styles.section}>
            <Text style={styles.header}>Recipe</Text>
            {first.map((item, index) => (
              <View style={{ marginVertical: 15 }} key={index}>
                <View style={styles.recipeWrapper}>
                  <View style={styles.receipeIconWrapper}>
                    <Image
                      style={styles.receipeIcon}
                      resizeMode="contain"
                      source={items[item]}
                    />
                  </View>
                  <Feather name="plus" size={24} color="#E8ECEE" />
                  <View style={styles.receipeIconWrapper}>
                    <Image
                      style={styles.receipeIcon}
                      resizeMode="contain"
                      source={items[second[index]]}
                    />
                  </View>
                  <MaterialCommunityIcons
                    name="equal"
                    size={24}
                    color="#E8ECEE"
                  />
                  <View style={styles.receipeIconWrapper}>
                    <Image
                      style={styles.receipeIcon}
                      resizeMode="contain"
                      source={items[third[index]]}
                    />
                  </View>
                </View>
                <View style={styles.detailWrapper}>
                  <Text style={styles.detailText}>{detail[index]}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default ItemPage;

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
  itemTitle: {
    fontSize: 30,
    marginTop: 5,
    fontFamily: "RobotoBlack",
    color: "#ffffffe6",
    textTransform: "capitalize",
    letterSpacing: 2,
  },
  itemIconWrapper: {
    width: 85,
    height: 85,
    backgroundColor: "#1B475F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    overflow: "hidden",
  },
  itemIcon: {
    height: 80,
    width: 80,
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
  itemDesc: {
    fontSize: 20,
    color: "#B9C6CB",
    fontFamily: "RobotoRegular",
    marginTop: 5,
  },
  contributionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginRight: 5,
    fontSize: 10,
    fontFamily: "RobotoRegular",
    paddingTop: 7,
    color: "#f48024",
    marginRight: 10,
  },
  recipeWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  receipeIcon: {
    height: 52,
    width: 52,
  },
  receipeIconWrapper: {
    width: 56,
    height: 56,
    backgroundColor: "#1B475F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    overflow: "hidden",
  },

  detailWrapper: {
    marginTop: 10,
    alignItems: "flex-start",
    borderRadius: 4,
  },
  detailText: {
    fontSize: 16,
    color: "#B9C6CB",
    fontFamily: "RobotoRegular",
    textAlign: "left",
    backgroundColor: "#1B475F",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
