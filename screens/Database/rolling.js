import React from "react";
import { View, Text } from "react-native";
import { pageTheme } from "../../styles/page";
import { ScrollView } from "react-native-gesture-handler";

export default function Rolling() {
  const rolling = {
    level: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    tier1: [100, 100, 75, 55, 40, 25, 19, 14, 10],
    tier2: [0, 0, 25, 30, 35, 35, 30, 20, 15],
    tier3: [0, 0, 0, 15, 20, 30, 35, 35, 30],
    tier4: [0, 0, 0, 0, 5, 10, 15, 25, 30],
    tier5: [0, 0, 0, 0, 0, 0, 0, 1, 6, 15],
    tags: ["Level", "Tier1", "Tier2", "Tier3", "Tier4", "Tier5"],
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[pageTheme.page, { padding: 0 }]}>
        <Text style={[pageTheme.title, { padding: 10 }]}>
          Champion Pool and Rolling Chances
        </Text>
        <View style={pageTheme.section}>
          <View
            style={[
              pageTheme.fdWrapperAIC,
              {
                margin: 2.5,
                paddingHorizontal: 10,
                paddingVertical: 10,
              },
            ]}
          >
            {rolling.tags.map((item, index) => (
              <Text
                style={[
                  pageTheme.regularText,
                  { margin: 2.5, flex: 1, color: "#fff" },
                ]}
                key={index}
              >
                {item}
              </Text>
            ))}
          </View>

          {rolling.tier1.map((item, index) => (
            <View
              key={index}
              style={[
                pageTheme.fdWrapperAIC,
                {
                  margin: 2.5,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  backgroundColor: index % 2 == 0 ? "#102531" : "#123040",
                },
              ]}
            >
              <Text style={[pageTheme.regularText, { margin: 2.5, flex: 1 }]}>
                {rolling.level[index]}
              </Text>
              <Text style={[pageTheme.regularText, { margin: 2.5, flex: 1 }]}>
                {item}
              </Text>
              <Text style={[pageTheme.regularText, { margin: 2.5, flex: 1 }]}>
                {rolling.tier2[index]}
              </Text>
              <Text style={[pageTheme.regularText, { margin: 2.5, flex: 1 }]}>
                {rolling.tier3[index]}
              </Text>
              <Text style={[pageTheme.regularText, { margin: 2.5, flex: 1 }]}>
                {rolling.tier4[index]}
              </Text>
              <Text style={[pageTheme.regularText, { margin: 2.5, flex: 1 }]}>
                {rolling.tier5[index]}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
