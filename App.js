import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import HomeBottomRoute from "./routes/Home/homebottomroute";
import AsyncStorage from "@react-native-community/async-storage";
import Updater from "./screens/Updater/updater";
import Loader from "./screens/Loader/loader";
import { global } from "./styles/global";
import { Asset } from "expo-asset";

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: global.theme.backgroundColor,
  },
};

const readFile = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const writeFile = async (key, value) => {
  try {
    const file = JSON.stringify(value);
    await AsyncStorage.setItem(key, file).then(() => {});
  } catch (e) {
    console.log(e);
  }
};

const App = () => {
  const [loaded, error] = useFonts({
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  const cacheResourcesAsync = async () => {
    const avatars = [
      require("./assets/avatars/Ahri.png"),
      require("./assets/avatars/Annie.png"),
      require("./assets/avatars/Ashe.png"),
      require("./assets/avatars/AurelionSol.png"),
      require("./assets/avatars/Bard.png"),
      require("./assets/avatars/Blitzcrank.png"),
      require("./assets/avatars/Caitlyn.png"),
      require("./assets/avatars/Cassiopeia.png"),
      require("./assets/avatars/Darius.png"),
      require("./assets/avatars/Ekko.png"),
      require("./assets/avatars/Ezreal.png"),
      require("./assets/avatars/Fiora.png"),
      require("./assets/avatars/Fizz.png"),
      require("./assets/avatars/Gangplank.png"),
      require("./assets/avatars/Gnar.png"),
      require("./assets/avatars/Graves.png"),
      require("./assets/avatars/Illaoi.png"),
      require("./assets/avatars/Irelia.png"),
      require("./assets/avatars/Janna.png"),
      require("./assets/avatars/JarvanIV.png"),
      require("./assets/avatars/Jayce.png"),
      require("./assets/avatars/Jhin.png"),
      require("./assets/avatars/Jinx.png"),
      require("./assets/avatars/Karma.png"),
      require("./assets/avatars/KogMaw.png"),
      require("./assets/avatars/Leona.png"),
      require("./assets/avatars/Lucian.png"),
      require("./assets/avatars/Lulu.png"),
      require("./assets/avatars/Malphite.png"),
      require("./assets/avatars/MasterYi.png"),
      require("./assets/avatars/Mordekaiser.png"),
      require("./assets/avatars/Nautilus.png"),
      require("./assets/avatars/Neeko.png"),
      require("./assets/avatars/Nocturne.png"),
      require("./assets/avatars/Poppy.png"),
      require("./assets/avatars/Rakan.png"),
      require("./assets/avatars/Riven.png"),
      require("./assets/avatars/Rumble.png"),
      require("./assets/avatars/Shaco.png"),
      require("./assets/avatars/Shen.png"),
      require("./assets/avatars/Soraka.png"),
      require("./assets/avatars/Syndra.png"),
      require("./assets/avatars/Teemo.png"),
      require("./assets/avatars/Thresh.png"),
      require("./assets/avatars/TwistedFate.png"),
      require("./assets/avatars/Urgot.png"),
      require("./assets/avatars/Vayne.png"),
      require("./assets/avatars/Vi.png"),
      require("./assets/avatars/Viktor.png"),
      require("./assets/avatars/Wukong.png"),
      require("./assets/avatars/Xayah.png"),
      require("./assets/avatars/Xerath.png"),
      require("./assets/avatars/XinZhao.png"),
      require("./assets/avatars/Yasuo.png"),
      require("./assets/avatars/Zed.png"),
      require("./assets/avatars/Ziggs.png"),
      require("./assets/avatars/Zoe.png"),
    ];

    const builder = [require("./assets/builder/plus.png")];

    const classes = [
      require("./assets/classes/blademaster.png"),
      require("./assets/classes/blaster.png"),
      require("./assets/classes/brawler.png"),
      require("./assets/classes/demolitionist.png"),
      require("./assets/classes/infiltrator.png"),
      require("./assets/classes/manareaver.png"),
      require("./assets/classes/mercenary.png"),
      require("./assets/classes/mystic.png"),
      require("./assets/classes/paragon.png"),
      require("./assets/classes/protector.png"),
      require("./assets/classes/sniper.png"),
      require("./assets/classes/sorcerer.png"),
      require("./assets/classes/starship.png"),
      require("./assets/classes/vanguard.png"),
    ];

    const items = [
      require("./assets/items/BFSword.png"),
      require("./assets/items/Bloodthirster.png"),
      require("./assets/items/BlueBuff.png"),
      require("./assets/items/BrambleVest.png"),
      require("./assets/items/ChainVest.png"),
      require("./assets/items/ChaliceofPower.png"),
      require("./assets/items/Deathblade.png"),
      require("./assets/items/DragonsClaw.png"),
      require("./assets/items/ForceofNature.png"),
      require("./assets/items/FrozenHeart.png"),
      require("./assets/items/GiantsBelt.png"),
      require("./assets/items/GiantSlayer.png"),
      require("./assets/items/GuardianAngel.png"),
      require("./assets/items/GuinsoosRageblade.png"),
      require("./assets/items/HandofJustice.png"),
      require("./assets/items/HextechGunblade.png"),
      require("./assets/items/InfinityEdge.png"),
      require("./assets/items/IonicSpark.png"),
      require("./assets/items/JeweledGauntlet.png"),
      require("./assets/items/LastWhisper.png"),
      require("./assets/items/LocketoftheIronSolari.png"),
      require("./assets/items/LudensEcho.png"),
      require("./assets/items/Morellonomicon.png"),
      require("./assets/items/NeedlesslyLargeRod.png"),
      require("./assets/items/NegatronCloak.png"),
      require("./assets/items/Quicksilver.png"),
      require("./assets/items/RabadonsDeathcap.png"),
      require("./assets/items/RapidFirecannon.png"),
      require("./assets/items/RecurveBow.png"),
      require("./assets/items/RedBuff.png"),
      require("./assets/items/Redemption.png"),
      require("./assets/items/RunaansHurricane.png"),
      require("./assets/items/ShroudofStillness.png"),
      require("./assets/items/SparringGloves.png"),
      require("./assets/items/Spatula.png"),
      require("./assets/items/SpearofShojin.png"),
      require("./assets/items/StatikkShiv.png"),
      require("./assets/items/SwordBreaker.png"),
      require("./assets/items/TearoftheGoddess.png"),
      require("./assets/items/ThiefsGloves.png"),
      require("./assets/items/TitansResolve.png"),
      require("./assets/items/TrapClaw.png"),
      require("./assets/items/WarmogsArmor.png"),
      require("./assets/items/ZekesHerald.png"),
      require("./assets/items/Zephyr.png"),
      require("./assets/items/ZzRotPortal.png"),
      require("./assets/items/BladeoftheRuinedKing.png"),
      require("./assets/items/RebelMedal.png"),
      require("./assets/items/ProtectorsChestguard.png"),
      require("./assets/items/BattlecastPlating.png"),
      require("./assets/items/CelestialOrb.png"),
      require("./assets/items/InfiltratorsTalons.png"),
      require("./assets/items/DarkStarsHeart.png"),
      require("./assets/items/StarGuardiansCharm.png"),
    ];

    const origins = [
      require("./assets/origins/astro.png"),
      require("./assets/origins/battlecast.png"),
      require("./assets/origins/celestial.png"),
      require("./assets/origins/chrono.png"),
      require("./assets/origins/cybernetic.png"),
      require("./assets/origins/darkstar.png"),
      require("./assets/origins/mechpilot.png"),
      require("./assets/origins/rebel.png"),
      require("./assets/origins/spacepirate.png"),
      require("./assets/origins/starguardian.png"),
    ];

    const skills = [
      require("./assets/skills/Ahri.png"),
      require("./assets/skills/Annie.png"),
      require("./assets/skills/Ashe.png"),
      require("./assets/skills/AurelionSol.png"),
      require("./assets/skills/Bard.png"),
      require("./assets/skills/Blitzcrank.png"),
      require("./assets/skills/Caitlyn.png"),
      require("./assets/skills/Cassiopeia.png"),
      require("./assets/skills/Darius.png"),
      require("./assets/skills/Ekko.png"),
      require("./assets/skills/Ezreal.png"),
      require("./assets/skills/Fiora.png"),
      require("./assets/skills/Fizz.png"),
      require("./assets/skills/Gangplank.png"),
      require("./assets/skills/Gnar.png"),
      require("./assets/skills/Graves.png"),
      require("./assets/skills/Illaoi.png"),
      require("./assets/skills/Irelia.png"),
      require("./assets/skills/Janna.png"),
      require("./assets/skills/JarvanIV.png"),
      require("./assets/skills/Jayce.png"),
      require("./assets/skills/Jhin.png"),
      require("./assets/skills/Jinx.png"),
      require("./assets/skills/Karma.png"),
      require("./assets/skills/KogMaw.png"),
      require("./assets/skills/Leona.png"),
      require("./assets/skills/Lucian.png"),
      require("./assets/skills/Lulu.png"),
      require("./assets/skills/Malphite.png"),
      require("./assets/skills/MasterYi.png"),
      require("./assets/skills/Mordekaiser.png"),
      require("./assets/skills/Nautilus.png"),
      require("./assets/skills/Neeko.png"),
      require("./assets/skills/Nocturne.png"),
      require("./assets/skills/Poppy.png"),
      require("./assets/skills/Rakan.png"),
      require("./assets/skills/Riven.png"),
      require("./assets/skills/Rumble.png"),
      require("./assets/skills/Shaco.png"),
      require("./assets/skills/Shen.png"),
      require("./assets/skills/Soraka.png"),
      require("./assets/skills/Syndra.png"),
      require("./assets/skills/Teemo.png"),
      require("./assets/skills/Thresh.png"),
      require("./assets/skills/TwistedFate.png"),
      require("./assets/skills/Urgot.png"),
      require("./assets/skills/Vayne.png"),
      require("./assets/skills/Vi.png"),
      require("./assets/skills/Viktor.png"),
      require("./assets/skills/Wukong.png"),
      require("./assets/skills/Xayah.png"),
      require("./assets/skills/Xerath.png"),
      require("./assets/skills/XinZhao.png"),
      require("./assets/skills/Yasuo.png"),
      require("./assets/skills/Zed.png"),
      require("./assets/skills/Ziggs.png"),
      require("./assets/skills/Zoe.png"),
    ];

    const system = [
      require("./assets/favicon.png"),
      require("./assets/icon.png"),
      require("./assets/logo.png"),
      require("./assets/splash.png"),
    ];

    const allAssets = [
      ...avatars,
      ...builder,
      ...classes,
      ...items,
      ...origins,
      ...skills,
      ...system,
    ];

    const cacheAssets = builder.map((asset) => {
      return Asset.fromModule(asset).downloadAsync();
    });
    return Promise.all(cacheAssets);
  };

  const [db, setDb] = useState(0);
  const [isUpToDate, setIsUpToDate] = useState(0);
  const [isResolved, setIsResolved] = useState(0);
  const [isCached, setIsCached] = useState(0);

  const currentDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  useEffect(() => {
    readFile("@last")
      .then((lastExecuteDate) => {
        if (lastExecuteDate != null) {
          fetch("https://tftlab.herokuapp.com/api/dynamic/update", {
            method: "GET",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((resJson) => {
              let tempUp2Date =
                lastExecuteDate.year > resJson[0].year
                  ? true
                  : lastExecuteDate.month > resJson[0].month
                  ? true
                  : lastExecuteDate.day > resJson[0].day
                  ? true
                  : false;
              setIsUpToDate(tempUp2Date);

              if (tempUp2Date) {
                //LOCALDAN DB YI OKU
                //CALISTIR

                let tmpDB = readFile("@database");
                tmpDB.then((el) => {
                  setDb(el);
                  setIsResolved(true);
                });
              } else {
                //GUNCELLE
                //CALISTIR
                setIsUpToDate(false);
                setIsResolved(true);
              }
            })
            .catch((error) => console.error(error));
        } else {
          //GUNCELLE
          //CALISTIR
          setIsUpToDate(false);
        }
        writeFile("@last", currentDate);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!loaded) {
    return <AppLoading />;
  } else {
    return isResolved ? (
      isUpToDate && db ? (
        <NavigationContainer theme={MyTheme}>
          <HomeBottomRoute database={db} />
        </NavigationContainer>
      ) : (
        <Updater />
      )
    ) : (
      <AppLoading />
    );
  }
};

export default App;
