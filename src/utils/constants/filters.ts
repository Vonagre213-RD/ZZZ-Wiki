import FactionFilterSection from "@/components/molecules/FactionFilterSection";
import AttributeFilterMenu from "@/components/molecules/AttributeFilterMenu";
import SpecialtyFilterMenu from "@/components/molecules/SpecialtyFilterMenu";

export const filterModals = [
  {
    name: "factions",
    title: "Factions Filter",
    component: FactionFilterSection,
  },
  {
    name: "attributes",
    title: "Attributes Filter",
    component: AttributeFilterMenu,
  },
  {
    name: "specialty",
    title: "Specialty Filter",
    component: SpecialtyFilterMenu,
  },
]; 