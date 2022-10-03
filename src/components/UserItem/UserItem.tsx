import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";
import styles from "./UserItem.module.css";

export function UserItem({ user }: IUser) {
  return (
    <Link className={styles["user-link"]} to={`/users/${user.login}`}>
      <h4 className={styles["user-name"]}>{user.login}</h4>
      <img className={styles["user-avatar"]} src={user.avatar_url} alt="" />
    </Link>
  );
}
