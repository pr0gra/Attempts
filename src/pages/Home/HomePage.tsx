import { TextField } from "@mui/material";
import { useState } from "react";
import { UsersArray } from "../../components/UsersArray/UsersArray";

export function HomePage() {
  const [inputValue, setInputValue] = useState("");

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

      <UsersArray userName={inputValue} />
    </>
  );
}
