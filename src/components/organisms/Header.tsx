import BurgerMenuIcon from "@/assets/svgs/BurgerMenuIcon.tsx";
import Button from "../atoms/Button";
import BurguerMenu from "../molecules/BurgerMenu";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import NavBar from "../molecules/NavBar";
import FilterModalSection from "../molecules/FilterModalSection";
import useFiltersContext from "@/utils/hooks/useFiltersContext";

type filtersType =
  | "factions"
  | "attributes"
  | "specialty"
  | "N/A"
// import FiltersSectionLg from "./FiltersSectionLg";
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isFilterSectionOpen, setIsFilterSectionOpen] = useState<filtersType>("N/A");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const location = useLocation();

  const { dispatch } = useFiltersContext();
  const isInPath = location.pathname !== "/" && location.pathname !== "/Favorites" ? false : true;
  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleNamefilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_NAME_FILTER", payload: e.target.value });
  };
  return (
    <>
      <header className="flex-col bg-neutral-800 w-full min-h-20 p-4 flex lg:items-center sticky top-0 z-10 lg:flex lg:flex-row">
        <span className="lg:w-[40%] flex items-center  justify-between">
          <h1 className="text-white text-nowrap font-titles md:text-2xl">Zenless Zone Zero Api</h1>
          <Button className="ml-auto lg:hidden" onClick={handleBurgerMenu}>
            <BurgerMenuIcon size="50" color="white" />
          </Button>
        </span>

        <BurguerMenu animation="Drop" className={"lg:max-h-[500px]"} isOpen={isOpen}>
          <NavBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </BurguerMenu>
      </header>


      {isInPath && (
        <BurguerMenu className="text-white bg-neutral-800 fixed w-[300px] right-0 border-2 max-h-[350px] border-fosfo-500/50 z-10 rounded-2xl mt-4" blockScroll={true} animation="Left" isOpen={isModalOpen}>
          <div className="w-full p-4 gap-8 flex flex-col">
            <Button onClick={() => dispatch({ type: "RESET" })} className="h-8 w-full  p-2 focus:outline-none bg-red-500 hover:bg-red-600 active:scale-75 animation-scale duration-400  font-titles flex items-center justify-center rounded-md text-black  ">
              clear filters
            </Button>
            {['factions', 'attributes', "specialty"].map((p) => {
              return (
                <Button key={p} onClick={() => setIsFilterSectionOpen(p as filtersType)} className="h-8 w-full  p-2 focus:outline-none bg-fosfo-600 font-titles flex items-center justify-center rounded-md text-black cursor-pointer hover:bg-fosfo-550 active:scale-75 animation-scale duration-400 ">
                  {p}
                </Button>
              );
            })}
            <input
              onChange={(e) => handleNamefilter(e)}
              type="text"
              className={` bg-white text-black p-1 rounded-md focus:outline-none font-titles `}
              name="query"
              placeholder="Search character"
            />
          </div>


        </BurguerMenu>
      )
      }
      <FilterModalSection isFilterSectionOpen={isFilterSectionOpen} setIsFilterSectionOpen={setIsFilterSectionOpen} />
    </>
  );
}
