import useAgentsData from "./useAgentsData";
import useFiltersContext from "./useFiltersContext";

export default function useFilteredAgentsData() {

    const { agentsData, isLoading } = useAgentsData();

    const { state } = useFiltersContext();

    const filteredData = agentsData.filter((a) => {
        const matchesNames = state.nameFilter !== "N/A" && state.nameFilter !== "" ? a.name.toLowerCase().includes(state.nameFilter.toLowerCase()) : true;
        const matchesFaction = state.factionFilter !== "all_Agents" && state.factionFilter !== "" ? a.faction.includes(state.factionFilter) : true;
        const matchesSpecialty = state.specialtyFilter !== "all_Agents" && state.specialtyFilter !== "" ? a.specialty === state.specialtyFilter : true;
        const matchesAttribute = state.attributeFilter !== "all_Agents" && state.attributeFilter !== "" ? a.attribute === state.attributeFilter : true;

        return matchesNames && matchesSpecialty && matchesFaction && matchesAttribute;
    });

    return { filteredData, isLoading };
}
