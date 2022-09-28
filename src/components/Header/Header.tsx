import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles["header"]}>
      <Link to={"/"} className={styles["header-link"]}>
        <img
          className={styles["github-icon"]}
          src="/src/assets/github-icon.svg"
          alt="Icon"
        />
        <h1>Finding GitHub Issues</h1>
      </Link>
    </header>
  );
}
