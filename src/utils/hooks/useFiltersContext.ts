import { useContext } from "react";
import FiltersContext from "@/context/FiltersContext";

export default function useFiltersContext() {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }
  return context;
} 