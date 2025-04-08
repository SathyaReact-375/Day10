import React, { useState, useEffect } from 'react';
function Miniproject3() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        console.log('Component Mounted');
    
        const intervalId = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
    
        return () => {
          console.log('Component Unmounting');
          clearInterval(intervalId);
        };
      }, []);
  return (
    <div style={{textAlign:"center"}}>
        <h1>Miniproject3</h1>    
      <p>Seconds:{seconds}</p>
    </div>
  )
}

export default Miniproject3