import React from 'react'
import { useEffect,useState } from 'react';
function Task9() {
    const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log(`Input Value: ${inputValue}`);
  }, [inputValue]);
  return (
    <div style={{ textAlign: 'center' }}>
    <h1>Task9</h1>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type something..."
    />
  </div>

  )
}

export default Task9