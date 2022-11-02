import { TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IssuesArray } from "../../components/IssuesArray/IssuesArray";
import styles from "./IssuesPage.module.css";

export function IssuesPage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles["issue-page-container"]}>
      <div className={styles["issue-input"]}>
        <TextField
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          name="textField"
          label="Find Issues"
        />
      </div>
      <IssuesArray inputValue={inputValue} />
    </div>
  );
}
