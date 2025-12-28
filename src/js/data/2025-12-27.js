dataSetVersion = "2025-12-27"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Humanity",
    key: "type",
    tooltip: "Check this to restrict to certain types of characters.",
    checked: false,
    sub: [
      { name: "Humans", tooltip: "Includes the Human characters in the series.", key: "human" },
      { name: "AIs", tooltip: "Only includes ''sentient'' AIs that are active for a long period of time.", key: "ai" },
      { name: "NPCs", tooltip: "Includes all other AIs. Includes non-show characters.", key: "npc" }
    ]
  },
  {
    name: "Filter by Episode Appearance",
    key: "ep",
    tooltip: "Check this to only include characters that physically appear in specific episodes.",
    checked: false,
    sub: [
      { name: "Ep. 1 - PILOT", key: "1" },
      { name: "Ep. 2 - Candy Carrier Chaos!", key: "2" },
      { name: "Ep. 3 - The Mystery Of Mildenhall Manor", key: "3" },
      { name: "Ep. 4 - Fast Food Masquerade", key: "4" },
      { name: "Ep. 5 - Untitled", key: "5" },
      { name: "Ep. 6 - They All Get Guns", key: "6" },
      { name: "Ep. 7 - Beach Episode", key: "7" },
    ]
  },
  {
    name: "Exclude Minor Characters",
    key: "minor",
    tooltip: "Uncheck this to include the minor, one-off, gag characters.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Pomni",
    img: "pomni.png",
    opts: {
      type: ["human"],
      ep: ["1", "2", "3", "4", "5", "6", "7"],
      minor: false
    }
  },{
    name: "Ragatha",
    img: "ragatha.png",
    opts: {
      type: ["human"],
      ep: ["1", "2", "3", "4", "5", "6", "7"],
      minor: false
    }
  },
  {
    name: "Jax",
    img: "jax.png",
    opts: {
      type: ["human"],
      ep: ["1", "2", "3", "4", "5", "6", "7"],
      minor: false
    }
  },
  {
    name: "Gangle",
    img: "gangle.png",
    opts: {
      type: ["human"],
      ep: ["1", "2", "3", "4", "5", "6", "7"],
      minor: false
    }
  },
  {
    name: "Zooble",
    img: "zooble.png",
    opts: {
      type: ["human"],
      ep: ["1", "2", "3", "4", "5", "6", "7"],
      minor: false
    }
  },
  {
    name: "Kinger",
    img: "kinger.png",
    opts: {
      type: ["human"],
      ep: ["1", "2", "3", "4", "5", "6", "7"],
      minor: false
    }
  },
  {
    name: "Kaufmo",
    img: "kaufmo.png",
    opts: {
      type: ["human"],
      ep: ["1"],
      minor: false
    }
  },
  {
    name: "Queenie",
    img: "queenie.png",
    opts: {
      type: ["human"],
      ep: ["3"],
      minor: false
    }
  },
  {
    name: "Ribbit",
    img: "ribbit.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: false
    }
  },
  {
    name: "Caine",
    img: "caine.png",
    opts: {
      type: ["ai"],
      ep: ["1", "2", "3", "4", "5", "6", "7"],
      minor: false
    }
  },
  {
    name: "Bubble",
    img: "bubble.png",
    opts: {
      type: ["ai"],
      ep: ["1", "2", "3", "4", "5", "6", "7"],
      minor: false
    }
  },
  {
    name: "Dr. Football",
    img: "drfootball.png",
    opts: {
      type: ["npc"],
      ep: ["1"],
      minor: true
    }
  },
  {
    name: "Gloink Queen",
    img: "gloinkqueen.png",
    opts: {
      type: ["npc"],
      ep: ["1", "4"],
      minor: false
    }
  },
  {
    name: "Gloinks",
    img: "gloinks.png",
    opts: {
      type: ["npc"],
      ep: ["1", "4"],
      minor: true
    }
  },
  {
    name: "Gummigoo",
    img: "gummigoo.png",
    opts: {
      type: ["npc"],
      ep: ["2", "4"],
      minor: false
    }
  },
  {
    name: "Max",
    img: "max.png",
    opts: {
      type: ["npc"],
      ep: ["2", "4"],
      minor: true
    }
  },
  {
    name: "Chad",
    img: "chad.png",
    opts: {
      type: ["npc"],
      ep: ["2", "4"],
      minor: true
    }
  },
  {
    name: "Princess Loolilalu",
    img: "loolilalu.png",
    opts: {
      type: ["npc"],
      ep: ["2"],
      minor: false
    }
  },
  {
    name: "The Fudge",
    img: "fudge.png",
    opts: {
      type: ["npc"],
      ep: ["2"],
      minor: false
    }
  },
  {
    name: "Ghostly",
    img: "ghostly.png",
    opts: {
      type: ["npc"],
      ep: ["3"],
      minor: true
    }
  },
  {
    name: "Baron Theodore Mildenhall",
    img: "mildenhall.png",
    opts: {
      type: ["npc"],
      ep: ["3"],
      minor: false
    }
  },
  {
    name: "Martha Mildenhall",
    img: "martha.png",
    opts: {
      type: ["npc"],
      ep: ["3"],
      minor: true
    }
  },
  {
    name: "The Angel",
    img: "angel.png",
    opts: {
      type: ["npc"],
      ep: ["3"],
      minor: false
    }
  },
  {
    name: "Orbsman",
    img: "orbsman.png",
    opts: {
      type: ["npc"],
      ep: ["4"],
      minor: true
    }
  },
  {
    name: "Disappearing Guy",
    img: "disappearingguy.png",
    opts: {
      type: ["ai"],
      ep: ["5", "6"],
      minor: true
    }
  },
  {
    name: "Evil Pomni",
    img: "evilpomni.png",
    opts: {
      type: ["npc"],
      ep: ["5"],
      minor: false
    }
  },
  {
    name: "Evil Ragatha",
    img: "evilragatha.png",
    opts: {
      type: ["npc"],
      ep: ["5"],
      minor: true
    }
  },
  {
    name: "Evil Jax",
    img: "eviljax.png",
    opts: {
      type: ["npc"],
      ep: ["5"],
      minor: false
    }
  },
  {
    name: "Coach Dictatorer",
    img: "coachdictatorer.png",
    opts: {
      type: ["npc"],
      ep: ["5"],
      minor: true
    }
  },
  {
    name: "Evil Orbsman",
    img: "evilorbsman.png",
    opts: {
      type: ["npc"],
      ep: ["5"],
      minor: true
    }
  },
  {
    name: "Bazooble",
    img: "bazooble.png",
    opts: {
      type: ["npc"],
      ep: ["5"],
      minor: true
    }
  },
  {
    name: "Ming",
    img: "ming.png",
    opts: {
      type: ["ai"],
      ep: ["6"],
      minor: true
    }
  },
  {
    name: "Sun",
    img: "sun.png",
    opts: {
      type: ["ai"],
      ep: ["1", "7"],
      minor: true
    }
  },
  {
    name: "Abel",
    img: "abel.png",
    opts: {
      type: ["npc"],
      ep: ["3", "4", "5", "7"],
      minor: false
    }
  },
  {
    name: "Scratch",
    img: "scratch.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Worm-on-a-String",
    img: "woim.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Pink Cyclops",
    img: "cyclops.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Polka Dot Jester",
    img: "polkadots.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Sock Puppet",
    img: "sockpuppet.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Sad Clown",
    img: "sadclown.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Wizard",
    img: "wizard.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Colorful Creature",
    img: "multicolor.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Purple Dinosaur",
    img: "purpledino.png",
    opts: {
      type: ["human"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Moon",
    img: "moon.png",
    opts: {
      type: ["ai"],
      ep: ["1", "5"],
      minor: true
    }
  },
  {
    name: "Gummy Elephant",
    img: "gummyphant.png",
    opts: {
      type: ["npc"],
      ep: ["2"],
      minor: true
    }
  },
  {
    name: "The One That Tells Lies",
    img: "fishpelo.png",
    opts: {
      type: ["npc"],
      ep: ["7"],
      minor: true
    }
  },
  {
    name: "Crappy Looking Fish (Yellow)",
    img: "fishzack.png",
    opts: {
      type: ["npc"],
      ep: ["7"],
      minor: true
    }
  },
  {
    name: "Shrimp",
    img: "shrimp.png",
    opts: {
      type: ["npc"],
      ep: ["7"],
      minor: true
    }
  },
  {
    name: "Additional Voices",
    img: "addvoices.png",
    opts: {
      type: ["npc"],
      ep: ["2"],
      minor: true
    }
  },
  {
    name: "The Machine",
    img: "machine.png",
    opts: {
      type: ["npc"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Meatlad",
    img: "meatlad.png",
    opts: {
      type: ["npc"],
      ep: [],
      minor: true
    }
  },
  {
    name: "The Bone Pastor",
    img: "bonepastor.png",
    opts: {
      type: ["npc"],
      ep: [],
      minor: true
    }
  },
  {
    name: "Paine",
    img: "paine.png",
    opts: {
      type: ["npc"],
      ep: [],
      minor: true
    }
  }
];
