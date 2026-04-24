import React from 'react'


const EnterText = (obj) => {  
  console.log(obj.target.value);
}
const App = () => {

  
  return (
    <div>
      <input style={{ margin:"1rem" ,padding:"1rem"}}
      type="text"
      placeholder='Enter Text' 
      onChange={(obj)=>{
        EnterText(obj)
      }}/>
    </div>
  )
}

export default App
