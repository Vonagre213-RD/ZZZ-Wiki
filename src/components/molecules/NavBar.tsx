import { useState, type SetStateAction } from "react";
import useFiltersContext from "@/utils/hooks/useFiltersContext";
import { useUserDataContext } from "@/utils/hooks/useUserDataContext";
import { useLocation } from "react-router-dom";

import NavButton from "../atoms/NavButton";
import Button from "../atoms/Button";
import FactionFilterSection from "./FactionFilterSection";
import AttributeFilterMenu from "./AttributeFilterMenu";
import SpecialtyFilterMenu from "./SpecialtyFilterMenu";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

type modalType = "login" | "register" | "N/A";
type filterMenuType = "factions" | "attributes" | "specialty" | "N/A";

interface props {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
}
export default function NavBar({ isModalOpen, setIsModalOpen }: props) {

  const [activeFilterMenu, setActiveFilterMenu] = useState<filterMenuType>("N/A");
  const [activeModal, setActiveModal] = useState<modalType>("N/A");

  const location = useLocation();

  const isNotInPath = location.pathname !== "/" && location.pathname !== "/Favorites" ? false : true;
  const { dispatch } = useFiltersContext();
  const { state, dispatch: accountDispatch } = useUserDataContext();

  const routes = [
    { name: "home", path: "/" },
    { name: "favorites", path: "Favorites" }
  ];

  const handleNamefilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_NAME_FILTER", payload: e.target.value });
  };

  const handleLogout = async () => {
    accountDispatch({type:"RESET"});
    const credentials = {
      user_id: state.user.user_id,
      username: state.user.username
    };
    try {

      await fetch("https://zenlesszonezeroapi.onrender.com/api/auth/profile/logout", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(credentials)
      });
    } catch (error) {
      console.error(error);
    }
    finally {
      localStorage.removeItem("zzzApiLoginCredentials");

    }

  };

  const filterButtonClass = "lg:hidden animation-scale duration-500 h-8 w-full p-2  bg-orange-500 font-titles flex items-center justify-center rounded-md lg:w-40  hover:bg-orange-600 active:scale-90";
  const accountLoginButtons = "h-8 w-full p-2  bg-indigo-500 font-titles flex items-center justify-center rounded-md lg:w-40 cursor-pointer hover:bg-indigo-600";
  return (
    <nav
      className={`flex flex-col w-full transition-all duration-700 gap-4  overflow-scroll lg:overflow-hidden
                    lg:flex-row lg:max-h-10 `}
    >
      {routes.map((b) => (
        <NavButton
          key={b.name}
          activeClass="bg-fosfo-600"
          className="h-8 w-full p-2 focus:outline-none animation-scale duration-400 bg-fosfo-500 font-titles flex items-center justify-center rounded-md hover:bg-fosfo-550 active:scale-80
                        lg:w-40"
          to={`${b.path}`}
        >
          {b.name}
        </NavButton>
      ))}

      <Button onClick={() => setIsModalOpen(!isModalOpen)} className={`hidden animation-scale duration-400 h-8 w-full p-2  bg-orange-500 font-titles  items-center justify-center rounded-md lg:w-40  hover:bg-orange-600 active:scale-80 ${isNotInPath ? "lg:flex" : 'hidden'}`}>
        Filters
      </Button>

      {
        state.isloggedIn === false ? (
          <>
            <Button onClick={() => setActiveModal("login")} className={`${accountLoginButtons}  text-white `}>
              Login
            </Button>
            <Button onClick={() => setActiveModal("register")} className={accountLoginButtons}>
              register
            </Button>
          </>
        ) : (
          <>
            <h2 className=" font-titles  h-8 w-full p-2  bg-blue-500 flex items-center justify-center rounded-md lg:max-w-40">{state.user.username}</h2>
            <Button onClick={() => handleLogout()} className={`flex h-8 w-full p-2 animation-scale duration-400  bg-red-500 font-titles  items-center justify-center rounded-md lg:w-40 hover:bg-red-600 active:scale-80`}>
              logout
            </Button>
          </>
        )

      }


      <Button onClick={() => setActiveFilterMenu(activeFilterMenu === "factions" ? "N/A" : "factions")} className={`${filterButtonClass} ${isNotInPath ? "flex" : 'hidden'}`}>
        {activeFilterMenu === "factions" ? "close" : "open"} factions section
      </Button>

      <Button onClick={() => setActiveFilterMenu(activeFilterMenu === "attributes" ? "N/A" : "attributes")} className={`${filterButtonClass} ${isNotInPath ? "flex" : 'hidden'}`}>
        {activeFilterMenu === "attributes" ? "close" : "open"}  attributes section
      </Button>
      <Button onClick={() => setActiveFilterMenu(activeFilterMenu === "specialty" ? "N/A" : "specialty")} className={`${filterButtonClass} ${isNotInPath ? "flex" : 'hidden'}`}>
        {activeFilterMenu === "specialty" ? "close" : "open"} Specialty section
      </Button>

      <input
        onChange={(e) => handleNamefilter(e)}
        type="text"
        className={`lg:hidden bg-white p-1 rounded-md focus:outline-none font-titles ${isNotInPath ? "flex" : 'hidden'}`}
        name="query"
        placeholder="Search character"
      />
      {
        isNotInPath && (
          <span className={`lg:hidden overflow-scroll`}>
            <div>
              <FactionFilterSection isOpen={activeFilterMenu === "factions"} />
              <AttributeFilterMenu isOpen={activeFilterMenu === "attributes"} />
              <SpecialtyFilterMenu isOpen={activeFilterMenu === "specialty"} />
            </div>
          </span>
        )
      }

      <LoginModal isOpen={activeModal === "login"} setIsOpen={setActiveModal} />
      <RegisterModal isOpen={activeModal === "register"} setIsOpen={setActiveModal} />
    </nav >
  );
}
