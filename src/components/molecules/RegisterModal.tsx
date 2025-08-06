import React, { useState, type FormEvent, type SetStateAction } from "react";
import Modal from "./modal";
import Button from "../atoms/Button";
import CloseIcon from "../../assets/svgs/CloseIcon";

interface RegisterModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<"login" | "register" | "N/A">>;
}

export default function RegisterModal({ isOpen, setIsOpen }: RegisterModalProps) {

  const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    setNameErrorMessage("");
    setPasswordErrorMessage("");

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

    const response = await fetch("https://zenlesszonezeroapi.onrender.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: credentials
    });

    if (response.status == 200) {
      setIsOpen('N/A');
      localStorage.setItem("zzzApiLoginCredentials", credentials);
    }
    else if (response.status === 401) {
      setNameErrorMessage("duplicated username");
    }

    const response2 = await fetch("https://zenlesszonezeroapi.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: credentials
    });
    if(response2.status == 200){

      const result2 = await response2.json();
    
     localStorage.setItem("zzzApiLoginCredentials", result2.token);

     window.location.reload();
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
        <h2 className="text-xl font-titles mb-4">Register</h2>
        <form method="post" onSubmit={(e) => handleRegister(e)} className="flex flex-col gap-4">
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

          <button type="submit" className="bg-indigo-600 rounded-full text-white p-2 mt-4">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
} 