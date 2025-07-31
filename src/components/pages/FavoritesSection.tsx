import AgentCardSmall from "@/components/atoms/AgentCardSmall.tsx"
import SqueletonCard from "@/components/atoms/SqueletonCard.tsx"
import useFilteredAgentsData from "@/utils/hooks/useFilteredAgentsData"
import { useContext } from "react"
import FavoritesContext from "@/context/FavoritesContext"


export default function FavoritesSection() {
    const { filteredData, isLoading } = useFilteredAgentsData()
    const { favorites } = useContext(FavoritesContext)

    const favoritesAgent = filteredData.filter(a => favorites?.includes(a.agent_id))

    return (
        <section className="p-4 w-full grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">

            {isLoading ?
                (
                    <>
                        <SqueletonCard />
                        <SqueletonCard />
                        <SqueletonCard />
                        <span className="hidden lg:flex">
                            <SqueletonCard />
                        </span>
                    </>
                ) :
                (

                    filteredData.length > 0 && (favoritesAgent.map(a => (
                        <AgentCardSmall
                            key={a.agent_id}
                            id={a.agent_id}
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