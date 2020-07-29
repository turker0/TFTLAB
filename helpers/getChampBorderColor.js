const getChampBorderColor = (name) => {
  let one = [
    "Caitlyn",
    "Fiora",
    "Graves",
    "Illaoi",
    "JarvanIV",
    "Leona",
    "Malphite",
    "Nocturne",
    "Poppy",
    "TwistedFate",
    "Xayah",
    "Ziggs",
    "Zoe",
  ];

  let two = [
    "Ahri",
    "Annie",
    "Blitzcrank",
    "Darius",
    "KogMaw",
    "Lucian",
    "Mordekaiser",
    "Nautilus",
    "Rakan",
    "Shen",
    "XinZhao",
    "Yasuo",
    "Zed",
  ];

  let three = [
    "Ashe",
    "Bard",
    "Cassiopeia",
    "Ezreal",
    "Jayce",
    "Karma",
    "MasterYi",
    "Neeko",
    "Rumble",
    "Shaco",
    "Syndra",
    "Vayne",
    "Vi",
  ];

  let four = [
    "Fizz",
    "Gnar",
    "Irelia",
    "Jhin",
    "Jinx",
    "Riven",
    "Soraka",
    "Teemo",
    "Viktor",
    "Wukong",
  ];

  if (one.includes(name)) return "#213042";
  else if (two.includes(name)) return "#156831";
  else if (three.includes(name)) return "#12407c";
  else if (four.includes(name)) return "#893088";
  else return "#b89d27";
};

export default getChampBorderColor;
