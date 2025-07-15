import useIconCheck from "@/hooks/useAgentsIconCheck";
import FavoritesContext from "@/context/FavoritesContext"
import { useContext } from "react";
import Button from "./Button";

interface AgentsCardProps {
    id: string
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

export default function AgentCardMedium({ id, rank, portrait, name, gender, height, birthday, species, faction, attribute, specialty, type, agent_intel }: AgentsCardProps) {

    const { favorites, addAgent, removeAgent } = useContext(FavoritesContext)

    const isFavUrl = favorites?.includes(id)

    const handleFavorite = (id: string) => {
        if (!isFavUrl) {
            addAgent(id)
        }
        else {
            removeAgent(id)

        }
    }

    const { rankUrl, factionUrl, attributeUrl, specialtyUrl, typeUrl } = useIconCheck({
        factionName: faction,
        rankName: rank,
        attributeName: attribute,
        specialtyName: specialty,
        typeName: type
    })

    return (
        <article className="flex flex-col  max-w-90 bg-zinc-800  border-2 border-fosfo-500 rounded-2xl ">

            <Button onClick={() => handleFavorite(id)
            } className="h-8 w-8 absolute translate-x-75 translate-y-36 hover:scale-105">
                <img src={`/public/images/Icons/generals/${isFavUrl ? "iconStar2.png" : "iconStar1.png"}`} alt="" className="h-8 w-8" />
            </Button>
            <section className="flex flex-col p-4 gap-2">
                <div className="flex flex-col gap-3">
                    <h2 className="p-2 text-2xl text-center font-semibold font-titles bg-zinc-900 rounded-2xl text-fosfo-500">{name}</h2>
                    <p className="bg-zinc-900 rounded-2xl text-fosfo-500 font-titles text-center text-fosfo-400 tracking-wide uppercase">{faction}</p>
                </div>

                <span>

                    <img className="w-auto h-auto rounded-lg" src={`https://gyyncgbcywxpoaifawlq.supabase.co/storage/v1/object/public/images${portrait}`} alt={`${name} portrait image`} />
                </span>
            </section>
            <span className="p-2 gap-2 w-full flex flex-col items-center border-t-2 border-b-2 border-fosfo-500 ">

                {rank !== "N/A" && rank &&
                    <>
                        <h2 className="text-white text-2xl font-bold">Rank</h2>
                        <img className="w-14 h-14" src={rankUrl} alt={`${rank} icon`} />
                    </>}
            </span>

            <table className="font-titles border-b-2  border-fosfo-500 text-white w-full">
                <thead className="border-b-2 border-b-fosfo-500">
                    <tr className="text-center">
                        <th className=" border-r-2 border-r-fosfo-500   text-sm">
                            {attribute}
                        </th>
                        <th className=" p-2 text-sm">
                            {specialty}
                        </th>
                        <th className="border-l-2 border-l-fosfo-500 p-2 text-sm">
                            {type}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="text-center">
                        <td className="border-r-2 border-r-fosfo-500 p-2">
                            {attribute != "N/A" && (
                                <img className="w-10 h-10 m-auto" src={attributeUrl} alt={`${attribute} icon`} />
                            )}
                        </td>
                        <td className="border-2 border-fosfo-500 p-2">
                            {specialty != "N/A" && (
                                <img className="w-10 h-10 m-auto" src={specialtyUrl} alt={`${specialty} icon`} />
                            )}
                        </td>
                        <td className="border-l-2 border-l-fosfo-500  p-2">
                            {type != "N/A" && (
                                <img className="w-10 h-10 m-auto" src={typeUrl} alt={`${type} icon`} />
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>


            <table className="full flex-wrap text-white" >
                <tr>
                    <td className="items-center p-2 font-titles border-b-2 border-fosfo-500">
                        <h2>Gender: {gender}</h2>
                    </td>
                    <td className=" items-center w-45 p-2 font-titles border-b-2 border-l-2 border-fosfo-500">
                        <h2>Height: {height}</h2>
                    </td>

                </tr>
                <tr>
                    <td className=" items-center p-2 font-titles border-b-2  border-fosfo-500">
                        <h2>Birthday: {birthday}</h2>
                    </td>
                    <td className=" items-center p-2 font-titles border-b-2 border-l-2 border-fosfo-500">
                        <h2>Specie: {species}</h2>
                    </td>
                </tr>

                <tr >
                    <td colSpan={2} className="font-titles border-b-2 border-fosfo-500">
                        <span className="flex h-auto text-wrap overflow-hidden items-center p-1">
                            <img className="w-8 h-8" src={factionUrl} alt={faction} />
                            <h2>{faction}</h2>
                        </span>
                    </td>
                </tr>
            </table>



            <section className="text-white flex flex-col p-2.5 gap-1">{agent_intel.split('\\n').map((linea, index) => (
                <span key={index}>
                    <p>{linea}</p>
                </span>
            ))}</section>
        </article>
    )
}