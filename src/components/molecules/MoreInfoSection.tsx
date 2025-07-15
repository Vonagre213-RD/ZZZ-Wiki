import { useParams } from "react-router-dom"
import useAgentsData from "@/hooks/useAgentsData"
import AgentCardBig from "@/components/atoms/AgentCardBig"
import AgentCardMedium from "@/components/atoms/AgentCardMedium"

import SqueletonCardBig from "@/components/atoms/SqueletonCardBig"
import SqueletonCardMedium from "@/components/atoms/SqueletonCardMedium"

export default function MoreInfoSection() {
    const { id } = useParams()
    const { agentsData, isLoading } = useAgentsData("", "")


    const fullAgent = agentsData.find(a => a.id === id)

    if (!fullAgent || isLoading) {

        return <div className="flex justify-center p-4">
            <div className="hidden lg:flex">
                <SqueletonCardBig />
            </div>

            <span className="flex lg:hidden">
                <SqueletonCardMedium />
            </span>

        </div>
    }
    return (
        <div className="flex justify-center p-4">
            <span className="hidden lg:flex">
                <AgentCardBig
                    id={fullAgent.id}
                    rank={fullAgent.rank}
                    avatar={fullAgent.imagesurl.Avatar}
                    portrait={fullAgent.imagesurl.Portrait}
                    name={fullAgent.name}
                    gender={fullAgent.gender}
                    height={fullAgent.height}
                    birthday={fullAgent.birthday}
                    species={fullAgent.species}
                    faction={fullAgent.faction}
                    attribute={fullAgent.attribute}
                    specialty={fullAgent.specialty}
                    type={fullAgent.type}
                    agent_intel={fullAgent.agent_intel}
                />
            </span>

            <span className="flex lg:hidden">
                <AgentCardMedium
                    id={fullAgent.id}
                    rank={fullAgent.rank}
                    avatar={fullAgent.imagesurl.Avatar}
                    portrait={fullAgent.imagesurl.Portrait}
                    name={fullAgent.name}
                    gender={fullAgent.gender}
                    height={fullAgent.height}
                    birthday={fullAgent.birthday}
                    species={fullAgent.species}
                    faction={fullAgent.faction}
                    attribute={fullAgent.attribute}
                    specialty={fullAgent.specialty}
                    type={fullAgent.type}
                    agent_intel={fullAgent.agent_intel}
                />
            </span>

        </div>

    )
}