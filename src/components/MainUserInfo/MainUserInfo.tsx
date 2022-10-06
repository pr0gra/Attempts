import { Pagination } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { IRepo } from "../../interfaces/IRepo";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { RepoItem } from "../RepoItem/RepoItem";
import { Spinner } from "../Spinner/Spinner";
import { UserInfo } from "../UserInfo/UserInfo";
import styles from "./MainUserInfo.module.css";

interface MainUserInfoProps {
  userName: string;
  inputValue: string;
}

export function MainUserInfo({ userName, inputValue }: MainUserInfoProps) {
  const [currentPage, setCurrentPage] = useState(1);

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
  const reposListPerPage =
    currentPage == 1
      ? repos.slice((currentPage - 1) * 10, currentPage * 10)
      : repos.slice((currentPage - 1) * 10, currentPage * 10 + 10);

  return (
    <>
      <UserInfo userName={userName} />
      <ul className={styles["repos-list"]}>
        {inputValue
          ? repos
              .filter((repo: IRepo) => {
                return repo.name.includes(inputValue);
              })
              .map((repo: IRepo) => {
                return <RepoItem key={repo.id} repo={repo} />;
              })
          : reposListPerPage.map((repo: IRepo) => {
              return <RepoItem key={repo.id} repo={repo} />;
            })}
      </ul>

      {!inputValue && reposListPerPage.length > 0 && (
        <Pagination
          color="primary"
          variant="outlined"
          className={styles["repos-pagination"]}
          count={Math.ceil(repos.length / 10)}
          page={currentPage}
          onChange={(_, num) => {
            setCurrentPage(num);
          }}
        />
      )}
    </>
  );
}
