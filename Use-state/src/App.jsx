import React, { use } from 'react'
import { useState } from 'react';

const App = () => {
  const [info , setInfo] = useState({
    name:"Hrujul Todankar",
    age: 22,
    city: "Mumbai"
  });

  console.log(info);

  

  return (
    <>
    <h4>{info.name}</h4>
    <h4>{info.age}</h4>
    <h4>{info.city}</h4>

    <input type="text" value={info.name} onChange={}/>

    <button>
      Update Info
    </button>
    </>
  );
}

export default App