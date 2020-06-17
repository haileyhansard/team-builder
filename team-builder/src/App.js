import React, { useState}  from 'react';
import './App.css';
import Form from './Form';
import Members from './Members';

const initialMembers = []
const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  
  const [members, setMembers] = useState(initialMembers)
  const [error, setError] = useState('')
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    setFormValues({
      ...formValues,
      [name]:value,
    })
  }
  
  const onSubmit = evt => {
    evt.preventDefault()
    if (!formValues.name || !formValues.email || !formValues.role){
      setError("You need to fill out all information")
      return
    }
    setError('')
  }
  
  const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
  }

  setMembers(members => [newMember, ...members])
  setFormValues(initialFormValues)

  
  return (
    <div className="App">
      <h1>Hailey's Team Members</h1>
      <Form 
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {
        members.map(member => {
          return(
            <Members key={member.name} details={member} />
          )
        })
      }
    </div> 
  );
  }


