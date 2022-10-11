import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./IssueItem.module.css";
import cx from "classnames";
import { IIssueItem } from "../../interfaces/IIssueItem";

interface IssueItemProps {
  issue: IIssueItem;
}

export function IssueItem({ issue }: IssueItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={cx(
          styles["issue-item-button"],
          isOpen && styles["issue-active-button"]
        )}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p
          className={cx(
            styles["issue-title"],
            isOpen && styles["issue-active-color"]
          )}
        >
          {issue.title}
        </p>
      </button>
      {isOpen && (
        <div className={cx(styles["issue-text-part"])}>
          <a href={issue.url} className={styles["title-link"]}>
            <ReactMarkdown children={issue.title} remarkPlugins={[remarkGfm]} />
          </a>

          <ReactMarkdown children={issue.body} remarkPlugins={[remarkGfm]} />
        </div>
      )}
    </>
  );
}
