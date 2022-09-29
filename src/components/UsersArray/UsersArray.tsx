import { IUser } from "../../interfaces/IUser";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { Spinner } from "../Spinner/Spinner";
import { UserItem } from "../UserItem/UserItem";
import { useEffect } from "react";

interface UsersArrayProps {
  userName: string;
  setPagesAmount: any;
  currentPage: number;
}

export function UsersArray({
  userName,
  setPagesAmount,
  currentPage,
}: UsersArrayProps) {
  const {
    data: users,
    isError,
    isLoading,
  } = usersApi.useSearchUsersByNameQuery({
    userName: userName,
    currentPage: currentPage,
  });
  console.log(users);

  useEffect(() => {
    if (!users) {
      return;
    }

    users.total_count >= 1000
      ? setPagesAmount(50)
      : setPagesAmount(Math.round(users.total_count / 20));
  }, [users]);

  if (isError) {
    return <ErrorFrame />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {users.items.map((user: IUser) => {
        return (
          <ul key={user.id}>
            <UserItem user={user} />
          </ul>
        );
      })}
    </div>
  );
}
