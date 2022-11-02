import { TextField } from "@mui/material";
import { useState } from "react";
import { MainUserInfo } from "../../components/MainUserInfo/MainUserInfo";
import styles from "./UserPage.module.css";

export function UserPage() {
  const [inputValue, setInputValue] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");

  return (
    <>
      <form
        className={styles["user-page-form"]}
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
          name="textField"
          label="Find Repositories"
        />
      </form>

      <MainUserInfo inputValue={inputValue} />
    </>
  );
}
