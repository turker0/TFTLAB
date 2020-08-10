import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import avatars from "../../assets/avatars/avatars";
import skills from "../../assets/skills/skills";
import classes from "../../assets/classes/classes";
import origins from "../../assets/origins/origins";
import { MaterialIcons } from "@expo/vector-icons";
import { pageTheme } from "../../styles/page";
import RefactorFileName from "../../helpers/refactorFileName";

export default function ChampionDB({ route }) {
  const { champions } = route.params;
  return (
    <View style={pageTheme.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={pageTheme.title}>Champion Database</Text>
          {champions.map((item, index) => (
            <View key={index} style={pageTheme.section}>
              <View style={pageTheme.fdWrapper}>
                <View
                  style={[
                    {
                      width: pageTheme.avatarSmall.width * 3,
                    },
                  ]}
                >
                  <Text
                    style={[pageTheme.textBig, { marginBottom: 2.5 }]}
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                  <Image
                    style={pageTheme.avatarBig}
                    source={avatars[RefactorFileName(item.name)]}
                  />
                  <View style={[pageTheme.fdWrapper, { marginTop: 2.5 }]}>
                    {item.class.map((item, index) => (
                      <Image
                        style={pageTheme.avatarSmall}
                        source={classes[RefactorFileName(item, "trait")]}
                        key={index}
                      />
                    ))}
                    <Image
                      style={pageTheme.avatarSmall}
                      source={origins[RefactorFileName(item.origin, "trait")]}
                    />
                  </View>
                  <View style={pageTheme.fdWrapperAIC}>
                    <MaterialIcons
                      name="attach-money"
                      size={24}
                      color="#b89d27"
                    />
                    <Text style={pageTheme.textMed}>{item.stats.cost}</Text>
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
                      source={skills[item.name]}
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
    </View>
  );
}
