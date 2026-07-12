import { useState, useEffect } from "react";
import type { AgentDataType } from "@/Types/agents";

export default function useAgentsData() {
  const [agentsData, setAgentsData] = useState<AgentDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    const getAgents = async () => {

      try {
        setIsLoading(true);

        const res = await fetch("https://zenless-zone-zero-api-private.onrender.com/characters/agents/all");
        
        const data: AgentDataType[] = await res.json();

        console.log(data);
        setAgentsData(data);
        setIsLoading(false);

      } catch (error) {

        setError(error);
        console.log(error);

      }
    };

    getAgents();

  }, []);
  return { agentsData, isLoading, error };
}
