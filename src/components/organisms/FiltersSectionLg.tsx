import Modal from "../molecules/modal";
import FactionFilterSection from "../molecules/FactionFilterSection";
import AttributeFilterMenu from "../molecules/AttributeFilterMenu";
import SpecialtyFilterMenu from "../molecules/SpecialtyFilterMenu";

import Button from "../atoms/Button";
import {useState, useContext} from "react";
import FiltersContext from "@/context/FiltersContext";

interface props {
    isOpen: boolean
}
export default function FiltersSectionLg({isOpen}: props) {
    const [isFactionFilterOpen, setIsFactionFilterOpen] = useState<boolean>(false)
    const [isAttributeFilterOpen, setIsAttributeFilterOpen] = useState<boolean>(false)
    const [isSpecialtyFilterOpen, setIsSpecialtyFilterOpen] = useState<boolean>(false)

    
  const context = useContext(FiltersContext)
  if (!context) {
    throw new Error("useAgentsDataFilter must be used within a FiltersProvider")
  }
  const { dispatch } = context

    return (
        <Modal className="hidden lg:flex justify-center" isOpen={isOpen} >
            <article className="flex flex-col gap-2 items-center justify-center justify-items-center rounded-lg w-[80%] max-h-[510px] mt-2 p-2  bg-zinc-800">

                
                <Button onClick={() => dispatch({type:"RESET"})} className="h-8 w-80 p-2 text-nowrap text-black  bg-fosfo-600 font-titles flex items-center justify-center rounded-md
                        -4 z-30">
                    Clear Filters
                </Button>

                <Button onClick={() => setIsFactionFilterOpen(!isFactionFilterOpen)} className="h-8 w-80 p-2 text-nowrap text-black  bg-fosfo-600 font-titles flex items-center justify-center rounded-md
                        ">
                    Open Faction Filter Section
                </Button>

                <FactionFilterSection isOpen={isFactionFilterOpen} />

                <Button onClick={() => setIsAttributeFilterOpen(!isAttributeFilterOpen)} className="h-8 w-80 p-2 text-nowrap text-black  bg-fosfo-600 font-titles flex items-center justify-center rounded-md
                         ">
                    Open Attribute Filter Section
                </Button>

                <AttributeFilterMenu isOpen={isAttributeFilterOpen} />

                <Button onClick={() => setIsSpecialtyFilterOpen(!isSpecialtyFilterOpen)} className="h-8 w-80 p-2 text-nowrap text-black  bg-fosfo-600 font-titles flex items-center justify-center rounded-md
                         ">
                    Open Specialty Filter Section
                </Button>
                <SpecialtyFilterMenu isOpen={isSpecialtyFilterOpen}/>
            </article>
        </Modal>
    )
}