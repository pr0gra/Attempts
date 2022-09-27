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
  } = usersApi.useGetUsersByNameQuery(userName);

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
            <div>
              <UserItem user={user} />
            </div>
          );
        })}
    </div>
  );
}
