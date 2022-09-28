import { Link, useParams } from "react-router-dom";
import styles from "./RepoItem.module.css";

export function RepoItem({ repo }) {
  const { username } = useParams();
  return (
    <Link
      className={styles["repo-link"]}
      to={`/users/${username}/repos/${repo.name}/issues`}
    >
      <li>
        {repo.name}
        <p>
          Issues amount:{repo.has_issues && repo.open_issues} Updated at{" "}
          {repo.updated_at
            .slice(2, repo.updated_at.indexOf("T"))
            .split("-")
            .reverse()
            .join(".")}
        </p>
      </li>
    </Link>
  );
}
