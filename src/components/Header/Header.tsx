import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import gitIcon from "../../assets/github-icon.svg";

export function Header() {
  return (
    <header className={styles["header"]}>
      <Link to={"/"} className={styles["header-link"]}>
        <img className={styles["github-icon"]} src={gitIcon} alt="Icon" />
        <h2 className={styles["header-title"]}>Finding GitHub Issues</h2>
      </Link>
    </header>
  );
}
