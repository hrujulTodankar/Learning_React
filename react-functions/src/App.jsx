import React from 'react'

const App = () => {

  const btnclick = () =>{
    console.log("button was clicked")
  }
  return (
    <div>
      <button onClick={btnclick}>
        click me
      </button>
    </div>
  )
}

export default App
