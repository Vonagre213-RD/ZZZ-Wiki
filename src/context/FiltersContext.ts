import { createContext } from "react";

type FilterActions =
  | { type: "SET_NAME_FILTER"; payload: string }
  | { type: "SET_FACTION_FILTER"; payload: string }
  | { type: "SET_ATTRIBUTE_FILTER"; payload: string }
  | { type: "SET_SPECIALITY_FILTER"; payload: string };

type FilterState = {
  nameFilter: string;
  factionFilter: string;
  attributeFilter: string;
  specialtyFilter: string;
};

type contextFilterType = {
  state: FilterState;
  dispatch: React.Dispatch<FilterActions>;
};
const FiltersContext = createContext<contextFilterType | undefined>(undefined);

export default FiltersContext;
