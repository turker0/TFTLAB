import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import classes from "../../assets/classes/classes";
import origins from "../../assets/origins/origins";
import checkIsClass from "../../helpers/checkIsClass";
import getBorderColor from "../../helpers/getBorderColor";

export default function TraitDetails({ name, count, desc, combo }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={checkIsClass(name) ? classes[name] : origins[name]}
        />
        <Text style={styles.title}>{name}</Text>
      </View>
      <Text style={styles.desc}>{desc}</Text>
      <FlatList
        data={combo}
        renderItem={({ item }) => (
          <View style={styles.comboWrapper}>
            <Text
              style={[
                styles.num,
                {
                  backgroundColor: getBorderColor(name, item.num),
                  opacity: count >= item.num ? 1 : 0.5,
                },
              ]}
            >
              {item.num}
            </Text>
            <Text
              style={[
                styles.detail,
                { color: count >= item.num ? "#fff" : "#bdc3c7" },
              ]}
            >
              {item.detail}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  logo: {
    width: Dimensions.get("window").width * 0.06,
    height: Dimensions.get("window").width * 0.06,
  },
  title: {
    fontSize: 18,
    fontFamily: "RobotoBlack",
    color: "#fff",
    textTransform: "capitalize",
    marginLeft: 5,
  },
  desc: {
    alignSelf: "center",
    textAlign: "center",
    width: "80%",
    fontSize: 12,
    fontFamily: "RobotoRegular",
    color: "#fff",
    marginBottom: 10,
  },
  comboWrapper: {
    marginVertical: 3,
    width: "40%",
    marginLeft: "10%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  num: {
    fontSize: 10,
    color: "#fff",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontFamily: "RobotoBlack",
  },
  detail: {
    marginLeft: 5,
    fontSize: 12,
    color: "#fff",
    fontFamily: "RobotoRegular",
  },
});
