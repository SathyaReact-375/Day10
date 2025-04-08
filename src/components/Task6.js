import React from 'react'
import { useEffect } from 'react';
function Task6() {
   useEffect(()=>{
        console.log("component removed");
        
       return ()=>{
        console.log("Component Unmounted");
       } 

   },[])
   
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task6</h1>
        <p>checking</p>
    </div>
  )
}

export default Task6