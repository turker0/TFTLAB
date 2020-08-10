import React from "react";
import { Text, View, Image, ScrollView, Animated } from "react-native";
import items from "../../../assets/items/items";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { pageTheme } from "../../../styles/page";
import LineWithOrangeDot from "../../../components/shared/linewithorangedot";
import RefactorFileName from "../../../helpers/refactorFileName";

const ItemPage = ({ route, navigation }) => {
  const { name } = route.params;
  const { desc } = route.params;
  const { contribution } = route.params;
  const { first } = route.params;
  const { second } = route.params;
  const { third } = route.params;
  const { detail } = route.params;

  const scrollY = new Animated.Value(0);
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [175, 35],
    extrapolate: "clamp",
    useNativeDriver: true,
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[pageTheme.absoWrapper, { height: headerHeight, padding: 10 }]}
      >
        <Image
          style={pageTheme.avatarBig}
          resizeMode="contain"
          source={items[RefactorFileName(name)]}
        />

        <Text style={pageTheme.title}>{name}</Text>
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          paddingBottom: headerHeight,
          transform: [{ translateY: headerHeight }],
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          alwaysBounceVertical={false}
          bounces={false}
          style={{ padding: 10 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={pageTheme.section}>
            <Text style={pageTheme.header}>Description</Text>
            <Text style={pageTheme.regularText}>{desc}</Text>
          </View>
          <View style={pageTheme.section}>
            <Text style={pageTheme.header}>Contribution</Text>
            {contribution.map((item, index) =>
              item != 0 ? (
                <View style={pageTheme.fdWrapperAIC} key={index}>
                  <LineWithOrangeDot text={item} />
                </View>
              ) : (
                <Text style={pageTheme.regularText} key={index}>
                  No contribution.
                </Text>
              )
            )}
          </View>
          <View style={pageTheme.section}>
            <Text style={pageTheme.header}>Recipe</Text>
            {first.map((item, index) => (
              <View style={{ marginVertical: 15 }} key={index}>
                <View style={[pageTheme.fdWrapperAIC, { marginTop: 25 }]}>
                  <View style={pageTheme.darkBGMedium}>
                    <Image
                      style={pageTheme.avatarMed}
                      resizeMode="contain"
                      source={items[RefactorFileName(item)]}
                    />
                  </View>
                  <Feather name="plus" size={24} color="#E8ECEE" />
                  <View style={pageTheme.darkBGMedium}>
                    <Image
                      style={pageTheme.avatarMed}
                      resizeMode="contain"
                      source={items[RefactorFileName(second[index])]}
                    />
                  </View>
                  <MaterialCommunityIcons
                    name="equal"
                    size={24}
                    color="#E8ECEE"
                  />
                  <View style={pageTheme.darkBGMedium}>
                    <Image
                      style={pageTheme.avatarMed}
                      resizeMode="contain"
                      source={items[RefactorFileName(third[index])]}
                    />
                  </View>
                </View>
                <View
                  style={[
                    pageTheme.darkBGSmall,
                    { alignSelf: "flex-start", marginTop: 12.5 },
                  ]}
                >
                  <Text
                    style={[pageTheme.regularText, { paddingHorizontal: 5 }]}
                  >
                    {detail[index]}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

export default ItemPage;
