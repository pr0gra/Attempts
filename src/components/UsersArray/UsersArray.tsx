import { IUser } from "../../interfaces/IUser";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { Spinner } from "../Spinner/Spinner";
import { UserItem } from "../UserItem/UserItem";
import { useEffect, useState } from "react";
import styles from "./UsersArray.module.css";
import { Pagination } from "@mui/material";

interface UsersArrayProps {
  userName: string;
}

export function UsersArray({ userName }: UsersArrayProps) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [userName]);

  const {
    data: users,
    isError,
    isLoading,
  } = usersApi.useSearchUsersByNameQuery({
    userName: userName,
    currentPage: currentPage,
  });

  if (isError) {
    return <ErrorFrame />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ul className={styles["users-list"]}>
        {users.items.map((user: IUser) => {
          return (
            <li className={styles["user-item"]} key={user.id}>
              <UserItem user={user} />
            </li>
          );
        })}
      </ul>

      {users.items.length ? (
        <Pagination
          className={styles["home-pagination"]}
          count={
            users.total_count > 1000 ? 100 : Math.ceil(users.total_count / 10)
          }
          page={currentPage}
          color="primary"
          variant="outlined"
          onChange={(_, num) => {
            setCurrentPage(num);
          }}
        />
      ) : (
        <p className={styles["no-users"]}>
          There are no any user with this name :(
        </p>
      )}
    </>
  );
}
