import { useState, useEffect } from "react";
import type { AgentDataType } from "@/Types/agents";
import { isOk } from "@/Types/result";
import { BASE_URL } from "@/Types/globals";

export default function useAgentsData() {
  const [agentsData, setAgentsData] = useState<AgentDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAgents = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/characters/agents/all`);

        const body = await response.json();

        if (isOk(body)) {
          setAgentsData(body.value);
        } else {
          setError(body.error.message);
          console.error(body.error.message);
        }
      } catch (e) {
        console.error("fetch error:", e);
        setError(e instanceof Error ? e.message : String(e));
      }

      setIsLoading(false);
    };

    getAgents();

  }, []);
  return { agentsData, isLoading, error };
}
