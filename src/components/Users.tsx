import { useEffect, useState } from "react";
import { withAuthentication } from "../utils/withAuthentication";
import Login from "./Login";

function Users() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  });
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

const UsersWithAuthentication = withAuthentication(Users, Login);
export default UsersWithAuthentication;
