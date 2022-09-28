import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { Spinner } from "../Spinner/Spinner";

export function IssuesArray({ userName, repo }) {
  const {
    data: issues,
    isError,
    isLoading,
  } = usersApi.useGetUserIussuesQuery({ userName: userName, repo: repo });

  if (isError) {
    return <ErrorFrame />;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return <></>;
}
