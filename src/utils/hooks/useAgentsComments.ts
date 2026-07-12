import { useEffect, useState } from "react";

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
    const [comments, setComments] = useState<Comment[]>();
    useEffect(() => {
        const fetchComments = async() => {
            const data = await fetch(`https://zenless-zone-zero-api-private.onrender.com/api/agentsComments/${agentId}`);
            const parsedData: ResponseData = await data.json();
            setComments(parsedData.comments);
        };

        fetchComments();
    },[]);

    return {comments};
}