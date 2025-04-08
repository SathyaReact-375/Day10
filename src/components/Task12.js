import React, { useEffect,useState } from 'react'

function Task12() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);        
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task12</h1>
        <h1>List will appear after 5 seconds</h1>
        <ul style={{listStyleType:"none"}}>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Task12