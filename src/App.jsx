import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
        <h2>Counter Test</h2>
        <h4>Counter Value: {counter}</h4>
        <button onClick={addValue}>Add Value</button>
        <br /><br />
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
