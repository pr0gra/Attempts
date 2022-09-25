import { IUser } from "../../interfaces/IUser";
import { AppDispatch } from "../store";

export async function fetchUsers(dispatch: AppDispatch) {
 try {
    const response = await fetch("https://api.github.com/search/users?q=pr0gra")
    const data: IUser[] = await response.json()
}
 catch(e){

 }

}
