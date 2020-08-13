import React, { useState, useEffect } from "react";
import { Text, View, Animated, Dimensions } from "react-native";
import NoteAvatar from "../../components/PatchNotes/noteavatar";
import Loading from "../../components/shared/loading";
import { ScrollView } from "react-native-gesture-handler";
import { pageTheme } from "../../styles/page";

export default function PatchNotes({ route, navigation }) {
  const { notes } = route.params;
  const [current, setCurrent] = useState(0);
  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 500],
    outputRange: [80, 0],
    extrapolate: "clamp",
    useNativeDriver: true,
  });

  return (
    <View>
      {notes != 0 && current != -1 ? (
        <View>
          <Animated.View
            style={[
              pageTheme.absoWrapper,
              {
                height: headerHeight,
                justifyContent: "center",
              },
            ]}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={[
                  pageTheme.fdWrapper,
                  pageTheme.centeredFlex,
                  { alignItems: "flex-end" },
                ]}
              >
                {notes.reverse().map((item, index) => (
                  <NoteAvatar
                    version={item.version}
                    index={index}
                    setCurrent={setCurrent}
                    current={current}
                    key={index}
                  />
                ))}
              </View>
            </ScrollView>
          </Animated.View>
          <Animated.View
            style={{
              height: Dimensions.get("window").height - 70,
              transform: [{ translateY: headerHeight }],
            }}
          >
            <View style={{ padding: 10 }}>
              <Text style={pageTheme.title}>
                Patch {notes[current].version}
              </Text>
              <Text style={[pageTheme.textDetail, { marginBottom: 5 }]}>
                {notes[current].date}
              </Text>
            </View>
            <Animated.ScrollView
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={1}
              alwaysBounceVertical={false}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
              )}
            >
              <View style={{ padding: 10 }}>
                {notes[current].notes.map((item, index) => (
                  <View key={index} style={pageTheme.section}>
                    <Text style={pageTheme.header}>{item.title}</Text>
                    {item.descs.map((item, index) => (
                      <View key={index}>
                        {item.title != "" ? (
                          <Text style={pageTheme.textMed}>{item.title}</Text>
                        ) : null}

                        {item.detail != "" ? (
                          <Text style={pageTheme.regularText}>
                            {item.detail}
                          </Text>
                        ) : null}

                        {item.changes.map((item, index) => (
                          <View key={index}>
                            {item != "" ? (
                              <Text style={pageTheme.textDetail}>{item}</Text>
                            ) : null}
                          </View>
                        ))}
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            </Animated.ScrollView>
          </Animated.View>
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
}
