import { useState } from "react";
import { Link } from "react-router-dom";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { IssueItem } from "../IssueItem/IssueItem";
import { Spinner } from "../Spinner/Spinner";
import styles from "./IssuesArray.module.css";

export function IssuesArray({ inputValue, userName, repo }) {
  const [selectedIssueInfo, setSelectedIssueInfo] = useState({});

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

  return (
    <div className={styles["issue-container"]}>
      <h4 className={styles["repo-name"]}>
        <Link className={styles["user-link"]} to={`/users/${userName}`}>{userName}</Link>>
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
                if (
                  issue.title.toLowerCase().includes(inputValue.toLowerCase())
                ) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((issue) => {
                return (
                  <IssueItem
                    key={issue.id}
                    issue={issue}
                    setSelectedIssueInfo={setSelectedIssueInfo}
                    selectedIssueInfo={selectedIssueInfo}
                  />
                );
              })
          : issues.map((issue) => {
              return (
                <IssueItem
                  key={issue.id}
                  issue={issue}
                  setSelectedIssueInfo={setSelectedIssueInfo}
                  selectedIssueInfo={selectedIssueInfo}
                />
              );
            })}
      </div>
      <div className={styles["selected-issue"]}>
        {!Object.keys(selectedIssueInfo).length ? (
          <p>Select some issue!</p>
        ) : (
          <></>
        )}
        <a href={selectedIssueInfo.url} className={styles["title-link"]}>
          {selectedIssueInfo.title}
        </a>
        <p>{selectedIssueInfo.body}</p>
      </div>
    </div>
  );
}
