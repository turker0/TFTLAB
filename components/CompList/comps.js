import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import avatars from "../../assets/avatars/avatars";
import classes from "../../assets/classes/classes";
import origins from "../../assets/origins/origins";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import getRelatedElement from "../../helpers/getRelatedElement";
import { pageTheme } from "../../styles/page";
import RefactorFileName from "../../helpers/refactorFileName";
import getCompTraits from "../../helpers/getCompTraits";

const TeamComp = ({ list, navigation, champions }) => {
  return (
    <View style={pageTheme.page}>
      <Text style={pageTheme.title}>{list.tier} tier</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {list.comps.map((item, index) => (
          <View key={index} style={{ marginRight: 25 }}>
            <View style={[pageTheme.darkBGMedium, { width: 252 }]}>
              <View style={pageTheme.flexWrap}>
                {item.champs.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      let champ = getRelatedElement(item, champions);
                      navigation.navigate("ChampPage", {
                        name: champ[0].name,
                        item: champ[0].items,
                        origin: champ[0].origin,
                        type: champ[0].class,
                        skill: champ[0].skill,
                        stats: champ[0].stats,
                      });
                    }}
                    key={index}
                  >
                    <View
                      style={[
                        pageTheme.darkBGSmall,
                        {
                          backgroundColor: getChampBorderColor(
                            RefactorFileName(item)
                          ),
                          margin: 2.5,
                        },
                      ]}
                    >
                      <Image
                        style={pageTheme.avatarMed}
                        source={avatars[RefactorFileName(item)]}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("CompPage", {
                  name: item.name,
                  champions: item.champs,
                });
              }}
            >
              <View style={[pageTheme.flexWrap, { width: 252 }]}>
                {getCompTraits(item.champs).traits.map((item2, index) =>
                  getCompTraits(item.champs).details[index] != 0 ? (
                    <View
                      key={index}
                      style={[
                        pageTheme.darkBGSmall,
                        pageTheme.fdWrapperAIC,
                        {
                          paddingHorizontal: 3,
                          marginRight: 2.5,
                          marginTop: 2.5,
                        },
                      ]}
                    >
                      <Text
                        style={
                          (pageTheme.textDetail,
                          {
                            color: getCompTraits(item.champs).colors[index],
                            marginHorizontal: 1,
                          })
                        }
                      >
                        x{getCompTraits(item.champs).counts[index]}
                      </Text>
                      <Image
                        style={pageTheme.avatarVerySmall}
                        source={
                          classes[item2] != undefined
                            ? classes[item2]
                            : origins[item2]
                        }
                      />
                    </View>
                  ) : null
                )}
              </View>
              <View
                style={[
                  pageTheme.fdWrapperAIC,
                  {
                    justifyContent: "space-between",
                  },
                ]}
              >
                <Text style={pageTheme.regularText}>{item.name}</Text>
                <Octicons name="arrow-small-right" size={28} color="#B9C6CB" />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TeamComp;
