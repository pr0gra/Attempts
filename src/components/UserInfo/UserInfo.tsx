import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { Spinner } from "../Spinner/Spinner";
import styles from "./UserInfo.module.css";
import { useEffect } from "react";

export function UserInfo({ userName, setPagesAmount }) {
  const {
    data: userInfo,
    isError,
    isLoading,
  } = usersApi.useGetUserInfoQuery(userName);

  useEffect(() => {
    if (!userInfo) {
      return;
    }

    setPagesAmount(Math.round(userInfo.public_repos / 10));
  }, [userInfo]);

  if (isError) {
    return <ErrorFrame />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles["user-info"]}>
      <img className={styles["user-avatar"]} src={userInfo.avatar_url} alt="" />
      <div className={styles["text-part"]}>
        <a className={styles["user-link"]} href="https://github.com/pr0gra">
          {userInfo.login}
        </a>
        {userInfo.name ? <p>name : {userInfo.name}</p> : <></>}
      </div>
    </div>
  );
}
