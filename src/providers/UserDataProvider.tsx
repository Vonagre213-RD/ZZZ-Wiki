import { userDataContext } from "@/context/userDataContext";
import { useReducer } from "react";
import type { userDataState, userDataActions } from "@/Types/userDataTypes";


const initialState: userDataState = {
  isloggedIn: false,
  token: "",
  user: {
    user_id: "",
    username: ""
  },
};

const reducer = (state: userDataState, action: userDataActions): userDataState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isloggedIn: action.payload.isloggedIn,
        token: action.payload.token,
        user: {
          user_id: action.payload.user.user_id,
          username: action.payload.user.username
        }
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

type userDataProviderProps = {
  children: React.ReactNode;
};

export default function UserDataProvider({ children }: userDataProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userDataContext.Provider value={{ state, dispatch }}>
      {children}
    </userDataContext.Provider>
  );
}
