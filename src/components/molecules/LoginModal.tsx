import React, { useState, type FormEvent, type SetStateAction } from "react";
import Modal from "./modal";
import Button from "../atoms/Button";
import CloseIcon from "../../assets/svgs/CloseIcon";
import { isOk } from "@/Types/result";
import { BASE_URL } from "@/Types/globals";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<"login" | "register" | "N/A">>;
}

interface LoginResponse {
  token: string;
}

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {

  const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const [networkError, setNetworkError] = useState<string>("");

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {

    setNameErrorMessage("");
    setPasswordErrorMessage("");
    setNetworkError("");
    event.preventDefault();
    const fields = new window.FormData(event.currentTarget);
    const { username, userpassword } = Object.fromEntries(fields.entries());
    
    if (username.toString().length < 3) {
      setNameErrorMessage("username must have more than three characters"); return;
    }
    if (userpassword.toString().length < 3) {
      setPasswordErrorMessage("userpassword must have more than three characters"); return;
    }

    const data = {
      username: username,
      userpassword: userpassword
    };
    const credentials = JSON.stringify(data);

    try {
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: credentials
      });

      const body = await response.json();

      if (!isOk(body)) {
        setNetworkError(body.error.message);
        return;
      }

      setIsOpen('N/A');
      localStorage.setItem("zzzApiLoginCredentials", body.value.token);
      window.location.reload();
    } catch (e) {
      console.error("fetch error:", e);
      setNetworkError(e instanceof Error ? e.message : String(e));
    }

  };
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg relative w-full max-w-xl min-h-[200px]">
        <Button
          onClick={() => setIsOpen("N/A")}
          className="bg-red-700 p-1 w-10 rounded-md rounded-tr-none flex justify-center z-20 absolute top-2 right-2"
        >
          <CloseIcon />
        </Button>
        <h2 className="text-xl font-titles mb-4">Login</h2>
        <form method="post" onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="p-2 min-h-[50px] rounded-full bg-neutral-700 text-white focus:outline-none"
            name="username"
          />
          {nameErrorMessage && <h6 className="text-red-500">{nameErrorMessage}</h6>}

          <input
            type="password"
            placeholder="Password"
            className="p-2 min-h-[50px] rounded-full bg-neutral-700 text-white focus:outline-none"
            name="userpassword"
          />
          {passwordErrorMessage && <h6 className="text-red-500">{passwordErrorMessage}</h6>}
          {networkError && <h6 className="text-red-500">{networkError}</h6>}

          <Button type="submit" className="bg-indigo-600 rounded-full text-white p-2 mt-4">
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
} 
