import useAgentsData from "./useAgentsData";
import { useContext } from "react";
import FiltersContext from "@/context/FiltersContext";

export default function useFilteredAgentsData() {

    const {agentsData, isLoading} = useAgentsData()
    
    const context = useContext(FiltersContext);

    if (!context) {
        throw new Error("useAgentsDataFilter must be used within a FiltersProvider");
    }

    const { state } = context;
   
    const filteredData = agentsData.filter((a) => {
        const matchesNames = state.nameFilter !== "N/A" && state.nameFilter !== "" ? a.name.toLowerCase().includes(state.nameFilter.toLowerCase()) : true;
        const matchesFaction = state.factionFilter !== "all_Agents" && state.factionFilter !== "" ? a.faction.includes(state.factionFilter) : true;
        const matchesSpecialty = state.specialtyFilter !== "N/A" && state.specialtyFilter !== "" ? a.specialty === state.specialtyFilter : true;
        const matchesAttribute = state.attributeFilter !== "N/A" && state.attributeFilter !== "" ? a.attribute === state.attributeFilter : true;

        return matchesNames && matchesSpecialty && matchesFaction && matchesAttribute;
    });

    return {filteredData, isLoading};
}
