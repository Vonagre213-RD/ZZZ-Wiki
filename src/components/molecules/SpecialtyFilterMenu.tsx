import { useContext } from "react"
// import { useLocation } from "react-router-dom";
import FiltersContext from "@/context/FiltersContext"
import BurguerMenu from "./BurgerMenu";
import Button from "@/components/atoms/Button"
export default function SpecialtyFilterMenu({ isOpen }: { isOpen: boolean }) {
    // const location = useLocation()

    // const isNotInPath = location.pathname !== "/" && location.pathname !== "/Favorites" ? false : true

    const context = useContext(FiltersContext)
    if (!context) {
        throw new Error("Attribute Filter Menu must be used within a FiltersProvider")
    }
    const { state, dispatch } = context

    const specialties = [
        {
            name: "Attack",
            url: "/images/ui_Icons/specialty/attackIcon.png"
        },
        {
            name: "Stun",
            url: "/images/ui_Icons/specialty/stunIcon.png"
        },
        {
            name: "Support",
            url: "/images/ui_Icons/specialty/supportIcon.png"
        },
        {
            name: "Defense",
            url: "/images/ui_Icons/specialty/defenseIcon.png"
        },
        {
            name: "Anomaly",
            url: "/images/ui_Icons/specialty/anomalyIcon.png"
        },
        {
            name: "Rupture",
            url: "/images/ui_Icons/specialty/ruptureIcon.png"
        }
    ];

    const handleSetAttributeFilter = (specialtyName: string) => {
        dispatch({ type: "SET_SPECIALITY_FILTER", payload: specialtyName })
        console.log(state.attributeFilter)
    }

    return (
        <BurguerMenu isOpen={isOpen}>

            <section className="grid grid-cols-3 md:flex md:flex-wrap md:justify-center justify-items-center mt-4 gap-4">
                {specialties.map((a) => (
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