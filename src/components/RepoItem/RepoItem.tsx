import { Link, useParams } from "react-router-dom";
import styles from "./RepoItem.module.css";

export function RepoItem({ repo }) {
  const { username } = useParams();
  return (
    <li className={styles["repo-item"]}>
      <Link
        className={styles["repo-link"]}
        to={`/users/${username}/repos/${repo.name}/issues`}
      >
        <div className={styles["repo-name-container"]}>
          <h4 className={styles["repo-name"]}>{repo.name}</h4>
        </div>
        <div className={styles["repo-info"]}>
          <div className={styles["issue-amount-container"]}>
            <p className={styles["issue-amount-text"]}>Issues amount:</p>{" "}
            {repo.open_issues}
          </div>
          <div className={styles["updated-at-container"]}>
            <p className={styles["updated-at-text"]}>Updated at</p>
            {repo.updated_at
              .slice(2, repo.updated_at.indexOf("T"))
              .split("-")
              .reverse()
              .join(".")}
          </div>
        </div>
      </Link>
    </li>
  );
}
