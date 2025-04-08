import React, { useEffect, useState } from 'react'

function Task4() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
       console.log("when i click add button count value will change and useEffect will work");
    },[count])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task4</h1>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>add</button>
    </div>
  )
}

export default Task4