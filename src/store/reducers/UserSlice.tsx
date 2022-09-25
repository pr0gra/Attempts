import { IUser } from "../../interfaces/IUser";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
      usersFetching(state)
    }
});

export default userSlice.reducer