import { TextField, Pagination } from "@mui/material";
import { useState } from "react";
import { UsersArray } from "../../components/UsersArray/UsersArray";

export function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(0);

  return (
    <>
      <form
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
          count={pagesAmount}
          page={currentPage}
          onChange={(_, num) => {
            setCurrentPage(num);
          }}
        />
      )}

      {inputValue && (
        <UsersArray
          userName={inputValue}
          setCurrentPage={setCurrentPage}
          setPagesAmount={setPagesAmount}
          currentPage={currentPage}
        />
      )}
    </>
  );
}
