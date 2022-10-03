import { IUser } from "../../interfaces/IUser";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { Spinner } from "../Spinner/Spinner";
import { UserItem } from "../UserItem/UserItem";
import { useEffect } from "react";
import styles from "./UsersArray.module.css";

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
    <ul className={styles["users-list"]}>
      {users.items.map((user: IUser) => {
        return (
          <li className={styles["user-item"]} key={user.id}>
            <UserItem user={user} />
          </li>
        );
      })}
    </ul>
  );
}
