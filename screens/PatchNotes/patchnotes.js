import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import NoteAvatar from "../../components/PatchNotes/noteavatar";
import Loading from "../../components/shared/loading";
import { ScrollView } from "react-native-gesture-handler";
const getNotes = async (setIsFetched, setNotes, setCurrent) => {
  fetch("http://192.168.1.5:3000/api/dynamic/patchnotes/", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setNotes(resJson.reverse());
      setCurrent(0);
    })
    .catch((error) => console.error(error));
  setIsFetched(true);
};

export default function PatchNotes() {
  const [isFetched, setIsFetched] = useState(false);
  const [notes, setNotes] = useState(0);
  const [current, setCurrent] = useState(-1);
  const refScrollView = useRef(null);
  const scrollY = new Animated.Value(0);
  useEffect(() => {
    if (!isFetched) getNotes(setIsFetched, setNotes, setCurrent);
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 500],
    outputRange: [80, 0],
    extrapolate: "clamp",
    useNativeDriver: true,
  });

  return (
    <View style={styles.container}>
      {notes != 0 && current != -1 ? (
        <View>
          <Animated.View style={[styles.notes, { height: headerHeight }]}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {notes.map((item, index) => (
                <NoteAvatar
                  version={item.version}
                  index={index}
                  setCurrent={setCurrent}
                  ScrollView={refScrollView}
                  current={current}
                  key={index}
                />
              ))}
            </ScrollView>
          </Animated.View>
          <Animated.View
            style={{
              marginTop: 10,
              transform: [{ translateY: headerHeight }],
            }}
          >
            <View style={[styles.titleWrapper]}>
              <Text style={styles.title}>Patch {notes[current].version}</Text>
              <Text style={styles.date}>{notes[current].date}</Text>
            </View>
            <Animated.ScrollView
              showsVerticalScrollIndicator={false}
              ref={refScrollView}
              scrollEventThrottle={1}
              alwaysBounceVertical={false}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
              )}
            >
              <View style={{ overflow: "hidden" }}>
                {notes[current].notes.map((item, index) => (
                  <View style={styles.note} key={index}>
                    <Text style={styles.patchTitle}>{item.title}</Text>
                    {item.descs.map((item, index) => (
                      <View key={index}>
                        {item.title != "" ? (
                          <Text style={styles.title2}>{item.title}</Text>
                        ) : null}

                        {item.detail != "" ? (
                          <Text style={styles.detail}>{item.detail}</Text>
                        ) : null}

                        {item.changes.map((item, index) => (
                          <View key={index}>
                            {item != "" ? (
                              <View style={styles.changesWrapper}>
                                <Text style={styles.icon}>⦿</Text>
                                <Text style={styles.changes}>{item}</Text>
                              </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  notes: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    overflow: "hidden",
    paddingTop: 15,
    paddingHorizontal: Dimensions.get("window").width * 0.05,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  patchWrapper: {
    width: "100%",
    height: Dimensions.get("window").height - 140,
  },
  titleWrapper: {
    justifyContent: "center",
    marginLeft: Dimensions.get("window").width * 0.05,
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: "RobotoBlack",
    color: "#ffffffe6",
    textTransform: "capitalize",
    letterSpacing: 2,
  },
  date: {
    fontSize: 14,
    color: "#88a0a7",
    fontFamily: "RobotoRegular",
  },
  note: {
    borderBottomColor: "#123040",
    borderBottomWidth: 5,
    marginVertical: 5,
    paddingHorizontal: Dimensions.get("window").width * 0.05,
    paddingVertical: Dimensions.get("window").width * 0.03,
    alignItems: "flex-start",
  },
  patchTitle: {
    fontSize: 28,
    color: "#E8ECEE",
    textTransform: "capitalize",

    fontFamily: "RobotoBold",
    borderBottomWidth: 2,
    borderBottomColor: "#f48024",
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 10,
  },
  title2: {
    fontSize: 24,
    fontFamily: "RobotoMedium",
    color: "#DCE3E5",
    marginVertical: 5,
    marginTop: 15,
    marginBottom: 5,
  },
  detail: {
    fontSize: 18,
    fontFamily: "RobotoRegular",
    color: "#B9C6CB",
    marginVertical: 5,
  },
  changesWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  icon: {
    marginRight: 5,
    fontSize: 10,
    fontFamily: "RobotoRegular",
    color: "#f48024",
  },
  changes: {
    fontSize: 18,
    fontFamily: "RobotoRegular",
    color: "#88a0a7",
  },
});
