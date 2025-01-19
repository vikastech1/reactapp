import './App.css'
import { useState } from 'react'
function App() {
  //let counter =15
  let [counter, setCounter] = useState(15)
  let [message, setMessage] = useState('')

  const addValue = () => {
    if (counter >= 20) {
      setMessage('Not Allowed: Number Greater Than 20')
    } else {
      setCounter(counter + 1)
      setMessage('')  // Clear message when within range
    }
  }

  const removeValue = () => {
    if (counter <= 0) {
      setMessage('Not Allowed: Number Less Than 0')
    } else {
      setCounter(counter - 1)
      setMessage('')  // Clear message when within range
    }
  }
  return (
    <>
      <div>
        <h1>Counter Code</h1>
      </div>
      <div className="card">
        <button>
          count is {counter}
        </button>
        <br />
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
        <p>
        {message && <p style={{ color: 'red' }}>{message}</p>}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
