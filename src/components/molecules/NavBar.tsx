import { useContext, useState, type SetStateAction } from "react";
import FiltersContext from "@/context/FiltersContext";
import { useLocation } from "react-router-dom";

import NavButton from "../atoms/NavButton";
import Button from "../atoms/Button";
import FactionFilterSection from "./FactionFilterSection";
import AttributeFilterMenu from "./AttributeFilterMenu";
import SpecialtyFilterMenu from "./SpecialtyFilterMenu";

interface props {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
}
export default function NavBar({isModalOpen ,setIsModalOpen}: props) {

  const [isFilterSectionOpen, setIsFilterSectionOpen] = useState<boolean>(false)
  const [isAttributeFilterMenuOpen, setIsAttributeFilterMenuOpen] = useState<boolean>(false)
      const [isSpecialtyFilterOpen, setIsSpecialtyFilterOpen] = useState<boolean>(false)

  const location = useLocation()

  const isNotInPath = location.pathname !== "/" && location.pathname !== "/Favorites" ? false : true
  const context = useContext(FiltersContext)
  if (!context) {
    throw new Error("useAgentsDataFilter must be used within a FiltersProvider")
  }
  const { dispatch } = context
  const routes = [
    { name: "home", path: "/" },
    { name: "favorites", path: "Favorites" }
  ];

  const handleNamefilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_NAME_FILTER", payload: e.target.value })
  }

  return (
    <nav
      className={`flex flex-col w-full lg:items-center transition-all duration-700 gap-4  overflow-scroll lg:overflow-hidden
                    lg:flex-row lg:max-h-10 lg:justify-end`}
    >
      {routes.map((b) => (
        <NavButton
          key={b.name}
          activeClass="bg-fosfo-600"
          className="h-8 w-full p-2 focus:outline-none bg-fosfo-500 font-titles flex items-center justify-center rounded-md
                        lg:w-40"
          to={`${b.path}`}
        >
          {b.name}
        </NavButton>
      ))}

      <Button onClick={() => setIsModalOpen(!isModalOpen)} className={`hidden h-8 w-full p-2  bg-orange-500 font-titles  items-center justify-center rounded-md lg:w-40 ${isNotInPath ? "lg:flex" : 'hidden'}`}>
          Filtros
      </Button>

      <Button onClick={() => setIsFilterSectionOpen(!isFilterSectionOpen)} className={`lg:hidden h-8 w-full p-2  bg-orange-500 font-titles flex items-center justify-center rounded-md lg:w-40 ${isNotInPath ? "flex" : 'hidden'}`}>
        open factions section
      </Button>

      <Button onClick={() => setIsAttributeFilterMenuOpen(!isAttributeFilterMenuOpen)} className={`lg:hidden h-8 w-full p-2  bg-orange-500 font-titles flex items-center justify-center rounded-md lg:w-40 ${isNotInPath ? "flex" : 'hidden'}`}>
        open attributes section
      </Button>
      <Button onClick={() => setIsSpecialtyFilterOpen(!isSpecialtyFilterOpen)} className={`lg:hidden h-8 w-full p-2  bg-orange-500 font-titles flex items-center justify-center rounded-md lg:w-40 ${isNotInPath ? "flex" : 'hidden'}`}>
        open Specialty section
      </Button>

      <input
        onChange={(e) => handleNamefilter(e)}
        type="text"
        className={`bg-white p-1 rounded-md focus:outline-none font-titles lg:w-[50%] ${isNotInPath ? "flex" : 'hidden'}`}
        name="query"
        placeholder="Search character"
      />
      {isNotInPath && (
        <span className={`lg:hidden `}>
          <FactionFilterSection isOpen={isFilterSectionOpen} />
          <AttributeFilterMenu isOpen={isAttributeFilterMenuOpen} />
          <SpecialtyFilterMenu isOpen={isSpecialtyFilterOpen}></SpecialtyFilterMenu>
        </span>
      )
      }
    </nav>
  );
}
