import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NoteAvatar from "../components/noteavatar";

const getNotes = async (setIsFetched, setNotes, setCurrent) => {
  fetch("http://192.168.1.5:3000/api/patchnote/", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((resJson) => {
      setNotes(resJson);
      setCurrent(0);
    })
    .catch((error) => console.error(error));
  setIsFetched(true);
};

export default function PatchNotes() {
  const [isFetched, setIsFetched] = useState(false);
  const [notes, setNotes] = useState(0);
  const [current, setCurrent] = useState(-1);
  useEffect(() => {
    if (!isFetched) getNotes(setIsFetched, setNotes, setCurrent);
  });
  if (isFetched && current == 0) {
    return (
      <View style={styles.container}>
        <View style={styles.notes}>
          <Text style={styles.patchnotes}>PATCH NOTES</Text>
          <FlatList
            data={notes}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <NoteAvatar
                version={item.version}
                index={index}
                setCurrent={setCurrent}
              />
            )}
            keyExtractor={(item, index) => String(index)}
          />
        </View>
        <View style={styles.patchWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Patch {notes[current].version}</Text>
              <Text style={styles.date}>{notes[current].date}</Text>
            </View>
            {notes[current].notes.map((item) => (
              <View style={styles.note}>
                <Text style={styles.patchTitle}>{item.title}</Text>
                {item.descs.map((item) => (
                  <View>
                    {item.title != "" ? (
                      <Text style={styles.title2}>{item.title}</Text>
                    ) : null}

                    {item.detail != "" ? (
                      <Text style={styles.detail}>{item.detail}</Text>
                    ) : null}

                    {item.changes.map((item) => (
                      <View>
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
          </ScrollView>
        </View>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 25,
    backgroundColor: "#123040",
  },
  notes: {
    width: "90%",
    height: 70,
  },
  patchnotes: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontFamily: "RobotoBlack",
    letterSpacing: 5,
  },
  patchWrapper: {
    flex: 1,
  },
  titleWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontFamily: "RobotoBlack",
    letterSpacing: 3,
  },
  date: {
    fontSize: 12,
    color: "#88a0a7",
    fontFamily: "RobotoRegular",
  },
  note: {
    backgroundColor: "#34495E",
    padding: Dimensions.get("window").width * 0.04,
    elevation: 5,
    marginVertical: 5,
    borderRadius: 4,
  },
  patchTitle: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "RobotoBold",
    textAlign: "center",
  },
  title2: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.75,
    fontFamily: "RobotoMedium",
    marginTop: 15,
  },
  detail: {
    fontSize: 14,
    color: "#88a0a7",
    fontFamily: "RobotoRegular",
    marginBottom: 5,
  },
  changesWrapper: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
    fontSize: 10,
    fontFamily: "RobotoRegular",
    paddingTop: 7,
    color: "#88a0a7",
  },
  changes: {
    fontSize: 14,
    color: "#88a0a7",
    fontFamily: "RobotoRegular",
    marginTop: 5,
  },
});
