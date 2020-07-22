import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import items from "../../assets/items/items";
import { ScrollView } from "react-native-gesture-handler";
import GetTextHeight from "../../helpers/getTextHeight";

export default function ItemDetails({ Item }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Image style={styles.logo} source={items[Item.name]} />
        <Text style={styles.title}>{Item.name}</Text>
        <FlatList
          data={Item.contribution}
          contentContainerStyle={{
            alignSelf: "flex-end",
          }}
          renderItem={({ item }) => (
            <Text style={styles.contribution}>{item}</Text>
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
      <Text style={styles.desc}>{Item.desc}</Text>
      <View style={styles.reciperWrapper}>
        {Item.first.map((item, index) => (
          <View
            key={index}
            style={[
              styles.col,
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
            <Image style={styles.image} source={items[Item.second[index]]} />
            <Text style={styles.icon}>=</Text>
            <Image style={styles.image} source={items[Item.third[index]]} />
            <Text style={styles.detail}>{Item.detail[index]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "center",
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
  contribution: {
    fontSize: 10,
    color: "#fff",
    fontFamily: "RobotoBold",
  },
  desc: {
    marginVertical: 10,
    fontSize: 12,
    color: "#fff",
    fontFamily: "RobotoMedium",
  },
  reciperWrapper: {
    width: "100%",
  },
  col: {
    flexDirection: "row",
    alignItems: "center",
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
    paddingRight: "28%",
  },
});
