const getBorderColor = (name, count) => {
  let traits = {
    blademaster: [9, 6, 3],
    blaster: [4, 2],
    brawler: [4, 2],
    demolitionist: [2],
    infiltrator: [6, 4, 2],
    manareaver: [2],
    mercenary: [1],
    mystic: [4, 2],
    paragon: [1],
    protector: [6, 4, 2],
    sniper: [4, 2],
    sorcerer: [6, 4, 2],
    starship: [1],
    vanguard: [6, 4, 2],
    astro: [3],
    battlecast: [8, 6, 4, 2],
    celestial: [6, 4, 2],
    chrono: [8, 6, 4, 2],
    cybernetic: [6, 3],
    darkstar: [8, 6, 4, 2],
    mechpilot: [3],
    rebel: [9, 6, 3],
    spacepirate: [4, 2],
    starguardian: [9, 6, 3],
  };

  let found = traits[name];

  if (count >= found[0]) {
    return found.length == 4 ? "#47DDFF" : "#FFD700";
  } else if (count >= found[1]) {
    return found.length == 4
      ? "#FFD700"
      : found.length == 3
      ? "#C0C0C0"
      : "#CD7F32";
  } else if (count >= found[2]) {
    return found.length == 4 ? "#C0C0C0" : "#e67e22";
  } else return "#e67e22";
};

export default getBorderColor;
