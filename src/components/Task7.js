import React from 'react'
import { useEffect } from 'react';
function Task7() {
    useEffect(() => {
        console.log("Fetching Data...");
      }, []); 
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task7</h1>
        <p> component mounted</p>
    </div>
  )
}

export default Task7