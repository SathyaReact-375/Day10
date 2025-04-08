import React from 'react'
import { useState,useEffect } from 'react';
function Miniproject4() {
    const [users, setUsers] = useState([]); 
    const [query, setQuery] = useState('');
   
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, []);
    

          const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
          );
        


  return (
    <div style={{textAlign:"center"}}>
        <h1>Miniproject4</h1>
        <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
   <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredUsers.map((user) => (
          <li key={user.id} style={{ padding: "5px", fontSize: "18px" }}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Miniproject4