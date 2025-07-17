import AgentCardSmall from "@/components/atoms/AgentCardSmall.tsx";
import SqueletonCard from "@/components/atoms/SqueletonCard.tsx";
import useFilteredAgentsData from "@/utils/hooks/useFilteredAgentsData";


export default function CharactersSection() {
  const { filteredData, isLoading } = useFilteredAgentsData();

  return (
    <section className="p-4 w-full grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {isLoading || filteredData === null ? (
        <>
          <SqueletonCard />
          <SqueletonCard />
          <SqueletonCard />
        </>
      ) : (
        filteredData.length > 0 &&
        filteredData.map((a) => (
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
          />
        ))
      )}
    </section>
  );
}
