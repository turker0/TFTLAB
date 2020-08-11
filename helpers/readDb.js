import AsyncStorage from "@react-native-community/async-storage";
const readDb = async () => {
  try {
    const db = await AsyncStorage.getItem("@database");
    return db;
  } catch (e) {
    console.log(e);
  }
};

export default readDb;
