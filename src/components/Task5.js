import React from 'react'
import { useState,useEffect } from 'react';
function Task5() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
  
    useEffect(() => {
      if (name) {
        console.log(`Name changed to: ${name}`);
      }
    }, [name]);
  
    useEffect(() => {
      if (age) {
        console.log(`Age changed to: ${age}`);
      }
    }, [age]);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Task5</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
      </div>
    );
}

export default Task5