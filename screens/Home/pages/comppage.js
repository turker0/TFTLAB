import React from "react";
import { Text, View, Image } from "react-native";
import avatars from "../../../assets/avatars/avatars";
import classes from "../../../assets/classes/classes";
import origins from "../../../assets/origins/origins";
import getChampionBorderColor from "../../../helpers/getChampBorderColor";
import getChampOrigin from "../../../helpers/getChampOrigin";
import getChampionClass from "../../../helpers/getChampionClass";
import getCompTraits from "../../../helpers/getCompTraits";
import { ScrollView } from "react-native-gesture-handler";
import { pageTheme } from "../../../styles/page";
import RefactorFileName from "../../../helpers/refactorFileName";

const CompPage = ({ route, navigation }) => {
  const { name } = route.params;
  const { champions } = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      alwaysBounceVertical={false}
      bounces={false}
    >
      <View style={pageTheme.page}>
        <Text style={pageTheme.title}>{name}</Text>
        <View style={pageTheme.section}>
          <Text style={pageTheme.header}>Champions</Text>
          <View style={pageTheme.flexWrap}>
            {champions.map((item, index) => (
              <View key={index} style={{ marginRight: 10, marginBottom: 10 }}>
                <View style={{ width: 84 }}>
                  <Text style={pageTheme.regularText} numberOfLines={1}>
                    {item}
                  </Text>
                  <View
                    style={[
                      pageTheme.champAvatarWrapper,
                      {
                        backgroundColor: getChampionBorderColor(
                          RefactorFileName(item)
                        ),
                      },
                    ]}
                  >
                    <Image
                      style={pageTheme.avatarBig}
                      source={avatars[RefactorFileName(item)]}
                    />
                  </View>
                  <View style={[pageTheme.fdWrapper, { marginTop: 5 }]}>
                    <View style={pageTheme.darkBGSmall}>
                      <Image
                        style={pageTheme.avatarVerySmall}
                        source={origins[getChampOrigin(RefactorFileName(item))]}
                      />
                    </View>
                    {item != "Gangplank" && item != "Irelia" ? (
                      <View
                        style={[pageTheme.darkBGSmall, { marginHorizontal: 2 }]}
                      >
                        <Image
                          style={pageTheme.avatarVerySmall}
                          source={
                            classes[getChampionClass(RefactorFileName(item))]
                          }
                        />
                      </View>
                    ) : (
                      <View style={pageTheme.fdWrapper}>
                        <View
                          style={[
                            pageTheme.darkBGSmall,
                            { marginHorizontal: 2 },
                          ]}
                        >
                          <Image
                            style={pageTheme.avatarVerySmall}
                            source={
                              classes[
                                getChampionClass(RefactorFileName(item))[0]
                              ]
                            }
                          />
                        </View>

                        <View style={pageTheme.darkBGSmall}>
                          <Image
                            style={pageTheme.avatarVerySmall}
                            source={
                              classes[
                                getChampionClass(RefactorFileName(item))[1]
                              ]
                            }
                          />
                        </View>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={pageTheme.section}>
          <Text style={pageTheme.header}>Traits</Text>
          {getCompTraits(champions).traits.map((item, index) => (
            <View key={index}>
              {getCompTraits(champions).details[index] != 0 ? (
                <View style={pageTheme.fdWrapperAIC}>
                  <Image
                    style={pageTheme.avatarMed}
                    source={
                      origins[RefactorFileName(item, "trait")] != undefined
                        ? origins[RefactorFileName(item, "trait")]
                        : classes[RefactorFileName(item, "trait")]
                    }
                  />
                  <Text
                    style={[
                      pageTheme.regularText,
                      {
                        color: getCompTraits(champions).colors[index],
                        marginHorizontal: 10,
                      },
                    ]}
                  >
                    x{getCompTraits(champions).counts[index]}
                  </Text>
                  <Text style={[pageTheme.regularText, { flex: 1 }]}>
                    {getCompTraits(champions).details[index]}
                  </Text>
                </View>
              ) : null}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CompPage;
