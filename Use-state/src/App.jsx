import React from 'react'
import { useState } from 'react';

const App = () => {
  const [Num, setNum] = useState(10);

  const ChangeNum = () => {
    setNum(Num + 10);
  }

  return (
    <>
    <p>The Value of {Num} Can be Changed On click by 10</p>
    <button onClick={ChangeNum}>Click Me</button>
    </>
  );
}

export default App