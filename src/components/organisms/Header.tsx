import BurgerMenuIcon from "@/assets/svgs/BurgerMenuIcon.tsx";
import Button from "../atoms/Button";
import BurguerMenu from "../molecules/BurgerMenu";
import { useState } from "react";
import NavBar from "../molecules/NavBar";


export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="flex-col bg-neutral-800 w-full min-h-20 p-4 flex items-center sticky top-0 z-10 lg:flex-row">
      <span className="w-full flex items-center">
        <h1 className="text-white text-nowrap font-titles md:text-2xl">Zenless Zone Zero Api</h1>
        <Button className="ml-auto lg:hidden" onClick={handleBurgerMenu}>
          <BurgerMenuIcon size="50" color="white" />
        </Button>
      </span>

      <BurguerMenu isOpen={isOpen}>
          <NavBar/>
      </BurguerMenu>
    </header>
  );
}
