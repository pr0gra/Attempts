import styles from "./IssueItem.module.css";

export function IssueItem({ issue, setSelectedIssueInfo, selectedIssueInfo }) {
  return (
    <button
      className={styles["issue-item-button"]}
      onClick={(e) => {
        setSelectedIssueInfo(issue);
      }}
    >
      <p
        style={{
          color:
            selectedIssueInfo.title === issue.title
              ? "var(--main-blue-color)"
              : "var(--title-gray-color)",
        }}
      >
        {issue.title}
      </p>
    </button>
  );
}
