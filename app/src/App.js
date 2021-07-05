import React, { useState, useEffect } from 'react'
import './App.css'

function AlertMessage(props) {
  return <div className="alert alert-primary h5 text-primary">
    <h5>{props.msg}</h5>
  </div>
}

function App() {
  const [val, setVal] = useState(0)
  const [msg, setMsg] = useState('set a number...')

  const doChange = (event) => {
    setVal(event.target.value)
  }

  useEffect(() => {
    let total = 0
    for (let i = 0;i <= val;i++) {
      total += i
    }
    setMsg("total: " + total + ".")
  })

  return (
    <div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>Input:</label>
          <input type="number" className="form-control" 
              onChange={doChange} />
        </div>
      </div>
    </div>
  )
}

export default App
