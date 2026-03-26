import React, { useEffect, useState } from "react";

function LocalUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users.json")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Local Users</h2>
      {users.map(u => (
        <p key={u.id}>{u.name} | {u.email} | {u.phone}</p>
      ))}
    </div>
  );
}

export default LocalUserList;