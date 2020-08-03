const getChampOrigin = (name) => {
  let origins = {
    astro: ["Bard", "Gnar", "Nautilus", "Teemo"],

    battlecast: [
      "Cassiopeia",
      "Illaoi",
      "KogMaw",
      "Nocturne",
      "Urgot",
      "Viktor",
    ],

    celestial: ["Ashe", "Lulu", "Rakan", "Xayah", "XinZhao"],

    chrono: [
      "Blitzcrank",
      "Caitlyn",
      "Ezreal",
      "Riven",
      "Shen",
      "Thresh",
      "TwistedFate",
      "Wukong",
    ],

    cybernetic: ["Ekko", "Fiora", "Irelia", "Leona", "Lucian", "Vayne", "Vi"],

    darkstar: ["JarvanIV", "Jhin", "Karma", "Mordekaiser", "Shaco", "Xerath"],

    mechpilot: ["Annie", "Fizz", "Rumble"],

    rebel: [
      "AurelionSol",
      "Jinx",
      "Malphite",
      "MasterYi",
      "Yasuo",
      "Zed",
      "Ziggs",
    ],

    spacepirate: ["Darius", "Gangplank", "Graves", "Jayce"],

    starguardian: [
      "Ahri",
      "Janna",
      "Neeko",
      "Poppy",
      "Soraka",
      "Syndra",
      "Zoe",
    ],
  };

  let found;
  for (let origin in origins) {
    if (origins[origin].includes(name)) found = origin;
  }

  return found;
};

export default getChampOrigin;
