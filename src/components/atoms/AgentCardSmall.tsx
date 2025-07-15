import { useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import FavoritesContext from "@/context/FavoritesContext"
import { useNavigate } from "react-router-dom"
import useIconCheck from "@/hooks/useAgentsIconCheck"

import Button from "./Button"
interface agentsCardProps {
    id: string,
    avatar: string,
    name: string,
    faction: string,
    attribute: string,
    specialty: string,
    type: string
    rank: string
}

export default function AgentCardSmall({ id, avatar, name, faction, attribute, specialty, type, rank }: agentsCardProps) {
    const { favorites, addAgent, removeAgent } = useContext(FavoritesContext)
    const [isAnimating, setIsAnimating] = useState<boolean>()

    const isFavUrl = favorites?.includes(id)
    const navigate = useNavigate()
    const location = useLocation()

    const handleFavorite = (id: string) => {
        if (!isFavUrl) {
            addAgent(id)
        }
        else if (location.pathname === "/Favoritos") {
            setIsAnimating(true)
            setTimeout(() => {
                removeAgent(id)
            }, 500)
        }
        else {
            removeAgent(id)

        }
    }

    const RedirectToAgentSection = (id: string) => {
        navigate(`/Mas/${id}`)
    }

    const { attributeUrl, specialtyUrl, typeUrl, rankUrl, factionUrl } = useIconCheck({
        attributeName: attribute,
        specialtyName: specialty,
        typeName: type,
        rankName: rank,
        factionName: faction
    })

    return (
        <article className={`min-w-[22rem] max-w-[22rem] bg-zinc-800 text-zinc-200 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-fosfo-500 transition-all duration-500 flex flex-col items-center gap-5 text-center font-titles
            ${isAnimating ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}
        `}>

            {faction != "N/A" && (<img className="h-26 w-26 " src={factionUrl} alt={`${faction} icon`} />)}

            {rank != "N/A" && (<img className="h-8 w-8 absolute -translate-x-36 -translate-y-2" src={rankUrl} alt={`${rank} icon`} />)}

            <Button onClick={() => handleFavorite(id)
            } className="h-8 w-8 absolute translate-x-36 -translate-y-2 hover:scale-105">
                <img src={`/images/Icons/generals/${isFavUrl ? "iconStar2.png" : "iconStar1.png"}`} alt="" className="h-8 w-8" />
            </Button>
            <Button className="hover:scale-105" onClick={() =>RedirectToAgentSection(id)}  title="Go to see more Section">

                <img
                    src={`https://gyyncgbcywxpoaifawlq.supabase.co/storage/v1/object/public/images${avatar}`}
                    alt={`${name} avatar Image`}
                    className="w-32 h-32 object-cover rounded-full border-4 border-fosfo-600"
                />
            </Button>

            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-sm text-fosfo-400 tracking-wide uppercase">{faction}</p>
            </div>

            <div className="flex justify-center gap-8 w-full mt-2">

                <div className="flex flex-col items-center gap-1">
                    {attribute != "N/A" && (<img className="w-8 h-8" src={attributeUrl} alt={`${attribute} icon`} />)}
                    <span className="text-sm">{attribute}</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    {specialty != "N/A" && (<img className="w-8 h-8" src={specialtyUrl} alt={`${specialty} icon`} />)}
                    <span className="text-sm">{specialty}</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    {type != "N/A" && (<img className="w-8 h-8" src={typeUrl} alt={`${type} icon`} />)}
                    <span className="text-sm">{type}</span>
                </div>
            </div>
        </article>
    )
}
