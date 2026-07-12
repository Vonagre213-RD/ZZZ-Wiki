import FiltersContext from "@/context/FiltersContext";
import { useReducer } from "react";

interface props {
  children: React.ReactNode;
}

type FilterState = {
  nameFilter: string;
  factionFilter: string;
  attributeFilter: string;
  specialtyFilter: string;
};

const initialState = {
  nameFilter: "",
  factionFilter: "",
  attributeFilter: "",
  specialtyFilter: ""
};

type FilterActions =
  | { type: "SET_NAME_FILTER"; payload: string }
  | { type: "SET_FACTION_FILTER"; payload: string }
  | { type: "SET_ATTRIBUTE_FILTER"; payload: string }
  | { type: "SET_SPECIALITY_FILTER"; payload: string }
  | { type: "RESET"; };

const reducer = (state: FilterState, action: FilterActions) => {
  switch (action.type) {
    case "SET_ATTRIBUTE_FILTER":
      return { ...state, attributeFilter: action.payload };
    case "SET_FACTION_FILTER":
      return { ...state, factionFilter: action.payload };
    case "SET_SPECIALITY_FILTER":
      return { ...state, specialtyFilter: action.payload };
    case "SET_NAME_FILTER":
      return { ...state, nameFilter: action.payload };
    case "RESET":
      return{
        attributeFilter: "", factionFilter: "", specialtyFilter:"", nameFilter:""
      };
    default:
      return state;
  }
};
export default function FiltersProviders({ children }: props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <FiltersContext.Provider value={{ state, dispatch }}>{children}</FiltersContext.Provider>;
}
