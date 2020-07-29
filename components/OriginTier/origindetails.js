import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import origins from "../../assets/origins/origins";
import GetTextHeight from "../../helpers/getTextHeight";
import getTraitBorderColor from "../../helpers/getTraitBorderColor";
import avatars from "../../assets/avatars/avatars";

export default function OriginDetail({ origin }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Image style={styles.logo} source={origins[origin.name]} />
        <Text style={styles.title}>{origin.name}</Text>
      </View>
      {origin.desc != "" ? (
        <Text style={styles.desc}>{origin.desc}</Text>
      ) : null}
      <View style={styles.reciperWrapper}>
        {origin.detail.map((item, index) => (
          <View
            key={index}
            style={[
              styles.col,
              {
                height: GetTextHeight(
                  origin.detail[index],
                  Dimensions.get("window").width
                ),
              },
            ]}
          >
            <Text
              style={[
                styles.num,
                {
                  backgroundColor: getTraitBorderColor(
                    origin.name,
                    origin.count[index]
                  ),
                },
              ]}
            >
              {origin.count[index]}
            </Text>
            <Text style={styles.detail}>{origin.detail[index]}</Text>
          </View>
        ))}
      </View>
      <View style={styles.unitWrapper}>
        {origin.units.map((item, index) => (
          <Image style={styles.unit} source={avatars[item]} key={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 18,
    fontFamily: "RobotoBlack",
    color: "#fff",
    textTransform: "capitalize",
    marginLeft: 5,
    letterSpacing: 1,
  },
  desc: {
    padding: 10,
    fontSize: 12,
    color: "#fff",
    fontFamily: "RobotoMedium",
    textAlign: "center",
  },
  col: {
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    marginLeft: 5,
    fontSize: 12,
    color: "#fff",
    fontFamily: "RobotoRegular",
  },

  num: {
    fontSize: 10,
    color: "#fff",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontFamily: "RobotoBlack",
  },
  reciperWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 50,
  },

  unitWrapper: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  unit: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 6,
    height: (Dimensions.get("window").width * 0.75 - 60) / 6,
    margin: "1%",
  },
});
