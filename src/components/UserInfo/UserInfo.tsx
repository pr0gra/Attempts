import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { Spinner } from "../Spinner/Spinner";
import styles from "./UserInfo.module.css";

export function UserInfo({ userName }) {
  const {
    data: userInfo,
    isError,
    isLoading,
  } = usersApi.useGetUserInfoQuery(userName);

  if (isError) {
    return <ErrorFrame />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <a className={styles["user-link"]} href="https://github.com/pr0gra">
        <img
          className={styles["user-avatar"]}
          src={userInfo.avatar_url}
          alt=""
        />
      </a>
      {userInfo.login}
      {userInfo.name ? <p>name : {userInfo.name}</p> : <></>}
    </>
  );
}
