import { useUsersQuery } from "../generated/graphql";

export default function Home() {
  const { data } = useUsersQuery();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {" "}
      <div>
        <ul>
          {data.users.map((user) => {
            return (
              <li key={user.id}>
                {user.email}, {user.id}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
