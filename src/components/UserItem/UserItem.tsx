export function UserItem({ user }) {
  const {
    data: users,
    isError,
    isLoading,
  } = usersApi.useGetUsersByNameQuery(userName);
  return (
    <div>
      <button onClick={(e) => {}}>{user.login}</button>
    </div>
  );
}
