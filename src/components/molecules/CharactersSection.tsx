import AgentCardSmall from "@/components/atoms/AgentCardSmall.tsx"
import SqueletonCard from "@/components/atoms/SqueletonCard.tsx"
import useAgentsData from "@/hooks/useAgentsData"

interface prop {
    nameFilter: string,
    factionFilter: string
}
export default function CharactersSection({ nameFilter, factionFilter }: prop) {
    const { agentsData, isLoading } = useAgentsData(nameFilter, factionFilter)


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

                    agentsData.length > 0 && (agentsData.map(a => (
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