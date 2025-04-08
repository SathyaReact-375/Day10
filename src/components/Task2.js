import React from 'react'
import { useEffect } from 'react';
function Task2() {
    useEffect(() => {
        console.log("Component Mounted");
        // return () => {
        // console.log("Component UNmounted")
        // };
      }, []);
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task2</h1>
    <p>This is my component.</p>
  </div>
  )
}

export default Task2