import { useEffect } from "react";
import { IRepo } from "../../interfaces/IRepo";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { RepoItem } from "../RepoItem/RepoItem";
import { Spinner } from "../Spinner/Spinner";

export function ReposArray({
  userName,
  inputValue,
  setPagesAmount,
  currentPage,
}) {
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

  return (
    <>
      {inputValue
        ? repos &&
          repos
            .filter((repo) => {
              if (repo.name.toLowerCase().includes(inputValue.toLowerCase())) {
                return true;
              } else {
                return false;
              }
            })
            .map((repo: IRepo) => {
              return <RepoItem key={repo.id} repo={repo} />;
            })
        : repos &&
          repos.map((repo: IRepo) => {
            return <RepoItem key={repo.id} repo={repo} />;
          })}
    </>
  );
}
