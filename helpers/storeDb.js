import AsyncStorage from "@react-native-community/async-storage";

const storeDb = async (database) => {
  try {
    await AsyncStorage.setItem("@database", JSON.stringify(database));
  } catch (e) {
    console.log(e);
  }
};

export default storeDb;
