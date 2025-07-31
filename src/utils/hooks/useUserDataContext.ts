import { userDataContext } from "@/context/userDataContext";
import { useContext } from "react";
import type { userDataState, userDataActions } from "@/Types/userDataTypes";

  
type userDataContextType = {
  state: userDataState;
  dispatch: React.Dispatch<userDataActions>;
};

export function useUserDataContext():userDataContextType {
    const context = useContext(userDataContext)
    if(!context){
        throw new Error("context is undefined")
    }

    return context
}