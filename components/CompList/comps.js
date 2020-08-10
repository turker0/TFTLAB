import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";
import avatars from "../../assets/avatars/avatars";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import getRelatedElement from "../../helpers/getRelatedElement";
import { pageTheme } from "../../styles/page";
import RefactorFileName from "../../helpers/refactorFileName";

const TeamComp = ({ list, navigation, champions }) => {
  return (
    <View style={pageTheme.page}>
      <Text style={pageTheme.title}>{list.tier} tier</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {list.comps.map((item, index) => (
          <View key={index}>
            <View
              style={[pageTheme.darkBGMedium, { width: 252, marginRight: 10 }]}
            >
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
              <View
                style={[
                  pageTheme.fdWrapperAIC,
                  {
                    justifyContent: "space-between",
                    marginRight: 15,
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
