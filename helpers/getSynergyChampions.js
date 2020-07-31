const getSyndergyChampions = (name) => {
  //origins
  let astro = ["Bard", "Gnar", "Nautilus", "Teemo"];
  let battelcast = [
    "Cassiopeia",
    "Illaoi",
    "KogMaw",
    "Nocturne",
    "Urgot",
    "Viktor",
  ];
  let celestial = ["Ashe", "Lulu", "Rakan", "Xayah", "XinZhao"];
  let chrono = [
    "Blitzcrank",
    "Caitlyn",
    "Ezreal",
    "Riven",
    "Shen",
    "Thresh",
    "TwistedFate",
    "Wukong",
  ];

  let cybernetic = [
    "Ekko",
    "Fiora",
    "Irelia",
    "Leona",
    "Lucian",
    "Vayne",
    "Vi",
  ];
  let darkstar = [
    "JarvanIV",
    "Jhin",
    "Karma",
    "Mordekaiser",
    "Shaco",
    "Xerath",
  ];

  let mechpilot = ["Annie", "Fizz", "Rumble"];

  let rebel = [
    "AurelionSol",
    "Jinx",
    "Malphite",
    "MasterYi",
    "Yasuo",
    "Zed",
    "Ziggs",
  ];

  let spacepirate = ["Darius", "Gangplank", "Graves", "Jayce"];

  let starguardian = [
    "Ahri",
    "Janna",
    "Neeko",
    "Poppy",
    "Soraka",
    "Syndra",
    "Zoe",
  ];

  // classes

  let blademaster = [
    "Fiora",
    "Irelia",
    "MasterYi",
    "Riven",
    "Shen",
    "Xayah",
    "Yasuo",
  ];

  let blaster = ["Ezreal", "Graves", "Jinx", "KogMaw", "Lucian"];

  let brawler = ["Blitzcrank", "Gnar", "Illaoi", "Malphite", "Vi"];

  let demolitionist = ["Gangplank", "Rumble", "Ziggs"];

  let infiltrator = ["Ekko", "Fizz", "Nocturne", "Shaco", "Zed"];

  let manareaver = ["Darius", "Irelia", "Thresh"];

  let mercenary = ["Gangplank"];

  let mystic = ["Bard", "Cassiopeia", "Karma", "Lulu", "Soraka"];

  let paragon = ["Janna"];

  let protector = ["JarvanIV", "Neeko", "Rakan", "Urgot", "XinZhao"];

  let sniper = ["Ashe", "Caitlyn", "Jhin", "Teemo", "Vayne"];

  let sorcerer = [
    "Ahri",
    "Annie",
    "Syndra",
    "TwistedFate",
    "Viktor",
    "Xerath",
    "Zoe",
  ];

  let starship = ["AurelionSol"];

  let vanguard = [
    "Jayce",
    "Leona",
    "Mordekaiser",
    "Nautilus",
    "Poppy",
    "Wukong",
  ];

  let origins = [
    astro,
    battelcast,
    celestial,
    chrono,
    cybernetic,
    darkstar,
    mechpilot,
    rebel,
    spacepirate,
    starguardian,
  ];
  let classes = [
    blademaster,
    blaster,
    brawler,
    demolitionist,
    infiltrator,
    manareaver,
    mercenary,
    mystic,
    paragon,
    protector,
    sniper,
    sorcerer,
    starship,
    vanguard,
  ];

  let traits = [origins, classes];

  let found = [];

  traits[0].forEach((item) => {
    item.includes(name) ? found.push(item.filter((e) => e !== name)) : null;
  });

  traits[1].forEach((item) => {
    item.includes(name) ? found.push(item.filter((e) => e !== name)) : null;
  });

  return found;
};

export default getSyndergyChampions;
