import "./App.css";

import Header from "@/components/organisms/Header";
import CharactersSection from "@/components/pages/CharactersSection";
import FactionFilterSection from "@/components/molecules/FactionFilterSection";
import FavoritesSection from "./components/pages/FavoritesSection";
import MoreInfoSection from "@/components/pages/MoreInfoSection";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="bg-diagonal-lines h-auto ">
      <Header/>
      <span className="justify-center hidden lg:flex">
        <FactionFilterSection isOpen={true}/>
      </span>

      <Routes>
        <Route
          path="/"
          element={<CharactersSection />}
        />
        <Route
          path="/Favorites"
          element={<FavoritesSection />}
        />
        <Route path="/Mas/:id" element={<MoreInfoSection />} />
      </Routes>
    </div>
  );
}

export default App;
