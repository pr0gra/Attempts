import { Pagination, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ReposArray } from "../../components/ReposArray/ReposArray";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import styles from "./UserPage.module.css";

export function UserPage() {
  const { username } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(0);

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
      {!!pagesAmount && (
        <Pagination
          className={styles["user-pagination"]}
          count={pagesAmount}
          page={currentPage}
          onChange={(_, num) => {
            setCurrentPage(num);
          }}
        />
      )}
      <UserInfo userName={username} setPagesAmount={setPagesAmount} />
      <ReposArray
        userName={username}
        inputValue={inputValue}
        currentPage={currentPage}
      />
    </>
  );
}
