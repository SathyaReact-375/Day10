import React, { useEffect } from 'react'

function Task3() {
    useEffect(() => {
        console.log("Component has mounted!");
      }, []); 
    
      return (
        <div style={{textAlign:"center"}}>
            <h1>Task3</h1>
          <p>This is a component that logs a message on mount.</p>
        </div>
      );
    }


export default Task3