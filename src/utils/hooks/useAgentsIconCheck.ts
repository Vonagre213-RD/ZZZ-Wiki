interface iconCheckTypes {
  factionName?: string;
  attributeName?: string;
  typeName?: string;
  specialtyName?: string;
  rankName?: string;
}

type iconPropertiesType = {
  name: string;
  url: string;
};

export default function useIconCheck({
  factionName,
  attributeName,
  typeName,
  specialtyName,
  rankName
}: iconCheckTypes) {
  const attributes = [
    {
      name: "Fire",
      url: "/images/ui_Icons/attributes/fireIcon.png"
    },
    {
      name: "Electric",
      url: "/images/ui_Icons/attributes/electricIcon.png"
    },
    {
      name: "Ice",
      url: "/images/ui_Icons/attributes/iceIcon.png"
    },
    {
      name: "Frost",
      url: "/images/ui_Icons/attributes/frostIcon.png"
    },
    {
      name: "Auric Ink",
      url: "/images/ui_Icons/attributes/auricInkIcon.png"
    },
    {
      name: "Ether",
      url: "/images/ui_Icons/attributes/etherIcon.png"
    },
    {
      name: "Physical",
      url: "/images/ui_Icons/attributes/physicalIcon.png"
    }
  ];

  const specialties = [
    {
      name: "Attack",
      url: "/images/ui_Icons/specialty/attackIcon.png"
    },
    {
      name: "Stun",
      url: "/images/ui_Icons/specialty/stunIcon.png"
    },
    {
      name: "Support",
      url: "/images/ui_Icons/specialty/supportIcon.png"
    },
    {
      name: "Defense",
      url: "/images/ui_Icons/specialty/defenseIcon.png"
    },
    {
      name: "Anomaly",
      url: "/images/ui_Icons/specialty/anomalyIcon.png"
    },
    {
      name: "Rupture",
      url: "/images/ui_Icons/specialty/ruptureIcon.png"
    }
  ];

  const types = [
    {
      name: "Pierce",
      url: "/images/ui_Icons/aTypes/pierceIcon.png"
    },
    {
      name: "Slash",
      url: "/images/ui_Icons/aTypes/slashIcon.png"
    },
    {
      name: "Strike",
      url: "/images/ui_Icons/aTypes/strikeIcon.png"
    }
  ];
  const ranks = [
    { name: "S", url: "/images/ui_Icons/ranks/rankS.png" },
    { name: "A", url: "/images/ui_Icons/ranks/rankA.png" }
  ];

  const factions = [
    { name: "all", url: "/images/ui_Icons/factions/agents.png" },
    { name: "Random Play/Yunkui Summit", url: "/images/ui_Icons/factions/randomPlay.png" },
    { name: "Cunning Hares", url: "/images/ui_Icons/factions/cunningHares.png" },
    {
      name: "Belobog Heavy Industries",
      url: "/images/ui_Icons/factions/belobogHeavyIndustries.png"
    },
    {
      name: "Victoria Housekeeping Co.",
      url: "/images/ui_Icons/factions/victoriaHouseKeeping.png"
    },
    {
      name: "Criminal Investigation Special Response Team",
      url: "/images/ui_Icons/factions/neps.png"
    }, //the faction with the longest name(Zhu Yuan mi vieja wei)
    {
      name: "Hollow Special Operations Section 6 (H.A.N.D.)",
      url: "/images/ui_Icons/factions/hsos6.png"
    },
    { name: "Sons of Calydon", url: "/images/ui_Icons/factions/sonsOfCalydon.png" },
    {
      name: "Obol Squad (New Eridu Defense Force -- Obsidian Division)",
      url: "/images/ui_Icons/factions/obolSquad.png"
    },
    { name: "Stars of Lyra", url: "/images/ui_Icons/factions/starsOfLyra.png" },
    { name: "Defense Force -- Silver Squad", url: "/images/ui_Icons/factions/silverSquad.png" },
    { name: "Mockingbird", url: "/images/ui_Icons/factions/mockingBird.png" },
    { name: "Yunkui Summit", url: "/images/ui_Icons/factions/yunkuiSummit.png" }
  ];

  function findIcon(arr: iconPropertiesType[], propName: string) {
    const icon = arr.find((I) => I.name === propName);
    return icon?.url;
  }

  //uses before Name adjectives are the hook props, I say this because I spent two minutes figuring out because I forgot it :aivirgencita:
  //26/07/2025 I can't figure out wth I wrote here
  
  const attributeUrl = findIcon(attributes, attributeName || "");
  const specialtyUrl = findIcon(specialties, specialtyName || "");
  const typeUrl = findIcon(types, typeName || "");
  const rankUrl = findIcon(ranks, rankName || "");
  const factionUrl = findIcon(factions, factionName || "");

  return { attributeUrl, specialtyUrl, typeUrl, rankUrl, factionUrl };
}
