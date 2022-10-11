import { useParams } from "react-router-dom";
import { IRepo } from "../../interfaces/IRepo";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { RepoItem } from "../RepoItem/RepoItem";
import { Spinner } from "../Spinner/Spinner";
import styles from "./ReposArray.module.css";

interface ReposArrayProps {
  currentPage: number;
  inputValue: string;
}

export function ReposArray({ currentPage, inputValue }: ReposArrayProps) {
  const { userName } = useParams();

  const {
    data: repos,
    isError,
    isLoading,
  } = usersApi.useGetReposByNameQuery({ userName, currentPage });

  if (isError) {
    return <ErrorFrame />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  function definitionReposSlice() {
    if (currentPage % 3 == 1) {
      return repos.slice(0, 10);
    } else if (currentPage % 3 == 2) {
      return repos.slice(10, 20);
    } else {
      return repos.slice(20, 30);
    }
  }
  const reposPerPage = definitionReposSlice();

  return (
    <ul className={styles["repos-array"]}>
      {!inputValue
        ? reposPerPage.map((repo: IRepo) => {
            return <RepoItem key={repo.id} repo={repo} />;
          })
        : repos
            .filter((repo: IRepo) => {
              return repo.name.toLowerCase().includes(inputValue.toLowerCase());
            })
            .map((repo: IRepo) => {
              return <RepoItem key={repo.id} repo={repo} />;
            })}
    </ul>
  );
}
