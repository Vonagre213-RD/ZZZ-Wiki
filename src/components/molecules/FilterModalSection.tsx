import Modal from "./modal";
import Button from "../atoms/Button";
import CloseIcon from "@/assets/svgs/CloseIcon";
import { filterModals } from "@/utils/constants/filters";
import useFiltersContext from "@/utils/hooks/useFiltersContext";
import { type SetStateAction } from "react";

type filtersType =
  | "factions"
  | "attributes"
  | "specialty"
  | "N/A";

interface FilterModalSectionProps {
  isFilterSectionOpen: filtersType;
  setIsFilterSectionOpen: React.Dispatch<SetStateAction<filtersType>>;
}

export default function FilterModalSection({ isFilterSectionOpen, setIsFilterSectionOpen }: FilterModalSectionProps) {
  const { state } = useFiltersContext();

  return (
    <>
      {
        filterModals.map(({ name, title, component: Component }) => (
          <Modal key={name} className="flex justify-center items-center" isOpen={isFilterSectionOpen === name}>
            <section className="w-[65%] h-[80%] bg-zinc-900 rounded-2xl rounded-tr-none border-2 border-fosfo-600/30 overflow-hidden min-h-0">
              <header className="darkerMetalic-gradient h-[15%] flex justify-between items-center p-4 font-titles border-b-2 border-fosfo-600/30">
                <h2>{title}</h2>
                <Button onClick={() => setIsFilterSectionOpen("N/A")}
                  className="bg-red-700 p-1 w-10 rounded-md rounded-tr-none flex justify-center z-20">
                  <CloseIcon />
                </Button>
              </header>

              <nav className="w-full h-[85%]  p-4 flex flex-col min-h-0">
                <article className="flex w-full h-full bg-metalic-500 rounded-lg min-h-0">

                  <div className="w-[35%] border-fosfo-600/30 shrink-0 border-2 h-full flex justify-center items-center">
                    <h2 className="font-titles text-center text-metalic-0">
                      {
                        (() => {
                          switch (name) {
                            case "factions":
                              return state.factionFilter;
                            case "attributes":
                              return state.attributeFilter;
                            case "specialty":
                              return state.specialtyFilter;
                            default:
                              return "";
                          }
                        })()
                      }
                    </h2>
                  </div>

                  <div className="flex h-full min-h-0 p-2 justify-center w-full">
                    <Component isOpen={isFilterSectionOpen === name} />
                  </div>

                </article>
              </nav>
            </section>
          </Modal>
        ))
      }
    </>
  );
} 