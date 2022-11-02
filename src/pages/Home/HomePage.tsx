import { TextField, Pagination } from "@mui/material";
import { useState } from "react";
import { UsersArray } from "../../components/UsersArray/UsersArray";
import styles from "./HomePage.module.css";

export function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");

  return (
    <div className={styles["input-form-home-container"]}>
      <form
        className={styles["input-form-home"]}
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue(textFieldValue);
        }}
        action=""
      >
        <TextField
          onChange={(e) => {
            setTextFieldValue(e.target.value);
          }}
          id="textField"
          name="textField"
          label="Find User"
        />
      </form>

      {inputValue && <UsersArray userName={inputValue} />}
    </div>
  );
}
