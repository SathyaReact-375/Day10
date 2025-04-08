import React from 'react'
import { useEffect,useState } from 'react'


function Task8() {
    const [counter,setCounter]=useState(0);
    useEffect(()=>{
    document.title=`${counter}`
    
    },[counter])

  return (
    <div style={{textAlign:'center'}}>
        <h1>Task8</h1>
        <p>{counter}</p>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>setCounter(counter-1)}>-</button>
    </div>
  )
}

export default Task8