import React from 'react'
import { useState } from 'react';

const [name, setName] = useState(" ");

const submitHandler = (e) => {   
    e.preventDefault();
    alert("Form submitted");
    console.log(e.target[0].value);
}

const App = () => {
    return (
        <div>
            <h1>Form Handling in React</h1>
            <form onSubmit={submitHandler} >
                <input 
                 type="text"
                 placeholder='Enter your Name'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                  />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default App;