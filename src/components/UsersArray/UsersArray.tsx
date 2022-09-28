import { IUser } from "../../interfaces/IUser";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { Spinner } from "../Spinner/Spinner";
import { UserItem } from "../UserItem/UserItem";

export function UsersArray({ userName }) {
  if (!userName) {
    return;
  }
  const {
    data: users,
    isError,
    isLoading,
  } = usersApi.useSearchUsersByNameQuery(userName);

  if (isError) {
    return <ErrorFrame />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {users &&
        users.items.map((user: IUser) => {
          return (
            <ul key={user.id}>
              <UserItem user={user} />
            </ul>
          );
        })}
    </div>
  );
}
