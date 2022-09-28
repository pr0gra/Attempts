import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";
import styles from "./UserItem.module.css";

export function UserItem({ user }: IUser) {
  return (
    <div>
      <Link to={`/users/${user.login}`}>
        <img className={styles["user-avatar"]} src={user.avatar_url} alt="" />
        <li>{user.login}</li>
      </Link>
    </div>
  );
}
