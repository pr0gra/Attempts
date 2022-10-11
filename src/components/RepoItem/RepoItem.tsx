import { Link, useParams } from "react-router-dom";
import { IRepo } from "../../interfaces/IRepo";
import styles from "./RepoItem.module.css";

interface RepoItemProps {
  repo: IRepo;
}

export function RepoItem({ repo }: RepoItemProps) {
  const { userName } = useParams();
  return (
    <li className={styles["repo-item"]}>
      <Link
        className={styles["repo-link"]}
        to={`/users/${userName}/repos/${repo.name}/issues`}
      >
        <h4 className={styles["repo-name"]}>{repo.name}</h4>

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
