import React, { useState } from 'react';

const Form = props => {
   
   const [list, setList] = useState({
       name: ''

   })

   const handleChanges = event => {
       setList({name: event.target.value})
       console.log(list);
   }

const submitForm = event => {
    event.preventDefault();
    props.addNewMember(list);
}

    return(

   <form onSubmit={submitForm}>
        <label>Label on Form Page:</label>
        <input id="name" type="text" onChange={handleChanges}/>
        <label>Add your bio here:</label>
        <textarea id="bio"/>
    </form>
    ) 
};

export default Form;