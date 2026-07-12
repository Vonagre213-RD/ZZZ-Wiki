import { useEffect, useState } from "react";
import { isOk } from "@/Types/result";
import { BASE_URL } from "@/Types/globals";

type Comment = {
  username: string;
  commentcontent: string;
  commentdate: string;
}

interface ResponseData {
  successful: boolean;
  comments: Comment[];
}

export default function useAgentsComment(agentId: string){
    const [comments, setComments] = useState<Comment[]>([]);
    const [fetchError, setFetchError] = useState<string | null>(null);

    useEffect(() => {
        const fetchComments = async() => {
            try {
                const response = await fetch(`${BASE_URL}/api/agentsComments/${agentId}`);
                const body = await response.json();

                if (isOk(body)) {
                    setComments(body.value.comments);
                } else {
                    setFetchError(body.error.message);
                    console.error(body.error.message);
                }
            } catch (e) {
                console.error("fetch error:", e);
                setFetchError(e instanceof Error ? e.message : String(e));
                console.error(e);
            }
        };

        fetchComments();
    },[]);

    return {comments, error: fetchError};
}
