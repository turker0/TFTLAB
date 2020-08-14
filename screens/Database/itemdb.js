import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Items from "../../assets/items/items";
import { pageTheme } from "../../styles/page";
import RefactorFileName from "../../helpers/refactorFileName";
import FilterBox from "../../components/Database/filterbox";
import Tag from "../../components/Database/tag";

export default function ItemDB({ route }) {
  const contributions = [
    "AD",
    "AP",
    "Armor",
    "MR",
    "HP",
    "AS",
    "Crit",
    "Dodge",
    "Mana",
    "Wearer",
  ];
  const [filter, setFilter] = useState("");
  const [listData, setListData] = useState(route.params.items);
  const [listFullData, setListFullData] = useState(route.params.items);
  const [tags, setTags] = useState(costs);
  useEffect(() => {
    setListData(
      listFullData.filter((item) => {
        return item.name.toLowerCase().includes(filter.toLowerCase());
      })
    );
  }, [filter]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={pageTheme.page}>
        <Text style={pageTheme.title}>Item Builder</Text>
        <FilterBox filter={filter} setFilter={setFilter} type={"item"} />
        {contributions.map((item, index) => (
          <Tag tag={item} key={index} tags={tags} setTags={setTags} type={""} />
        ))}
        <View style={pageTheme.section}>
          {listData.map((item, index) => (
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
                  <View
                    key={index2}
                    style={[pageTheme.fdWrapperAIC, { marginVertical: 5 }]}
                  >
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
