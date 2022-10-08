import { TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IssuesArray } from "../../components/IssuesArray/IssuesArray";
import styles from "./IssuesPage.module.css";

export function IssuesPage() {
  const [inputValue, setInputValue] = useState();

  return (
    <div className={styles["issue-page-container"]}>
      <form
        className={styles["issue-input-form"]}
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue(e.target.textField.value);
        }}
        action=""
      >
        <TextField name="textField" label="Find Issues" />
      </form>
      <IssuesArray inputValue={inputValue} />
    </div>
  );
}
