import BurgerMenuIcon from "@/assets/svgs/BurgerMenuIcon.tsx";
import Button from "../atoms/Button";
import BurguerMenu from "../molecules/BurgerMenu";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import NavBar from "../molecules/NavBar";
import FiltersSectionLg from "./FiltersSectionLg";
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const location = useLocation()

  const isInPath = location.pathname !== "/" && location.pathname !== "/Favorites" ? false : true
  console.log("path" + isInPath)
  const handleBurgerMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className="flex-col bg-neutral-800 w-full min-h-20 p-4 flex items-center sticky top-0 z-10 lg:flex lg:flex-row">
        <span className="w-full flex items-center">
          <h1 className="text-white text-nowrap font-titles md:text-2xl">Zenless Zone Zero Api</h1>
          <Button className="ml-auto lg:hidden" onClick={handleBurgerMenu}>
            <BurgerMenuIcon size="50" color="white" />
          </Button>
        </span>


        <BurguerMenu className={"lg:max-h-[500px]"} isOpen={isOpen}>
          <NavBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </BurguerMenu>
      </header>

      {isInPath && (
        <FiltersSectionLg isOpen={isModalOpen}/>
      )

      }

    </>
  );
}
