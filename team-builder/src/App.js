import React, { useState}  from 'react';
import './App.css';
import Form from './Form';
import Members from './Members';

function App() {
  
  const [memberlist, setMemberList] = useState({
    name: " "
  });
  
  const changeHandler = event => {
    setMemberList({ name: event.target.value })
    console.log(memberlist);
  };
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      email: member.email,
      role: member.role
    };
    setMemberList([...memberlist, newMember]);
  };
  
  return (
    <div className="App">
      <h1>Hailey's Team Members</h1>
      <Form addNewMember={addNewMember} />
      {/* <Members memberlist={memberlist} /> */}
      <form>
        <label>
          Username: 
        </label>
        <input type="text" onChange={changeHandler}/>
        <button type="submit">Submit!</button>
      </form>
    </div>

    
  );
}

export default App;
