import useIconCheck from "@/utils/hooks/useAgentsIconCheck";
import { useContext } from "react";
import Button from "./Button";
import FavoritesContext from "@/context/FavoritesContext";
interface AgentsCardProps {
  id: string;
  rank: string;
  avatar: string;
  portrait: string;
  name: string;
  gender: string;
  height: string;
  birthday: string;
  species: string;
  faction: string;
  attribute: string;
  specialty: string;
  type: string;
  agent_intel: string;
}

export default function AgentCardBig({
  id,
  rank,
  portrait,
  name,
  gender,
  height,
  birthday,
  species,
  faction,
  attribute,
  specialty,
  type,
  agent_intel
}: AgentsCardProps) {
  const { favorites, addAgent, removeAgent } = useContext(FavoritesContext);

  const isFavUrl = favorites?.includes(id);

  const handleFavorite = (id: string) => {
    if (!isFavUrl) {
      addAgent(id);
    } else {
      removeAgent(id);
    }
  };

  const { rankUrl, factionUrl, attributeUrl, specialtyUrl, typeUrl } = useIconCheck({
    factionName: faction,
    rankName: rank,
    attributeName: attribute,
    specialtyName: specialty,
    typeName: type
  });

  return (
    <article className="w-full max-w-[95vw] flex flex-row bg-zinc-800 border-2 border-fosfo-500 rounded-2xl overflow-hidden shadow-xl">
      <aside className="text-white w-1/3 bg-zinc-900 flex flex-col items-center p-6  border-r-2 border-fosfo-500">
        {rank !== "N/A" && rank && (
          <img
            className="absolute -translate-x-36 -translate-y-2  w-8 h-8"
            src={rankUrl}
            alt={`${rank} icon`}
          />
        )}
        <img
          className="rounded-lg w-full h-auto object-cover"
          src={`https://gyyncgbcywxpoaifawlq.supabase.co/storage/v1/object/public/images${portrait}`}
          alt={`${name} portrait`}
        />
        <Button
          onClick={() => handleFavorite(id)}
          className="h-8 w-8 absolute translate-x-36 -translate-y-2 hover:scale-105"
        >
          <img
            src={`/images/ui_Icons/generals/${isFavUrl ? "iconStar2.png" : "iconStar1.png"}`}
            alt=""
            className="h-8 w-8"
          />
        </Button>
      </aside>

      <section className="w-2/3 flex flex-col p-6 gap-6">
        <h2 className="text-3xl font-titles text-white font-semibold w-full text-center">{name}</h2>

        <div className="flex items-center gap-2">
          <img className="w-20 h-20" src={factionUrl} alt={faction} />
          <p className="text-white text-2xl font-titles">{faction}</p>
        </div>

        <div className="grid grid-cols-4  gap-4 text-white font-titles">
          <p className="text-zinc-300">
            <span className="text-zinc-200">Gender:</span> {gender}
          </p>
          <p className="text-zinc-300">
            <span className="text-zinc-200">Height:</span> {height}
          </p>

          <p className="text-zinc-300">
            <span className="text-zinc-200">Birthday:</span> {birthday}
          </p>
          <p className="text-zinc-300">
            <span className="text-zinc-200">Specie:</span> {species}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center font-titles">
          <div>
            <h4 className="text-sm font-semibold text-white">{attribute}</h4>
            {attribute !== "N/A" && (
              <img className="w-10 h-10 mx-auto" src={attributeUrl} alt={`${attribute} icon`} />
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">{specialty}</h4>
            {specialty !== "N/A" && (
              <img className="w-10 h-10 mx-auto" src={specialtyUrl} alt={`${specialty} icon`} />
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">{type}</h4>
            {type !== "N/A" && (
              <img className="w-10 h-10 mx-auto" src={typeUrl} alt={`${type} icon`} />
            )}
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4   text-white text-sm font-sans leading-relaxed">
          {agent_intel.split("\\n").map((linea, index) => (
            <p key={index} className="mb-2">
              {linea}
            </p>
          ))}
        </div>
      </section>
    </article>
  );
}
