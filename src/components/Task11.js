import React, { useEffect,useState } from 'react'

function Task11() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task11</h1>
        <ul style={{listStyleType:"none"}}>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Task11