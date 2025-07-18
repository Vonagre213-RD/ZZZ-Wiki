import { useContext } from "react"
// import { useLocation } from "react-router-dom";
import FiltersContext from "@/context/FiltersContext"
import BurguerMenu from "./BurgerMenu";
import Button from "@/components/atoms/Button"
export default function AttributeFilterMenu({ isOpen }: { isOpen: boolean }) {
    // const location = useLocation()

    // const isNotInPath = location.pathname !== "/" && location.pathname !== "/Favorites" ? false : true

    const context = useContext(FiltersContext)
    if (!context) {
        throw new Error("Attribute Filter Menu must be used within a FiltersProvider")
    }
    const { state, dispatch } = context

    const attributes = [
        { name: "all_Agents", url: "/images/ui_Icons/factions/agents.png" },
        {
            name: "Fire",
            url: "/images/ui_Icons/attributes/fireIcon.png"
        },
        {
            name: "Electric",
            url: "/images/ui_Icons/attributes/electricIcon.png"
        },
        {
            name: "Ice",
            url: "/images/ui_Icons/attributes/iceIcon.png"
        },
        {
            name: "Frost",
            url: "/images/ui_Icons/attributes/frostIcon.png"
        },
        {
            name: "Auric Ink",
            url: "/images/ui_Icons/attributes/auricInkIcon.png"
        },
        {
            name: "Ether",
            url: "/images/ui_Icons/attributes/etherIcon.png"
        },
        {
            name: "Physical",
            url: "/images/ui_Icons/attributes/physicalIcon.png"
        }
    ];
    const handleSetAttributeFilter = (attributeName: string) => {
        dispatch({ type: "SET_ATTRIBUTE_FILTER", payload: attributeName })
        console.log(state.attributeFilter)
    }

    return (
        <BurguerMenu  isOpen={isOpen}>

            <section className="grid grid-cols-3 md:flex md:flex-wrap md:justify-center justify-items-center mt-2 gap-4">
                {attributes.map((a) => (
                    <Button
                        key={a.name}
                        onClick={() => handleSetAttributeFilter(a.name)}
                        className={`
                        h-16 w-16  leading-4 focus:outline-none font-titles 
                        flex justify-center items-center rounded-full border-2 border-fosfo-600
                        cursor-pointer
                        `}
                    >
                        <img src={a.url} alt={`${a.name} logo in filter section`} className="h-14 object-fit" />
                    </Button>
                ))}
            </section>
        </BurguerMenu>
    )
}