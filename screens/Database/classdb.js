import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Classes from "../../assets/classes/classes";
import avatars from "../../assets/avatars/avatars";
import getChampBorderColor from "../../helpers/getChampBorderColor";
import { pageTheme } from "../../styles/page";
import RefactorFileName from "../../helpers/refactorFileName";

export default function ItemBuilder({ route }) {
  const { classes } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={pageTheme.page}>
        <Text style={pageTheme.title}>Class Builder</Text>
        {classes.map((item, index) => (
          <View key={index} style={pageTheme.section}>
            <Text style={pageTheme.header}>{item.name}</Text>
            <View style={pageTheme.fdWrapperAIC}>
              <Image
                style={pageTheme.avatarMed}
                source={Classes[RefactorFileName(item.name, "trait")]}
              />
              <View style={[pageTheme.flexWrap, { marginLeft: 5 }]}>
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
                    <Image
                      style={pageTheme.avatarMed}
                      source={avatars[RefactorFileName(item)]}
                    />
                  </View>
                ))}
              </View>
            </View>
            <View>
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
      </View>
    </ScrollView>
  );
}
