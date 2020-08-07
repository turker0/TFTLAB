import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Origins from "../../assets/origins/origins";
import avatars from "../../assets/avatars/avatars";
import getChampBorderColor from "../../helpers/getChampBorderColor";

export default function ItemBuilder({ route }) {
  const { origins } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Origin Builder</Text>
        {origins.map((item, index) => (
          <View key={index} style={{ marginVertical: 25 }}>
            <Text style={styles.classTitle}>{item.name}</Text>
            <View style={styles.classesWrapper}>
              <Image style={styles.classAvatar} source={Origins[item.name]} />
              <View style={styles.unitWrapper}>
                {item.units.map((item, index) => (
                  <View
                    style={[
                      styles.unitBackground,
                      { backgroundColor: getChampBorderColor(item) },
                    ]}
                    key={index}
                  >
                    <Image style={styles.unitAvatar} source={avatars[item]} />
                  </View>
                ))}
              </View>
            </View>
            <View>
              <Text style={[styles.classTitle, { fontSize: 18 }]}>Bonuses</Text>
              {item.detail.map((item2, index2) => (
                <View key={index2} style={styles.bonusWrapper}>
                  <Text style={styles.bonusText}>x{item.count[index2]}</Text>
                  <Text style={[styles.bonusText, { marginLeft: 15 }]}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 32,
    fontFamily: "RobotoBold",
    color: "#E8ECEE",
    textTransform: "capitalize",
    marginTop: 100,
  },
  classesWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  classAvatar: {
    width: 54,
    height: 54,
  },
  classTitle: {
    fontSize: 24,
    color: "#E8ECEE",
    fontFamily: "RobotoMedium",
    textTransform: "capitalize",
    marginVertical: 10,
  },
  unitWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  unitBackground: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginHorizontal: 2.5,
    marginTop: 5,
  },
  unitAvatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  bonusWrapper: {
    flexDirection: "row",
    backgroundColor: "#1B475F",
    marginVertical: 3,
    padding: 5,
    borderRadius: 4,
  },
  bonusText: {
    fontSize: 16,
    color: "#B9C6CB",
    fontFamily: "RobotoRegular",
    marginLeft: 5,
  },
});
