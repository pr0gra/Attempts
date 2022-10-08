import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./IssueItem.module.css";

export function IssueItem({ issue }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <button
        className={styles["issue-item-button"]}
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        <p
          style={{
            color: isOpen
              ? "var(--main-blue-color)"
              : "var(--title-gray-color)",
          }}
        >
          {issue.title}
        </p>
      </button>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <a href={issue.url} className={styles["title-link"]}>
          <ReactMarkdown children={issue.title} remarkPlugins={[remarkGfm]} />
        </a>

        <ReactMarkdown children={issue.body} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
}
