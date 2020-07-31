import React from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import avatars from "../../assets/avatars/avatars";
import origins from "../../assets/origins/origins";
import classes from "../../assets/classes/classes";
import items from "../../assets/items/items";
import skills from "../../assets/skills/skills";
import { ScrollView } from "react-native-gesture-handler";
import getSyndergyChampions from "../../helpers/getSynergyChampions";
import getChampBorderColor from "../../helpers/getChampBorderColor";

const ChampPage = ({ route, navigation }) => {
  const { name } = route.params;
  const { item } = route.params;
  const { origin } = route.params;
  const { type } = route.params;
  const { skill } = route.params;
  const { stats } = route.params;

  const scrollY = new Animated.Value(0);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [150, 35],
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
              stats.cost === 1
                ? { backgroundColor: "#213042" }
                : stats.cost === 2
                ? { backgroundColor: "#156831" }
                : stats.cost === 3
                ? { backgroundColor: "#12407c" }
                : stats.cost === 4
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
            {name === "Irelia" || name === "Gangplank" ? (
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
          <View style={styles.bio}>
            <View style={styles.section}>
              <Text style={styles.header}>Item Build</Text>
              <View style={styles.itemWrapper}>
                <View style={styles.itemBackground}>
                  <Image
                    style={styles.itemIcon}
                    resizeMode="contain"
                    source={items[item[0]]}
                  />
                </View>
                <View style={styles.itemBackground}>
                  <Image
                    style={styles.itemIcon}
                    resizeMode="contain"
                    source={items[item[1]]}
                  />
                </View>
                <View style={styles.itemBackground}>
                  <Image
                    style={styles.itemIcon}
                    resizeMode="contain"
                    source={items[item[2]]}
                  />
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.header}>Abilities</Text>
              <View style={styles.abilityWrapper}>
                <Image
                  style={styles.skill}
                  resizeMode="contain"
                  source={skills[name]}
                />
                <View
                  style={{
                    marginLeft: 10,
                    justifyContent: "space-evenly",
                  }}
                >
                  <Text style={styles.skillName}>{skill.name}</Text>
                  <Text style={styles.skillType}>
                    {skill.mana != 0
                      ? "Mana " + skill.mana[0] + " / " + skill.mana[1]
                      : "passive"}
                  </Text>
                </View>
              </View>

              {skill.desc.map((item, index) => (
                <Text style={styles.skillDesc} key={index}>
                  {item}
                </Text>
              ))}
            </View>
            <View style={styles.section}>
              <Text style={styles.header}>Stats</Text>
              <Text style={styles.skillDesc}>cost : {stats.cost}</Text>
              <Text style={styles.skillDesc}>health : {stats.health}</Text>
              <Text style={styles.skillDesc}>damage : {stats.damage}</Text>
              <Text style={styles.skillDesc}>armor : {stats.armor}</Text>
              <Text style={styles.skillDesc}>magic resist : {stats.mr}</Text>
              <Text style={styles.skillDesc}>attack speed : {stats.as}</Text>
              <Text style={styles.skillDesc}>crit rate : {stats.crit}</Text>
              <Text style={styles.skillDesc}>
                range :{" "}
                {stats.range != 1
                  ? stats.range + " hexes"
                  : stats.range + " hex"}
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.header}>Synergies</Text>
              {getSyndergyChampions(name).map((item, index) => (
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: 10,
                  }}
                  key={index}
                >
                  {name != "Gangplank" && name != "Irelia" ? (
                    <Image
                      style={styles.trait}
                      resizeMode="contain"
                      source={index < 1 ? origins[origin] : classes[type]}
                    />
                  ) : (
                    <Image
                      style={styles.trait}
                      resizeMode="contain"
                      source={
                        index < 1 ? origins[origin] : classes[type[index - 1]]
                      }
                    />
                  )}
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingLeft: 10,
                    }}
                  >
                    {item.map((item, index) => (
                      <View
                        key={index}
                        style={{
                          backgroundColor: getChampBorderColor(item),
                          width: 48,
                          height: 48,
                          justifyContent: "center",
                          alignItems: "center",
                          marginHorizontal: 5,
                          marginVertical: 5,
                        }}
                      >
                        <Image
                          style={styles.synergy}
                          resizeMode="contain"
                          source={avatars[item]}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
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
    marginBottom: 5,
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
  section: {
    marginVertical: 20,
  },
  trait: {
    height: 52,
    width: 52,
  },
  traitText: {
    fontSize: 14,
    color: "#D0D9DC",
    fontFamily: "RobotoBold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  itemWrapper: {
    flexDirection: "row",
  },
  itemBackground: {
    backgroundColor: "#1B475F",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 4,
  },
  itemIcon: {
    width: 44,
    height: 44,
    borderRadius: 2,
  },
  bio: {
    overflow: "hidden",
  },
  statWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bioIcon: {
    height: 24,
    width: 24,
  },
  detailHeader: {
    fontSize: 20,
    fontFamily: "RobotoMedium",
    color: "#DCE3E5",
    textAlign: "center",
  },
  detailHeader2: {
    fontSize: 18,
    fontFamily: "RobotoRegular",
    color: "#B9C7CB",
    textAlign: "center",
  },
  avatarTitle: {
    fontSize: 30,
    fontFamily: "RobotoBlack",
    color: "#ffffffe6",
    textTransform: "capitalize",
    letterSpacing: 2,
  },
  header: {
    fontSize: 28,
    fontFamily: "RobotoBold",
    color: "#E8ECEE",
    textTransform: "capitalize",
    marginVertical: 10,
  },
  abilityWrapper: {
    flexDirection: "row",
  },
  skillName: {
    fontSize: 28,
    color: "#E8ECEE",
    fontFamily: "RobotoBold",
    letterSpacing: 1,
    textTransform: "capitalize",
  },
  skillType: {
    fontSize: 18,
    color: "#88a0a7",
    fontFamily: "RobotoMedium",
  },
  skillDesc: {
    fontSize: 20,
    color: "#B9C6CB",
    fontFamily: "RobotoRegular",
    marginTop: 5,
  },
  skill: {
    height: 58,
    width: 58,
    borderRadius: 2,
  },
  synergy: {
    width: 44,
    height: 44,
  },
});
