import Button from "@/components/atoms/Button";
import useFiltersContext from "@/utils/hooks/useFiltersContext";
import { useLocation } from "react-router-dom";
import BurguerMenu from "./BurgerMenu";

interface props{
  isOpen: boolean
}
export default function FactionFilterSection({isOpen} : props) {

  const location = useLocation()

  const isNotInPath = location.pathname !== "/" && location.pathname !== "/Favorites" ? false : true

    const { dispatch } = useFiltersContext();


  const handleSetFactionFilter = (factionName: string) => {
    dispatch({ type: "SET_FACTION_FILTER", payload: factionName })
  }
  const factionsArr = [
    { name: "all_Agents", url: "/images/ui_Icons/factions/agents.png" },
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

  return isNotInPath && (
    <BurguerMenu isOpen={isOpen}>


      <section className="grid grid-cols-3 lg:grid-cols-4 md:justify-center justify-items-center  gap-4">
        {factionsArr.map((f) => (
          <Button
            key={f.name}
            onClick={() => handleSetFactionFilter(f.name)}
            className={`
                h-18 w-18  leading-4 focus:outline-none font-titles 
                flex justify-center items-center rounded-full border-2 border-fosfo-600
                cursor-pointer
                `}
          >
            <img src={f.url} alt={`${f.name} logo in filter section`} className="h-16 object-cover " />
          </Button>
        ))}
      </section>
    </BurguerMenu>
  );
}
