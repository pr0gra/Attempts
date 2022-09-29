import styles from "./IssueItem.module.css";

export function IssueItem({ issue, setSelectedIssueInfo, selectedIssueInfo }) {
  return (
    <button
      className={styles["issue-item-button"]}
      style={{
        color: selectedIssueInfo.title === issue.title ? "red" : "black",
      }}
      onClick={(e) => {
        setSelectedIssueInfo(issue);
      }}
    >
      {issue.title}
    </button>
  );
}
