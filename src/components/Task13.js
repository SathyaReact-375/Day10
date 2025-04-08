import React, { useState } from 'react';

function Task13() {
  const [users, setUsers] = useState([]);

  const Buttonclick = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Task13</h1>
      <button onClick={Buttonclick}>Click and Fetch</button>
      <ul style={{ listStyleType: "none" }}>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default Task13;