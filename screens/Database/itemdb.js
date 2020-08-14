import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Items from "../../assets/items/items";
import { pageTheme } from "../../styles/page";
import RefactorFileName from "../../helpers/refactorFileName";
import FilterBox from "../../components/Database/filterbox";
import Tag from "../../components/Database/tag";
import OtherItems from "../../components/Database/otherItems";

export default function ItemDB({ route }) {
  const contributions = [
    "AD",
    "AP",
    "AS",
    "Armor",
    "MR",
    "HP",
    "Mana",
    "Crit",
    "Dodge",
  ];
  const otherItems = ["Base items", "Combined items", "Traits items"];
  const [filter, setFilter] = useState("");
  const [listData, setListData] = useState(route.params.items);
  const [listFullData, setListFullData] = useState(route.params.items);
  const [tags, setTags] = useState([]);
  const [otherTags, setOtherTags] = useState(0);
  useEffect(() => {
    setListData(
      listFullData.filter((item) => {
        return (
          item.name.toLowerCase().includes(filter.toLowerCase()) &&
          (tags.length > 0
            ? item.contribution.length > 1
              ? tags.includes(item.contribution[0].split(" ")[1]) ||
                tags.includes(item.contribution[1].split(" ")[1])
              : tags.includes(item.contribution[0].split(" ")[1])
            : 1)
        );
      })
    );
  }, [filter, tags]);

  useEffect(() => {
    setListData(
      otherTags == 1
        ? listFullData.filter((item) => {
            return item.first.length > 1;
          })
        : otherTags == 2
        ? listFullData.filter((item) => {
            return item.first.length == 1 && item.first[0] !== "Spatula";
          })
        : otherTags == 3
        ? listFullData.filter((item) => {
            return item.first.length == 1 && item.first[0] == "Spatula";
          })
        : listFullData
    );
  }, [otherTags]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={pageTheme.page}>
        <Text style={pageTheme.title}>Item Builder</Text>
        <FilterBox filter={filter} setFilter={setFilter} type={"item"} />
        <View style={[pageTheme.fdWrapperAIC, pageTheme.flexWrap]}>
          {contributions.map((item, index) => (
            <Tag
              tag={item}
              key={index}
              tags={tags}
              setTags={setTags}
              type={""}
            />
          ))}
        </View>
        <View
          style={[pageTheme.centeredFlex, pageTheme.fdWrapperAIC, { flex: 1 }]}
        >
          {otherItems.map((item, index) => (
            <OtherItems
              tag={item}
              key={index}
              index={index + 1}
              otherTags={otherTags}
              setOtherTags={setOtherTags}
            />
          ))}
        </View>
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
