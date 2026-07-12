import { useParams } from "react-router-dom";
import useAgentsData from "@/utils/hooks/useAgentsData";
import AgentCardBig from "@/components/atoms/AgentCardBig";
import AgentCardMedium from "@/components/atoms/AgentCardMedium";
import { useUserDataContext } from "@/utils/hooks/useUserDataContext";
import useAgentsComment from "@/utils/hooks/useAgentsComments";

import SqueletonCardBig from "@/components/atoms/SqueletonCardBig";
import SqueletonCardMedium from "@/components/atoms/SqueletonCardMedium";
import { useState } from "react";
import { isOk } from "@/Types/result";
import { BASE_URL } from "@/Types/globals";

export default function MoreInfoSection() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [commentError, setCommentError] = useState<string>("");
  const { id } = useParams();
  const { agentsData, isLoading } = useAgentsData();

  const { comments } = useAgentsComment(id!);

  const { state } = useUserDataContext();
  const fullAgent = agentsData.find((a) => a.agent_id === id);

  const token = localStorage.getItem("zzzApiLoginCredentials");

  const filterButtonClass = "h-8 w-[90vw] p-2 font-titles flex items-center justify-center rounded-md ";

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    setCommentError("");
    const fields = new window.FormData(e.currentTarget);
    const { commentTextArea } = Object.fromEntries(fields.entries());
    const commentData = {
      user_id: state.user.user_id,
      agent_id: id,
      username: state.user.username,
      commentContent: commentTextArea
    };

    try {
      const response = await fetch(`${BASE_URL}/api/auth/agentsComments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(commentData)
      });

      const body = await response.json();

      if (isOk(body)) {
        window.location.reload();
      } else {
        setCommentError(body.error.message);
        setIsDisabled(false);
      }
    } catch (e) {
      console.error("fetch error:", e);
      setCommentError(e instanceof Error ? e.message : String(e));
      setIsDisabled(false);
    }

  };
  if (!fullAgent || isLoading) {
    return (
      <div className="flex justify-center p-4">
        <div className="hidden lg:flex">
          <SqueletonCardBig />
        </div>

        <span className="flex lg:hidden">
          <SqueletonCardMedium />
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <span className="hidden lg:flex">
        <AgentCardBig
          id={fullAgent.agent_id}
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
          id={fullAgent.agent_id}
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
      <form onSubmit={(e) => handleCommentSubmit(e)} method="POST" className="flex flex-col">
        <textarea placeholder="comment content" className="bg-zinc-800 w-[90vw] h-20 resize-none mt-5  text-[0.75rem] text-white font-titles focus:outline-none border-2 border-fosfo-500 rounded-md" name="commentTextArea" />
        {commentError && <h6 className="text-red-500 text-[0.75rem]">{commentError}</h6>}
        <button className={`${filterButtonClass} mt-5 bg-fosfo-600 ${isDisabled ? 'pointer-events-none': 'pointer-events-auto'}`} type="submit">submit</button>
      </form>

      {comments?.map((c) => (

        <article className="p-2 bg-zinc-800 w-[90vw] h-20 resize-none mt-5 text-white text-[0.75rem] font-titles focus:outline-none border-2 border-fosfo-500 rounded-md">
          <h3>{c.username}-{c.commentdate}</h3>
          <p>{c.commentcontent}</p>
        </article>
      ))}
    </div>

  );
}
