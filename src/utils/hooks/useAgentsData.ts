import { useState, useEffect } from "react";
import type { AgentDataType } from "@/Types/agents";

const baseUrl = "https://zenlesszonezeroapi.onrender.com/characters/agents/";
export default function useAgentsData() {
  const [agentsData, setAgentsData] = useState<AgentDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    const getAgents = async () => {

      try {
        setIsLoading(true);

        const res = await fetch(baseUrl + "All");
        
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
