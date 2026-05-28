import React from 'react'

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
                <input type="text" placeholder='Enter your Name' />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default App;