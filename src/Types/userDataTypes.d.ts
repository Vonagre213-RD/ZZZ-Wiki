export type userDataState = {
  isloggedIn: boolean
  token: string;
  user: {
    user_id: string;
    username: string
  }
};

export type userDataActions =
  | {
    type: "SET_USER";
    payload: {
      isloggedIn: boolean;
      token: string;
      user: {
        user_id: string;
        username: string;
      };
    };
  }
  | { type: "RESET" };
