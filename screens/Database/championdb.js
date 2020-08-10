import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import avatars from "../../assets/avatars/avatars";
import skills from "../../assets/skills/skills";
import classes from "../../assets/classes/classes";
import origins from "../../assets/origins/origins";
import Items from "../../assets/items/items";
import { MaterialIcons } from "@expo/vector-icons";
import { pageTheme } from "../../styles/page";
import RefactorFileName from "../../helpers/refactorFileName";
import getChampBorderColor from "../../helpers/getChampBorderColor";

export default function ChampionDB({ route }) {
  const { champions } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={pageTheme.page}>
        <Text style={pageTheme.title}>Champion Database</Text>
        {champions.map((item, index) => (
          <View key={index} style={pageTheme.section}>
            <Text
              style={[
                pageTheme.textBig,
                {
                  marginBottom: 2.5,
                },
              ]}
            >
              {item.name}
            </Text>
            <View style={pageTheme.fdWrapper}>
              <View>
                <View
                  style={[
                    pageTheme.darkBGSmall,
                    {
                      alignSelf: "flex-start",
                      backgroundColor: getChampBorderColor(
                        RefactorFileName(item.name)
                      ),
                    },
                  ]}
                >
                  <Image
                    style={pageTheme.avatar3x}
                    source={avatars[RefactorFileName(item.name)]}
                  />
                </View>
                <View style={[pageTheme.fdWrapper, { marginTop: 2.5 }]}>
                  {item.items.map((item, index) => (
                    <Image
                      style={[
                        pageTheme.avatarSmall,
                        { marginHorizontal: index == 1 ? 2.5 : 0 },
                      ]}
                      source={Items[RefactorFileName(item)]}
                      key={index}
                    />
                  ))}
                </View>
                <View style={[pageTheme.fdWrapper, { marginTop: 2.5 }]}>
                  <Image
                    style={pageTheme.avatarSmall}
                    source={origins[RefactorFileName(item.origin, "trait")]}
                  />
                  {item.class.map((item, index) => (
                    <Image
                      style={[
                        pageTheme.avatarSmall,
                        { marginHorizontal: index == 0 ? 2.5 : 0 },
                      ]}
                      source={classes[RefactorFileName(item, "trait")]}
                      key={index}
                    />
                  ))}
                </View>
                <View style={pageTheme.fdWrapperAIC}>
                  <MaterialIcons
                    name="attach-money"
                    size={24}
                    color={
                      item.stats.cost == 2
                        ? "#156831"
                        : item.stats.cost == 3
                        ? "#12407c"
                        : item.stats.cost == 4
                        ? "#893088"
                        : item.stats.cost == 5
                        ? "#b89d27"
                        : "#0A0A0A"
                    }
                  />
                  <Text
                    style={[
                      pageTheme.textMed,
                      {
                        fontFamily: "RobotoBlack",
                        color:
                          item.stats.cost == 2
                            ? "#156831"
                            : item.stats.cost == 3
                            ? "#12407c"
                            : item.stats.cost == 4
                            ? "#893088"
                            : item.stats.cost == 5
                            ? "#b89d27"
                            : "#0A0A0A",
                      },
                    ]}
                  >
                    {item.stats.cost}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginLeft: 10,
                  flex: 1,
                }}
              >
                <View style={[pageTheme.fdWrapperAIC, { marginBottom: 2.5 }]}>
                  <Image
                    style={[
                      pageTheme.avatarSmall,
                      {
                        borderRadius: pageTheme.avatarSmall.width / 2,
                        marginRight: 5,
                      },
                    ]}
                    source={skills[RefactorFileName(item.name)]}
                  />

                  <Text style={pageTheme.textMed} numberOfLines={1}>
                    {item.skill.name}
                  </Text>
                </View>
                {item.skill.desc.map((item2, index2) => (
                  <Text
                    style={[
                      pageTheme.darkBGMedium,
                      pageTheme.textDetail,
                      {
                        marginVertical: 2.5,
                        paddingHorizontal: 10,
                        color: pageTheme.regularText.color,
                      },
                    ]}
                    key={index2}
                  >
                    {item2}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
