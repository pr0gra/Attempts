import { TextField, Pagination } from "@mui/material";
import { useState } from "react";
import { UsersArray } from "../../components/UsersArray/UsersArray";
import styles from "./HomePage.module.css";

export function HomePage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles["input-form-home-container"]}>
      <form
        className={styles["input-form-home"]}
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue(e.target.textField.value);
        }}
        action=""
      >
        <TextField name="textField" label="Find User" />
      </form>

      {inputValue && (
        <UsersArray className={styles["users-array"]} userName={inputValue} />
      )}
    </div>
  );
}
