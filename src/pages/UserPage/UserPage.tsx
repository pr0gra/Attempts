import { TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ReposArray } from "../../components/ReposArray/ReposArray";
import { UserInfo } from "../../components/UserInfo/UserInfo";

export function UserPage() {
  const { username } = useParams();
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
        <TextField name="textField" label="Find Repositories" />
      </form>
      <UserInfo userName={username} />
      <ReposArray userName={username} inputValue={inputValue} />
    </>
  );
}
