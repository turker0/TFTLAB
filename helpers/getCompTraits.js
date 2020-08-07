const getCompTraits = (champions) => {
  let traits = {
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

  let traitDetails = {
    astro: {
      count: [3],
      details: ["Astro Champions reduce their mana costs by 30"],
    },
    battlecast: {
      count: [8, 6, 4, 2],
      details: [
        "880 Healing or Damage",
        "480 Healing or Damage",
        "180 Healing or Damage",
        "80 Healing or Damage",
      ],
    },
    celestial: {
      count: [6, 4, 2],
      details: ["150% Healing", "45% Healing", "15% Healing"],
    },
    chrono: {
      count: [8, 6, 4, 2],
      details: [
        "Every 0.75 seconds",
        "Every 1.5 seconds",
        "Every 3.5 seconds",
        "Every 8 seconds",
      ],
    },
    cybernetic: {
      count: [6, 3],
      details: [
        "550 Health & 70 Attack Damage",
        "300 Health & 35 Attack Damage",
      ],
    },
    darkstar: {
      count: [8, 6, 4, 2],
      details: [
        "38 Attack Damage and Spell Power",
        "28 Attack Damage and Spell Power",
        "18 Attack Damage and Spell Power",
        "8 Attack Damage and Spell Power",
      ],
    },
    mechpilot: {
      count: [3],
      details: [
        "At the start of combat, three random Mech-Pilots are teleported into a Super-Mech. The Super-Mech has the combined Health, Attack Damage, and Traits of its Pilots, as well as 3 random items from among them. When the Super-Mech dies, the pilots are ejected and continue to fight.",
      ],
    },
    rebel: {
      count: [9, 6, 3],
      details: [
        "330 Shield & 15% Damage",
        "210 Shield & 12% Damage",
        "150 Shield & 10% Damage",
      ],
    },
    spacepirate: {
      count: [4, 2],
      details: [
        "50% for 1 Gold and 25% for a component item",
        "50% for 1 Gold",
      ],
    },
    starguardian: {
      count: [9, 6, 3],
      details: ["45 Total Mana", "25 Total Mana", "15 Total Mana"],
    },
    blademaster: {
      count: [9, 6, 3],
      details: [
        "100% Chance to trigger",
        "65% Chance to trigger",
        "30% Chance to trigger",
      ],
    },
    blaster: {
      count: [4, 2],
      details: ["6 Additional Attacks", "3 Additional Attacks"],
    },
    brawler: {
      count: [4, 2],
      details: ["600 Bonus Health", "350 Bonus Health"],
    },
    demolitionist: {
      count: [2],
      details: [
        "Damage from Demolitionists' spellcasts stun their targets for 1.50 seconds.",
      ],
    },
    infiltrator: {
      count: [6, 4, 2],
      details: [
        "120% Bonus Attack Speed. Refreshes on Takedown.",
        "80% Bonus Attack Speed. Refreshes on Takedown.",
        "40% Bonus Attack Speed. Refreshes on Takedown.",
      ],
    },
    manareaver: {
      count: [2],
      details: [
        "Mana-Reaver's Basic Attacks increase the Mana cost of their target's next spellcast by 40%.",
      ],
    },
    mercenary: {
      count: [1],
      details: ["Mercenaries can buy upgrades for their Spells in the shop."],
    },
    mystic: {
      count: [4, 2],
      details: ["120 Magic Resistance", "50 Magic Resistance"],
    },
    paragon: {
      count: [1],
      details: [
        "Ally Star Guardian basic attacks are converted to true damage. All other ally basic attacks are converted to magic damage.",
      ],
    },
    protector: {
      count: [6, 4, 2],
      details: [
        "55% Maximum Health Shield",
        "40% Maximum Health Shield",
        "30% Maximum Health Shield",
      ],
    },
    sniper: {
      count: [4, 2],
      details: ["18% Increased Damage per hex", "10% Increased Damage per hex"],
    },
    sorcerer: {
      count: [6, 4, 2],
      details: ["70% Spell Power", "40% Spell Power", "20% Spell Power"],
    },
    starship: {
      count: [1],
      details: [
        "Starships gain 40 mana per second, maneuver around the board, and are immune to movement impairing effects, but can't Basic Attack.",
      ],
    },
    vanguard: {
      count: [6, 4, 2],
      details: ["1000 Armor", "300 Armor", "125 Armor"],
    },
  };

  let found = {
    traits: [],
    counts: [],
    details: [],
    colors: [],
  };

  for (let i = 0; i < champions.length; i++) {
    for (let trait in traits) {
      if (traits[trait].includes(champions[i])) {
        if (found.traits.includes(trait)) {
          found.counts[found.traits.indexOf(trait)]++;
        } else {
          found.traits.push(trait);
          found.counts.push(1);
        }
      }
    }
  }

  found.counts.forEach((item, index) => {
    for (let i = 0; i < traitDetails[found.traits[index]].count.length; i++) {
      if (item >= traitDetails[found.traits[index]].count[i]) {
        found.details.push(traitDetails[found.traits[index]].details[i]);
        if (i == 0) {
          traitDetails[found.traits[index]].count.length == 4
            ? found.colors.push("#47DDFF")
            : found.colors.push("#FFD700");
        } else if (i == 1) {
          traitDetails[found.traits[index]].count.length == 4
            ? found.colors.push("#FFD700")
            : traitDetails[found.traits[index]].count.length == 3
            ? found.colors.push("#C0C0C0")
            : found.colors.push("#e67e22");
        } else if (i == 2) {
          traitDetails[found.traits[index]].count.length == 4
            ? found.colors.push("#C0C0C0")
            : found.colors.push("#e67e22");
        } else found.colors.push("#e67e22");
        break;
      }
      if (i + 1 == traitDetails[found.traits[index]].count.length) {
        found.details.push(0);
        found.colors.push("#88a0a7");
        break;
      }
    }
  });
  return found;
};

export default getCompTraits;
