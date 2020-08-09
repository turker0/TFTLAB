import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Origins from "../../assets/origins/origins";
import avatars from "../../assets/avatars/avatars";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import { pageTheme } from "../../styles/page";

export default function ItemBuilder({ route }) {
  const { origins } = route.params;
  return (
    <View style={pageTheme.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={pageTheme.title}>Origin Builder</Text>
        {origins.map((item, index) => (
          <View key={index} style={pageTheme.section}>
            <Text style={pageTheme.header}>{item.name}</Text>
            <View style={pageTheme.fdWrapperAIC}>
              <Image style={pageTheme.avatarMed} source={Origins[item.name]} />
              <View style={pageTheme.flexWrap}>
                {item.units.map((item, index) => (
                  <View
                    style={[
                      pageTheme.darkBGSmall,
                      {
                        backgroundColor: getChampBorderColor(item),
                        margin: 2.5,
                      },
                    ]}
                    key={index}
                  >
                    <Image style={pageTheme.avatarMed} source={avatars[item]} />
                  </View>
                ))}
              </View>
            </View>
            <View style={pageTheme.section}>
              <Text style={pageTheme.header}>Bonuses</Text>
              {item.detail.map((item2, index2) => (
                <View
                  key={index2}
                  style={[
                    pageTheme.fdWrapperAIC,
                    pageTheme.darkBGMedium,
                    {
                      justifyContent: "flex-start",
                      margin: 2.5,
                      paddingHorizontal: 10,
                    },
                  ]}
                >
                  <Text style={[pageTheme.regularText, { marginTop: 0 }]}>
                    x{item.count[index2]}
                  </Text>
                  <Text
                    style={[
                      pageTheme.regularText,
                      { marginLeft: 15, marginTop: 0, flex: 1 },
                    ]}
                  >
                    {item2}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
