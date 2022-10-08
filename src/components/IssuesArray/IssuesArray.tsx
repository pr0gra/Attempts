import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { IssueItem } from "../IssueItem/IssueItem";
import { Spinner } from "../Spinner/Spinner";
import styles from "./IssuesArray.module.css";

export function IssuesArray({ inputValue }) {
  const { userName, repo } = useParams();
  const {
    data: issues,
    isError,
    isLoading,
  } = usersApi.useGetUserIussuesQuery({ userName, repo });

  if (isError) {
    return <ErrorFrame />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles["issue-container"]}>
      <h4 className={styles["repo-name"]}>
        <Link className={styles["user-link"]} to={`/users/${userName}`}>
          {userName}
        </Link>
        {repo}
      </h4>
      <div className={styles["issues-titles-list"]}>
        {issues.length == 0 ? (
          <p className={styles["empty-result"]}>
            That repo haven't any issue :(
          </p>
        ) : (
          <></>
        )}

        {inputValue
          ? issues
              .filter((issue) => {
                return issue.title
                  .toLowerCase()
                  .includes(inputValue.toLowerCase());
              })
              .map((issue) => {
                return <IssueItem key={issue.id} issue={issue} />;
              })
          : issues.map((issue) => {
              return <IssueItem key={issue.id} issue={issue} />;
            })}
      </div>
    </div>
  );
}
