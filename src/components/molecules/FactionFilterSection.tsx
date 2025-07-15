import type React from "react";
import Button from "@/components/atoms/Button";

interface props {
    setFactionFilter: React.Dispatch<React.SetStateAction<string>>
}
export default function FactionFilterSection({setFactionFilter} : props){
const factionsArr = [
  { name: "all", url:"/images/ui_Icons/factions/agents.png"},
  { name: "Random Play/Yunkui Summit", url:"/images/ui_Icons/factions/randomPlay.png"},
  { name: "Cunning Hares", url:"/images/ui_Icons/factions/cunningHares.png" },
  { name: "Belobog Heavy Industries", url:"/images/ui_Icons/factions/belobogHeavyIndustries.png" },
  { name: "Victoria Housekeeping Co.", url:"/images/ui_Icons/factions/victoriaHouseKeeping.png" },
  { name: "Criminal Investigation Special Response Team", url:"/images/ui_Icons/factions/neps.png" }, //the faction with the longest name(Zhu Yuan mi vieja wei)
  { name: "Hollow Special Operations Section 6 (H.A.N.D.)", url:"/images/ui_Icons/factions/hsos6.png" },
  { name: "Sons of Calydon", url:"/images/ui_Icons/factions/sonsOfCalydon.png" },
  { name: "Obol Squad (New Eridu Defense Force -- Obsidian Division)", url:"/images/ui_Icons/factions/obolSquad.png" },
  { name: "Stars of Lyra", url:"/images/ui_Icons/factions/starsOfLyra.png" },
  { name: "Defense Force -- Silver Squad", url:"/images/ui_Icons/factions/silverSquad.png" },
  { name: "Mockingbird", url:"/images/ui_Icons/factions/mockingBird.png" },
  { name: "Yunkui Summit", url:"/images/ui_Icons/factions/yunkuiSummit.png" },
];

    return(
        <section className="grid grid-cols-3 md:flex md:flex-wrap md:justify-center justify-items-center mt-4 gap-4">
            {factionsArr.map(f => (
                <Button key={f.name} onClick={() => setFactionFilter(f.name)} className={`
                h-20 w-20  leading-4 focus:outline-none font-titles 
                flex justify-center items-center rounded-full border-2 border-fosfo-600
                cursor-pointer
                `}>
                    <img src={f.url} alt={`${f.name} logo in filter section`} className="h-18" />
                </Button>
            ))}
        </section>
    )
}