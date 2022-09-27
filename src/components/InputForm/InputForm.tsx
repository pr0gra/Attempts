import { TextField } from "@mui/material";
import { useState } from "react";
import { MainFrame } from "../MainFrame/MainFrame";

export function InputForm() {
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
        <TextField name="textField" label="let's find" />
      </form>

      <MainFrame userName={inputValue} />
    </>
  );
}
