import React, { useState}  from 'react';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <hi>Hailey's Team Members</hi>
      <form>
        <label>
          Username: 
          <input type="text"/>
        </label>
      </form>
    </div>

    
  );
}

export default App;
