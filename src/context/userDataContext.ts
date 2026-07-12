import { createContext } from "react";
import type { userDataState, userDataActions } from "@/Types/userDataTypes";

  
type userDataContextType = {
  state: userDataState;
  dispatch: React.Dispatch<userDataActions>;
};

export const userDataContext = createContext<userDataContextType | undefined>(undefined);

