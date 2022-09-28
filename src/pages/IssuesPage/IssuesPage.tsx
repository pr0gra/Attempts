import { TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { IssuesArray } from "../../components/IssuesArray/IssuesArray";

export function IssuesPage() {
  const { username, repo } = useParams();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInputValue(e.target.textField.value);
        }}
        action=""
      >
        <TextField name="textField" label="Find Issues" />
      </form>
      <IssuesArray userName={username} repo={repo} />
    </>
  );
}
