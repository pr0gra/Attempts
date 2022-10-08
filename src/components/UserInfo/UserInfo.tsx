import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { Spinner } from "../Spinner/Spinner";
import styles from "./UserInfo.module.css";
import { useEffect } from "react";

interface UserInfoProps {
  userName: string;
}

export function UserInfo({ userInfo }: UserInfoProps) {
  return (
    <div className={styles["user-info"]}>
      <img className={styles["user-avatar"]} src={userInfo.avatar_url} alt="" />
      <div className={styles["text-part"]}>
        <a className={styles["user-link"]} href="https://github.com/pr0gra">
          <h4>{userInfo.login}</h4>
        </a>
        {userInfo.name ? <p>name : {userInfo.name}</p> : <></>}
        repos amount : {userInfo.public_repos}
      </div>
    </div>
  );
}
