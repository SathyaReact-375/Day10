import React from 'react'
import { useEffect,useState } from 'react';
function Task10() {
    const [counter,setCounter]=useState(0);
        useEffect(()=>{
        document.title=`${counter}`
        if(counter%2===0)
        {
            console.log(counter);   
        }
        },[counter])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task10</h1>
        <p>{counter}</p>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>setCounter(counter-1)}>-</button>
    </div>
  )
}

export default Task10