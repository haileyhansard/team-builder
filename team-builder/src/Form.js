import React, { useState } from 'react';

const Form = props => {
   
   const [list, setList] = useState({
       name: ''

   })

   const handleChanges = event => {
       setList({name: event.target.value})
       console.log(list);
   }
    return(

   <form>
        <label>Hello</label>
        <input id="name" type="text" onChange={handleChanges}/>
    </form>
    ) 
};

export default Form;