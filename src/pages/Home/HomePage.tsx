import { TextField, Pagination } from "@mui/material";
import { useState } from "react";
import { UsersArray } from "../../components/UsersArray/UsersArray";
import styles from "./HomePage.module.css";

export function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(0);

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
      {!!pagesAmount && (
        <Pagination
          className={styles["home-pagination"]}
          count={pagesAmount}
          page={currentPage}
          onChange={(_, num) => {
            setCurrentPage(num);
          }}
        />
      )}

      {inputValue && (
        <UsersArray
          className={styles["users-array"]}
          userName={inputValue}
          setCurrentPage={setCurrentPage}
          setPagesAmount={setPagesAmount}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}
