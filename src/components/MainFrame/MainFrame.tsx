import { UsersArray } from "../UsersArray/UsersArray";

export function MainFrame({ userName }) {
  return (
    <>
      <UsersArray userName={userName} />
    </>
  );
}
