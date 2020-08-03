const getChampionClass = (name) => {
  let classes = {
    blademaster: [
      "Fiora",
      "Irelia",
      "MasterYi",
      "Riven",
      "Shen",
      "Xayah",
      "Yasuo",
    ],
    blaster: ["Ezreal", "Graves", "Jinx", "KogMaw", "Lucian"],
    brawler: ["Blitzcrank", "Gnar", "Illaoi", "Malphite", "Vi"],
    demolitionist: ["Gangplank", "Rumble", "Ziggs"],
    infiltrator: ["Ekko", "Fizz", "Nocturne", "Shaco", "Zed"],
    manareaver: ["Darius", "Irelia", "Thresh"],
    mercenary: ["Gangplank"],
    mystic: ["Bard", "Cassiopeia", "Karma", "Lulu", "Soraka"],
    paragon: ["Janna"],
    protector: ["JarvanIV", "Neeko", "Rakan", "Urgot", "XinZhao"],
    sniper: ["Ashe", "Caitlyn", "Jhin", "Teemo", "Vayne"],
    sorcerer: [
      "Ahri",
      "Annie",
      "Syndra",
      "TwistedFate",
      "Viktor",
      "Xerath",
      "Zoe",
    ],
    starship: ["AurelionSol"],
    vanguard: ["Jayce", "Leona", "Mordekaiser", "Nautilus", "Poppy", "Wukong"],
  };

  let found = [];
  for (let clas in classes) {
    if (classes[clas].includes(name)) found.push(clas);
  }

  return found;
};

export default getChampionClass;
