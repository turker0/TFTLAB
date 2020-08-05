import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import avatars from "../../../assets/avatars/avatars";
import classes from "../../../assets/classes/classes";
import origins from "../../../assets/origins/origins";
import getChampionBorderColor from "../../../helpers/getChampBorderColor";
import getChampOrigin from "../../../helpers/getChampOrigin";
import getChampionClass from "../../../helpers/getChampionClass";
import getCompTraits from "../../../helpers/getCompTraits";
import { ScrollView } from "react-native-gesture-handler";

const CompPage = ({ route, navigation }) => {
  const { name } = route.params;
  const { champions } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        alwaysBounceVertical={false}
        bounces={false}
      >
        <View style={styles.section}>
          <Text style={styles.header}>Champions</Text>
          <View style={styles.avatarWrapper}>
            {champions.map((item, index) => (
              <View key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginRight: 10,
                  }}
                >
                  <View
                    style={[
                      styles.avatarBorder,
                      { backgroundColor: getChampionBorderColor(item) },
                    ]}
                  >
                    <Image style={styles.avatar} source={avatars[item]} />
                  </View>
                  <View style={styles.traitAvatarWrapper}>
                    <View style={styles.traitBorder}>
                      <Image
                        style={styles.traitAvatar}
                        source={origins[getChampOrigin(item)]}
                      />
                    </View>
                    {item != "Gangplank" && item != "Irelia" ? (
                      <View style={styles.traitBorder}>
                        <Image
                          style={styles.traitAvatar}
                          source={classes[getChampionClass(item)]}
                        />
                      </View>
                    ) : (
                      <View>
                        <View style={styles.traitBorder}>
                          <Image
                            style={styles.traitAvatar}
                            source={classes[getChampionClass(item)[0]]}
                          />
                        </View>
                        <View style={styles.traitBorder}>
                          <Image
                            style={styles.traitAvatar}
                            source={classes[getChampionClass(item)[1]]}
                          />
                        </View>
                      </View>
                    )}
                  </View>
                </View>
                <Text style={styles.avatarTitle}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Traits</Text>
          {getCompTraits(champions).traits.map((item, index) => (
            <View key={index}>
              {getCompTraits(champions).details[index] != 0 ? (
                <View style={styles.traitWrapper}>
                  <Image
                    style={styles.trait}
                    source={
                      origins[item] != undefined ? origins[item] : classes[item]
                    }
                  />
                  <Text
                    style={[
                      styles.traitCount,
                      { color: getCompTraits(champions).colors[index] },
                    ]}
                  >
                    ({getCompTraits(champions).counts[index]})
                  </Text>
                  <Text style={styles.traitDetail}>
                    {getCompTraits(champions).details[index]}
                  </Text>
                </View>
              ) : null}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontFamily: "RobotoBold",
    fontSize: 24,
    textTransform: "capitalize",
    letterSpacing: 1,
    color: "#ffffffe6",
  },
  section: {
    marginVertical: 20,
  },
  header: {
    fontSize: 28,
    fontFamily: "RobotoBold",
    color: "#E8ECEE",
    textTransform: "capitalize",
    marginVertical: 10,
  },
  avatarWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  avatarBorder: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 72,
    height: 72,
  },
  avatarTitle: {
    fontSize: 14,
    fontFamily: "RobotoRegular",
    color: "#B9C7CB",
    marginTop: 2,
  },
  traitAvatarWrapper: {
    alignItems: "center",
    marginLeft: 5,
  },
  traitBorder: {
    width: 20,
    height: 20,
    backgroundColor: "#1B475F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 3,
  },
  traitAvatar: {
    width: 16,
    height: 16,
  },
  traitWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  trait: {
    width: 32,
    height: 32,
  },
  traitCount: {
    fontSize: 16,
    fontFamily: "RobotoBold",
    textTransform: "capitalize",
    marginHorizontal: 10,
  },
  traitDetail: {
    fontSize: 14,
    fontFamily: "RobotoRegular",
    color: "#B9C7CB",
    width: Dimensions.get("window").width * 0.75,
  },
});
