import { useState } from "react";
import { usersApi } from "../../services/UserService";
import { ErrorFrame } from "../ErrorFrame/ErrorFrame";
import { IssueItem } from "../IssueItem/IssueItem";
import { Spinner } from "../Spinner/Spinner";
import styles from "./IssuesArray.module.css";

export function IssuesArray({ inputValue, userName, repo }) {
  const [selectedIssueInfo, setSelectedIssueInfo] = useState({});
  console.log(selectedIssueInfo);

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
    <>
      <div className={styles["issue-container"]}>
        <div className={styles["issues-titles-list"]}>
          {inputValue
            ? issues &&
              issues
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
            : issues &&
              issues.map((issue) => {
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
        <div className={styles["selected-issue"]}>{selectedIssueInfo.body}</div>
      </div>
    </>
  );
}
