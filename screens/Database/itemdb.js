import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Items from "../../assets/items/items";
import { pageTheme } from "../../styles/page";
import RefactorFileName from "../../helpers/refactorFileName";

export default function ItemBuilder({ route }) {
  const { items } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={pageTheme.page}>
        <Text style={pageTheme.title}>Item Builder</Text>
        <View style={pageTheme.section}>
          {items.map((item, index) => (
            <View style={pageTheme.section} key={index}>
              <View style={pageTheme.fdWrapper}>
                <View>
                  <Image
                    style={pageTheme.avatarMed}
                    source={Items[RefactorFileName(item.name)]}
                  />
                  <View style={{ marginTop: 2.5 }}>
                    {item.contribution.map((item2, index2) => (
                      <Text key={index2} style={pageTheme.textDetail}>
                        {item2}
                      </Text>
                    ))}
                  </View>
                </View>
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text style={pageTheme.header}>{item.name}</Text>
                  <Text style={pageTheme.textDetail}>{item.desc}</Text>
                </View>
              </View>
              <View style={pageTheme.section}>
                <Text style={pageTheme.header}>Recipe</Text>
                {item.first.map((item2, index2) => (
                  <View style={[pageTheme.fdWrapperAIC, { marginVertical: 5 }]}>
                    <Image
                      style={pageTheme.avatarSmall}
                      source={Items[RefactorFileName(item2)]}
                    />
                    <Image
                      style={[pageTheme.avatarSmall, { marginHorizontal: 5 }]}
                      source={Items[RefactorFileName(item.second[index2])]}
                    />
                    <Image
                      style={pageTheme.avatarSmall}
                      source={Items[RefactorFileName(item.third[index2])]}
                    />
                    <Text
                      style={[
                        pageTheme.darkBGMedium,
                        pageTheme.regularText,
                        {
                          marginTop: 0,
                          flex: 1,
                          marginLeft: 10,
                          paddingHorizontal: 10,
                        },
                      ]}
                    >
                      {item.detail[index2]}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
