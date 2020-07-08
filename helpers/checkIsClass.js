const checkIsClass = (name) => {
  const classes = [
    "blademaster",
    "blaster",
    "brawler",
    "demolitionist",
    "infiltrator",
    "manareaver",
    "mercenary",
    "mystic",
    "paragon",
    "protector",
    "sniper",
    "sorcerer",
    "starship",
    "vanguard",
  ];

  let result = classes.includes(name);
  return result;
};

export default checkIsClass;
