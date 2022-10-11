import { Pagination } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { ReposArray } from "../ReposArray/ReposArray";
import { Spinner } from "../Spinner/Spinner";
import { UserInfo } from "../UserInfo/UserInfo";
import styles from "./MainUserInfo.module.css";

interface MainUserInfoProps {
  inputValue: string;
}

export function MainUserInfo({ inputValue }: MainUserInfoProps) {
  const { userName } = useParams<{ userName?: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: userInfo,
    isError,
    isLoading,
  } = usersApi.useGetUserInfoQuery(userName);

  if (isError) {
    return <ErrorFrame />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <UserInfo userInfo={userInfo} />
      <ReposArray currentPage={currentPage} inputValue={inputValue} />

      {!inputValue && userInfo.public_repos > 0 && (
        <Pagination
          color="primary"
          variant="outlined"
          className={styles["repos-pagination"]}
          count={Math.ceil(userInfo.public_repos / 10)}
          page={currentPage}
          onChange={(_, num) => {
            setCurrentPage(num);
          }}
        />
      )}
    </>
  );
}
