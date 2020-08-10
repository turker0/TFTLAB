import React from "react";
import { Text, View, Image, Animated } from "react-native";
import avatars from "../../../assets/avatars/avatars";
import origins from "../../../assets/origins/origins";
import classes from "../../../assets/classes/classes";
import items from "../../../assets/items/items";
import skills from "../../../assets/skills/skills";
import { ScrollView } from "react-native-gesture-handler";
import getSyndergyChampions from "../../../helpers/getSynergyChampions";
import getChampBorderColor from "../../../helpers/getChampBorderColor";
import { pageTheme } from "../../../styles/page";
import LineWithOrangeDot from "../../../components/shared/linewithorangedot";
import RefactorFileName from "../../../helpers/refactorFileName";

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
    outputRange: [200, 40],
    extrapolate: "clamp",
    useNativeDriver: true,
  });

  return (
    <View>
      <Animated.View
        style={[pageTheme.absoWrapper, { height: headerHeight, padding: 10 }]}
      >
        <View style={pageTheme.fdWrapper}>
          <View
            style={[
              pageTheme.champAvatarWrapper,
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
              style={pageTheme.avatarBig}
              resizeMode="contain"
              source={avatars[RefactorFileName(name)]}
            />
          </View>
          <View style={pageTheme.traitsWrapper}>
            {name === "Irelia" || name === "Gangplank" ? (
              <View style={[pageTheme.fdWrapper, { flex: 2 }]}>
                <View style={pageTheme.centeredFlex}>
                  <Image
                    style={pageTheme.avatarMed}
                    resizeMode="contain"
                    source={classes[RefactorFileName(type[0], "trait")]}
                  />
                  <Text style={pageTheme.smallText}>{type[0]}</Text>
                </View>
                <View style={pageTheme.centeredFlex}>
                  <Image
                    style={pageTheme.avatarMed}
                    resizeMode="contain"
                    source={classes[RefactorFileName(type[1], "trait")]}
                  />
                  <Text style={pageTheme.smallText}>{type[1]}</Text>
                </View>
              </View>
            ) : (
              <View style={pageTheme.centeredFlex}>
                <Image
                  style={pageTheme.avatarMed}
                  resizeMode="contain"
                  source={classes[RefactorFileName(type[0], "trait")]}
                />
                <Text style={pageTheme.smallText}>{type[0]}</Text>
              </View>
            )}
            <View style={pageTheme.centeredFlex}>
              <Image
                style={pageTheme.avatarMed}
                resizeMode="contain"
                source={origins[RefactorFileName(origin, "trait")]}
              />
              <Text style={pageTheme.smallText}>{origin}</Text>
            </View>
          </View>
        </View>
        <Text style={pageTheme.title}>{name}</Text>
      </Animated.View>
      <Animated.View
        style={{
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
          <View style={{ padding: 10 }}>
            <View style={pageTheme.section}>
              <Text style={pageTheme.header}>Item Build</Text>
              <View style={pageTheme.fdWrapper}>
                <View style={pageTheme.darkBGMedium}>
                  <Image
                    style={pageTheme.avatarMed}
                    resizeMode="contain"
                    source={items[RefactorFileName(item[0])]}
                  />
                </View>
                <View
                  style={[pageTheme.darkBGMedium, { marginHorizontal: 10 }]}
                >
                  <Image
                    style={pageTheme.avatarMed}
                    resizeMode="contain"
                    source={items[RefactorFileName(item[1])]}
                  />
                </View>
                <View style={pageTheme.darkBGMedium}>
                  <Image
                    style={pageTheme.avatarMed}
                    resizeMode="contain"
                    source={items[RefactorFileName(item[2])]}
                  />
                </View>
              </View>
            </View>
            <View style={pageTheme.section}>
              <Text style={pageTheme.header}>Abilities</Text>
              <View style={pageTheme.fdWrapper}>
                <Image
                  style={[pageTheme.avatarMed, { borderRadius: 26 }]}
                  resizeMode="contain"
                  source={skills[RefactorFileName(name)]}
                />
                <View
                  style={{
                    marginLeft: 10,
                    justifyContent: "space-evenly",
                  }}
                >
                  <Text style={pageTheme.textBig}>{skill.name}</Text>
                  <Text style={pageTheme.textDetail}>
                    {skill.mana != 0
                      ? "Mana " + skill.mana[0] + " / " + skill.mana[1]
                      : "passive"}
                  </Text>
                </View>
              </View>

              {skill.desc.map((item, index) => (
                <Text style={pageTheme.regularText} key={index}>
                  {item}
                </Text>
              ))}
            </View>
            <View style={pageTheme.section}>
              <Text style={pageTheme.header}>Stats</Text>
              <LineWithOrangeDot label="cost" text={stats.cost} />
              <LineWithOrangeDot label="health" text={stats.health} />
              <LineWithOrangeDot label="damage" text={stats.damage} />
              <LineWithOrangeDot label="armor" text={stats.armor} />
              <LineWithOrangeDot label="magic resist" text={stats.mr} />
              <LineWithOrangeDot label="attack speed" text={stats.as} />
              <LineWithOrangeDot label="crit rate" text={stats.crit} />
              <LineWithOrangeDot
                label="range"
                text={
                  stats.range != 1
                    ? stats.range + " hexes"
                    : stats.range + " hex"
                }
              />
            </View>
            <View style={pageTheme.section}>
              <Text style={pageTheme.header}>Synergies</Text>
              {getSyndergyChampions(RefactorFileName(name)).map(
                (item, index) => (
                  <View
                    style={[pageTheme.fdWrapperAIC, { marginBottom: 15 }]}
                    key={index}
                  >
                    {name != "Gangplank" && name != "Irelia" ? (
                      <Image
                        style={pageTheme.avatarMed}
                        resizeMode="contain"
                        source={
                          index < 1
                            ? origins[RefactorFileName(origin, "trait")]
                            : classes[RefactorFileName(type[0], "trait")]
                        }
                      />
                    ) : (
                      <Image
                        style={pageTheme.avatarMed}
                        resizeMode="contain"
                        source={
                          index < 1
                            ? origins[RefactorFileName(origin, "trait")]
                            : classes[
                                RefactorFileName(type[index - 1], "trait")
                              ]
                        }
                      />
                    )}
                    <View style={[pageTheme.flexWrap, { marginLeft: 15 }]}>
                      {item.length > 0 ? (
                        item.map((item, index) => (
                          <View
                            key={index}
                            style={[
                              pageTheme.champAvatarWrapper,
                              {
                                backgroundColor: getChampBorderColor(
                                  RefactorFileName(item)
                                ),
                                margin: 3,
                              },
                            ]}
                          >
                            <Image
                              style={pageTheme.avatarMed}
                              resizeMode="contain"
                              source={avatars[RefactorFileName(item)]}
                            />
                          </View>
                        ))
                      ) : (
                        <Text style={pageTheme.regularText}>
                          No champion synergy for {name}
                        </Text>
                      )}
                    </View>
                  </View>
                )
              )}
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default ChampPage;
