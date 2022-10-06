import { TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MainUserInfo } from "../../components/MainUserInfo/MainUserInfo";
import styles from "./UserPage.module.css";

export function UserPage() {
  const { username } = useParams();
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <form
        className={styles["user-page-form"]}
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue(e.target.textField.value);
        }}
        action=""
      >
        <TextField name="textField" label="Find Repositories" />
      </form>

      <MainUserInfo userName={username} inputValue={inputValue} />
    </>
  );
}
