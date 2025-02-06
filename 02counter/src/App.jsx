// Hooks -> useState is a hook
// updates the value everywhere

import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5;
  const addValue = () => {
    // counter++;
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <> 
      <h1>Chai React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>
      <br/>
      <button
        onClick={removeValue}
      >Remove Value</button>

      <p>counter value: {counter}</p>
    </>
  )
}

export default App
