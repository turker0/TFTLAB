import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Items from "../../assets/items/items";

export default function ItemBuilder({ route }) {
  const { items } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: 100 }}>
          <Text style={styles.title}>Item Builder</Text>
          {items.map((item, index) => (
            <View style={styles.itemWrapper} key={index}>
              <View style={styles.itemTitleWrapper}>
                <View>
                  <Image style={styles.itemAvatar} source={Items[item.name]} />
                  <View style={{ marginTop: 10 }}>
                    {item.contribution.map((item2, index2) => (
                      <View style={styles.contributionWrapper}>
                        <Text style={styles.icon}>⦿</Text>
                        <Text key={index2} style={styles.contribution}>
                          {item2}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={styles.itemDescWrapper}>
                  <Text style={styles.itemTitle}>{item.name}</Text>
                  <Text style={styles.itemDesc}>{item.desc}</Text>
                </View>
              </View>

              <View style={{ marginTop: 25, marginBottom: 15 }}>
                <Text style={styles.header}>Recipe</Text>
                {item.first.map((item2, index2) => (
                  <View style={styles.recipeWrapper}>
                    <Image style={styles.recipeAvatar} source={Items[item2]} />
                    <Image
                      style={styles.recipeAvatar}
                      source={Items[item.second[index2]]}
                    />
                    <Image
                      style={styles.recipeAvatar}
                      source={Items[item.third[index2]]}
                    />
                    <Text style={styles.recipeDetail}>
                      {item.detail[index2]}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
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
    paddingBottom: 25,
  },
  section: {
    paddingVertical: 25,
  },
  itemWrapper: {
    alignItems: "flex-start",
    marginVertical: 25,
  },
  itemTitleWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  itemAvatar: {
    height: 52,
    width: 52,
  },
  itemTitle: {
    fontSize: 18,
    color: "#E8ECEE",
    fontFamily: "RobotoMedium",
    textTransform: "capitalize",
  },
  itemDescWrapper: {
    marginLeft: 5,
  },
  itemDesc: {
    color: "#B9C6CB",
    fontSize: 16,
    fontFamily: "RobotoRegular",
  },
  contributionWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  contribution: {
    color: "#88a0a7",
    fontSize: 12,
    fontFamily: "RobotoRegular",
  },
  header: {
    fontSize: 18,
    fontFamily: "RobotoMedium",
    color: "#E8ECEE",
  },
  recipeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    borderRadius: 4,
    marginVertical: 5,
  },
  recipeAvatar: {
    width: 28,
    height: 28,
    margin: 3,
  },
  recipeDetail: {
    fontSize: 14,
    fontFamily: "RobotoRegular",
    color: "#E8ECEE",
    backgroundColor: "#1B475F",
    width: Dimensions.get("window").width - 130,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
    fontSize: 10,
    fontFamily: "RobotoRegular",
    color: "#f48024",
  },
});
