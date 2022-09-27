import { IUser } from "../../interfaces/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

export async function fetchUsers(dispatch: AppDispatch) {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await fetch(
      "https://api.github.com/search/users?q=pr0gra"
    );
    const data: IUser[] = await response.json();
    dispatch(userSlice.actions.usersFetchingSuccess(data));
  } catch (e) {
    dispatch(userSlice.actions.usersFetchingError(e));
  }
}
