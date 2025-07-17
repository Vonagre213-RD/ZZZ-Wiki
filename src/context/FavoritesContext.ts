import { createContext } from "react";

interface FavoritesContextInterface {
  favorites: string[] | null;
  addAgent: (id: string) => void;
  removeAgent: (id: string) => void;
}
const FavoritesContext = createContext<FavoritesContextInterface>({
  favorites: [],
  addAgent: () => {},
  removeAgent: () => {}
});

export default FavoritesContext;
