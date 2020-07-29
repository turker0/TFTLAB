import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  FlatList,
} from "react-native";
import avatars from "../../assets/avatars/avatars";
import origins from "../../assets/origins/origins";
import classes from "../../assets/classes/classes";
import items from "../../assets/items/items";
import skills from "../../assets/skills/skills";
import { ScrollView } from "react-native-gesture-handler";

const ChampPage = ({ route, navigation }) => {
  const { name } = route.params;
  const { gold } = route.params;
  const { origin } = route.params;
  const { type } = route.params;
  const { skill } = route.params;
  const { details } = route.params;

  const scrollY = new Animated.Value(0);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [125, 25],
    extrapolate: "clamp",
    useNativeDriver: true,
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bioWrapper, { height: headerHeight }]}>
        <View style={styles.headerWrapper}>
          <View
            style={[
              styles.avatarWrapper,
              gold === 1
                ? { backgroundColor: "#213042" }
                : gold === 2
                ? { backgroundColor: "#156831" }
                : gold === 3
                ? { backgroundColor: "#12407c" }
                : gold === 4
                ? { backgroundColor: "#893088" }
                : { backgroundColor: "#b89d27" },
            ]}
          >
            <Image
              style={styles.avatar}
              resizeMode="contain"
              source={avatars[name]}
            />
          </View>
          <View style={styles.traitsWrapper}>
            {name === "Irelia" ? (
              <View
                style={{
                  flexDirection: "row",
                  flex: 2,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <Image
                    style={styles.trait}
                    resizeMode="contain"
                    source={classes[type[0]]}
                  />
                  <Text style={styles.traitText}>{type[0]}</Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <Image
                    style={styles.trait}
                    resizeMode="contain"
                    source={classes[type[1]]}
                  />
                  <Text style={styles.traitText}>{type[1]}</Text>
                </View>
              </View>
            ) : (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Image
                  style={styles.trait}
                  resizeMode="contain"
                  source={classes[type]}
                />
                <Text style={styles.traitText}>{type}</Text>
              </View>
            )}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Image
                style={styles.trait}
                resizeMode="contain"
                source={origins[origin]}
              />
              <Text style={styles.traitText}>{origin}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.avatarTitle}>{name}</Text>
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          paddingBottom: headerHeight,
          transform: [{ translateY: headerHeight }],
        }}
      >
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          alwaysBounceVertical={false}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={styles.bio}>
            <Text style={styles.header}>Item Build</Text>
            <View style={styles.itemWrapper}>
              <Image
                style={styles.itemIcon}
                resizeMode="contain"
                source={items["ChaliceofPower"]}
              />
              <Image
                style={styles.itemIcon}
                resizeMode="contain"
                source={items["ChaliceofPower"]}
              />
              <Image
                style={styles.itemIcon}
                resizeMode="contain"
                source={items["ChaliceofPower"]}
              />
            </View>
            <View>
              <Text style={styles.header}>Abilities</Text>
              <View style={styles.abilityWrapper}>
                <Image
                  style={styles.skill}
                  resizeMode="contain"
                  source={skills[name]}
                />
                <View
                  style={{
                    marginLeft: 5,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.skillName}>{skill.name}</Text>
                  <Text style={styles.skillType}>
                    {skill.type == "passive"
                      ? skill.type
                      : skill.type +
                        " " +
                        skill.mana[0] +
                        " / " +
                        skill.mana[1]}
                  </Text>
                </View>
              </View>
              <FlatList
                data={skill.desc}
                renderItem={({ item }) => (
                  <Text style={styles.skillDesc}>{item}</Text>
                )}
                keyExtractor={(item, index) => String(index)}
              />
            </View>
            <Text style={styles.header}>Stats</Text>
            <View style={styles.bioDetail}>
              <Image
                style={styles.bioIcon}
                resizeMode="contain"
                source={require("../../assets/star.png")}
              />
              <Text style={styles.detail}>{gold}</Text>
            </View>
            <View style={styles.bioDetail}>
              <Image
                style={styles.bioIcon}
                resizeMode="contain"
                source={require("../../assets/hp.png")}
              />
              <Text style={styles.detail}>
                {details.health[0]} / {details.health[1]} / {details.health[2]}
              </Text>
            </View>
            <View style={styles.bioDetail}>
              <Image
                style={styles.bioIcon}
                resizeMode="contain"
                source={require("../../assets/mana.png")}
              />
              <Text style={styles.detail}>{details.mana}</Text>
            </View>
            <View style={styles.bioDetail}>
              <Image
                style={styles.bioIcon}
                resizeMode="contain"
                source={require("../../assets/armor.png")}
              />
              <Text style={styles.detail}>{details.armor}</Text>
            </View>
            <View style={styles.bioDetail}>
              <Image
                style={styles.bioIcon}
                resizeMode="contain"
                source={require("../../assets/mr.png")}
              />
              <Text style={styles.detail}>{details.mr}</Text>
            </View>
            <View style={styles.bioDetail}>
              <Image
                style={styles.bioIcon}
                resizeMode="contain"
                source={require("../../assets/damage.png")}
              />
              <Text style={styles.detail}>
                {details.damage[0]} / {details.damage[1]} / {details.damage[2]}
              </Text>
            </View>
            <View style={styles.bioDetail}>
              <Image
                style={styles.bioIcon}
                resizeMode="contain"
                source={require("../../assets/as.png")}
              />
              <Text style={styles.detail}>{details.atkspd}</Text>
            </View>
            <View style={styles.bioDetail}>
              <Image
                style={styles.bioIcon}
                resizeMode="contain"
                source={require("../../assets/crit.png")}
              />
              <Text style={styles.detail}>{details.critrate}</Text>
            </View>
            <View style={styles.bioDetail}>
              <Image
                style={styles.bioIcon}
                resizeMode="contain"
                source={require("../../assets/range.png")}
              />
              <Text style={styles.detail}>{details.range}</Text>
            </View>
          </View>
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

export default ChampPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    padding: 10,
  },
  bioWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },
  headerWrapper: {
    flexDirection: "row",
  },
  traitsWrapper: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  avatarWrapper: {
    width: 85,
    height: 85,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  avatar: {
    height: 80,
    width: 80,
  },
  trait: {
    height: 52,
    width: 52,
  },
  traitText: {
    fontSize: 14,
    color: "#ffffffe6",
    fontFamily: "RobotoBold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  itemWrapper: {
    flexDirection: "row",
  },
  itemIcon: {
    width: 44,
    height: 44,
    marginRight: 10,
    borderRadius: 2,
  },
  bio: {
    overflow: "hidden",
  },
  bioDetail: {
    flexDirection: "row",
    alignItems: "center",
  },
  bioIcon: {
    height: 24,
    width: 24,
  },
  detail: {
    fontSize: 16,
    fontFamily: "RobotoMedium",
    color: "#ffffffe6",
    marginLeft: 5,
  },
  avatarTitle: {
    fontSize: 28,
    fontFamily: "RobotoBlack",
    color: "#ffffffe6",
    textTransform: "capitalize",
    letterSpacing: 1,
    textTransform: "capitalize",
  },
  header: {
    fontSize: 24,
    fontFamily: "RobotoBold",
    color: "#ffffffe6",
    textTransform: "capitalize",
    marginVertical: 10,
  },
  abilityWrapper: {
    flexDirection: "row",
  },
  skillName: {
    fontSize: 18,
    color: "#ffffffe6",
    fontFamily: "RobotoBold",
    letterSpacing: 1,
  },
  skillType: {
    fontSize: 14,
    color: "#88a0a7",
    fontFamily: "RobotoMedium",
  },
  skillDesc: {
    fontSize: 14,
    color: "#88a0a7",
    fontFamily: "RobotoRegular",
    marginTop: 5,
  },
  skill: {
    height: 44,
    width: 44,
    borderRadius: 2,
  },
});
