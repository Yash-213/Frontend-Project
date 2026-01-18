import React, { useState } from 'react'



const App = () => {

  const [num, setnum] = useState(0)

  const increasing = ()=>{
    setnum(num + 1)
  }
  const decreasing = ()=>{
    setnum(num - 1)
  }
  const jumpTo5 = () =>{
    setnum(num + 5)
  }

  return (
    <div>
        <h1>{num}</h1>
        <button onClick={increasing}>Increase</button>
        <button onClick={decreasing}>Decrease</button>
        <button onClick={jumpTo5}>Increases 5</button>
    </div>
  )
}

export default App