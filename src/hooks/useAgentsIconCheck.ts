
interface iconCheckTypes {
  factionName? : string,
  attributeName?: string,
  typeName?: string,
  specialtyName?: string,
  rankName?: string
}


type iconPropertiesType = {
  
    name:string,
    url:string

}

export default function useIconCheck({factionName, attributeName, typeName, specialtyName, rankName} : iconCheckTypes){

const attributes = [
  {
    name: "Fire",
    url: "/public/images/icons/attributes/fireicon.png"
  },
  {
    name: "Electric",
    url: "/public/images/icons/attributes/electricicon.png"
  },
  {
    name: "Ice",
    url: "/public/images/icons/attributes/iceicon.png"
  },
  {
    name: "Frost",
    url: "/public/images/icons/attributes/frostIcon.png"
  },
  {
    name: "Auric Ink",
    url: "/public/images/icons/attributes/auricInkIcon.png"
  },
  {
    name: "Ether",
    url: "/public/images/icons/attributes/ethericon.png"
  },
  {
    name: "Physical",
    url: "/public/images/icons/attributes/physicalicon.png"
  }
];

const specialties = [
  {
    name: "Attack",
    url: "/public/images/icons/specialty/attackIcon.png"
  },
  {
    name: "Stun",
    url: "/public/images/icons/specialty/stunIcon.png"
  },
  {
    name: "Support",
    url: "/public/images/icons/specialty/supportIcon.png"
  },
  {
    name: "Defense",
    url: "/public/images/icons/specialty/defenseIcon.png"
  },
  {
    name: "Anomaly",
    url: "/public/images/icons/specialty/anomalyIcon.png"
  },
  {
    name: "Rupture",
    url: "/public/images/icons/specialty/ruptureIcon.png"
  }
]

const types = [
  {
    name: "Pierce",
    url:'/public/images/icons/aTypes/pierceIcon.png'
  },
  {
    name: "Slash",
    url:'/public/images/icons/aTypes/slashIcon.png'
  },
  {
    name: "Strike",
    url:'/public/images/icons/aTypes/strikeIcon.png'
  }
]
const ranks = [
  {name: "S", url: "/public/images/icons/ranks/rankS.png"},
  {name:"A", url: "/public/images/icons/ranks/rankA.png"}
]

const factions = [
  { name: "all", url:"/public/images/icons/factions/agents.png"},
  { name: "Random Play/Yunkui Summit", url:"/public/images/icons/factions/randomPlay.png"},
  { name: "Cunning Hares", url:"/public/images/icons/factions/cunningHares.png" },
  { name: "Belobog Heavy Industries", url:"/public/images/icons/factions/belobogHeavyIndustries.png" },
  { name: "Victoria Housekeeping Co.", url:"/public/images/icons/factions/victoriaHouseKeeping.png" },
  { name: "Criminal Investigation Special Response Team", url:"/public/images/icons/factions/neps.png" }, //the faction with the longest name(Zhu Yuan mi vieja wei)
  { name: "Hollow Special Operations Section 6 (H.A.N.D.)", url:"/public/images/icons/factions/hsos6.png" },
  { name: "Sons of Calydon", url:"/public/images/icons/factions/sonsOfCalydon.png" },
  { name: "Obol Squad (New Eridu Defense Force -- Obsidian Division)", url:"/public/images/icons/factions/obolSquad.png" },
  { name: "Stars of Lyra", url:"/public/images/icons/factions/starsOfLyra.png" },
  { name: "Defense Force -- Silver Squad", url:"/public/images/icons/factions/silverSquad.png" },
  { name: "Mockingbird", url:"/public/images/icons/factions/mockingBird.png" },
  { name: "Yunkui Summit", url:"/public/images/icons/factions/yunkuiSummit.png" },
];

function findIcon(arr : iconPropertiesType[], propName: string){
    const icon = arr.find(I => I.name === propName)
    return icon?.url
}

//uses before Name adjectives are the hook props, I say this because I spent two minutes figuring out because I forgot it :aivirgencita:
const attributeUrl = findIcon(attributes,  attributeName || "")
const specialtyUrl = findIcon( specialties, specialtyName || "")
const typeUrl = findIcon(types, typeName || "")
const rankUrl = findIcon(ranks, rankName || "")
const factionUrl = findIcon(factions, factionName || "")

return {attributeUrl, specialtyUrl, typeUrl, rankUrl, factionUrl}
}