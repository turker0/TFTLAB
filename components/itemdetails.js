import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import items from "../assets/items/items";
import { ScrollView } from "react-native-gesture-handler";
import GetTextHeight from "../helpers/getTextHeight";

export default function ItemDetails({ Item }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Image style={styles.logo} source={items[Item.name]} />
        <Text style={styles.title}>{Item.name}</Text>
        <View style={styles.contributionWrapper}>
          <FlatList
            data={Item.contribution}
            renderItem={({ item }) => (
              <Text style={styles.contribution}>{item}</Text>
            )}
            keyExtractor={(index) => index}
          />
        </View>
      </View>
      <Text style={styles.desc}>{Item.desc}</Text>
      <ScrollView>
        <View style={styles.reciperWrapper}>
          <View style={styles.col}>
            <FlatList
              data={Item.first}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    styles.fdWrapper,
                    {
                      height: GetTextHeight(
                        Item.detail[index],
                        Dimensions.get("window").width
                      ),
                    },
                  ]}
                >
                  <Image style={styles.image} source={items[item]} />
                  <Text style={styles.icon}>+</Text>
                </View>
              )}
              keyExtractor={(index) => index}
            />
          </View>
          <View style={styles.col}>
            <FlatList
              data={Item.second}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    styles.fdWrapper,
                    {
                      height: GetTextHeight(
                        Item.detail[index],
                        Dimensions.get("window").width
                      ),
                    },
                  ]}
                >
                  <Image style={styles.image} source={items[item]} />
                  <Text style={styles.icon}>=</Text>
                </View>
              )}
              keyExtractor={(index) => index}
            />
          </View>
          <View style={styles.col}>
            <FlatList
              data={Item.third}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    styles.fdWrapper,
                    {
                      height: GetTextHeight(
                        Item.detail[index],
                        Dimensions.get("window").width
                      ),
                    },
                  ]}
                >
                  <Image style={styles.image} source={items[item]} />
                </View>
              )}
              keyExtractor={(index) => index}
            />
          </View>
          <View style={[styles.col, { flex: 1 }]}>
            <FlatList
              data={Item.detail}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    styles.fdWrapper,
                    {
                      height: GetTextHeight(
                        Item.detail[index],
                        Dimensions.get("window").width
                      ),
                    },
                  ]}
                >
                  <Text style={styles.detail}>{item}</Text>
                </View>
              )}
              keyExtractor={(index) => index}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 10,
    height: (Dimensions.get("window").width * 0.75 - 60) / 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "RobotoBlack",
    color: "#fff",
    textTransform: "capitalize",
    marginLeft: 5,
    letterSpacing: 1,
  },
  contributionWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: "5%",
  },
  contribution: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "RobotoBold",
  },
  desc: {
    marginTop: 10,
    fontSize: 12,
    color: "#fff",
    fontFamily: "RobotoMedium",
  },
  reciperWrapper: {
    width: "100%",
    flexDirection: "row",
  },
  col: {
    marginTop: 5,
  },
  fdWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 10,
    height: (Dimensions.get("window").width * 0.75 - 60) / 10,
  },
  icon: {
    fontSize: 10,
    color: "#fff",
    marginHorizontal: 3,
    fontFamily: "RobotoBlack",
  },
  detail: {
    fontSize: 10,
    color: "#fff",
    marginLeft: 10,
  },
});
