import AgentCardSmall from "@/components/atoms/AgentCardSmall.tsx"
import SqueletonCard from "@/components/atoms/SqueletonCard.tsx"
import useAgentsData from "@/hooks/useAgentsData"

import { useContext} from "react"
import FavoritesContext from "@/context/FavoritesContext"

interface prop {
    nameFilter: string,
    factionFilter: string
}
export default function FavoritesSection({ nameFilter, factionFilter }: prop) {
    const { agentsData, isLoading } = useAgentsData(nameFilter, factionFilter)
    
    const {favorites} = useContext(FavoritesContext)
     
    const favoritesAgent = agentsData.filter(a => favorites?.includes(a.id))
    
    return (
        <section className="p-4 w-full grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

            {isLoading ?
                (
                <>
                <SqueletonCard />
                <SqueletonCard />
                <SqueletonCard />
                </>
                ) :
                (

                    agentsData.length > 0 && (favoritesAgent.map(a => (
                        <AgentCardSmall
                            key={a.id}
                            id={a.id}
                            avatar={a.imagesurl.Avatar}
                            name={a.name}
                            faction={a.faction}
                            attribute={a.attribute}
                            specialty={a.specialty}
                            type={a.type}
                            rank={a.rank}
                        />)

                    )))}


        </section>
    )
}