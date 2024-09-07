import { useState } from "react";
import Users from "./components/Users";
export default function App() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      {status && <Users />}
      <button onClick={() => setStatus(!status)}>Load</button>
    </div>
  );
}
