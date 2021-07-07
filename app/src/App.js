import React, { useState, useEffect } from 'react'
import './App.css'
import  usePersist  from './Persist'

function AlertMessage(props) {

  return <div className="alert alert-primary h5 text-primary">
    <h5 className="mb-4">{JSON.stringify(mydata)}</h5>
    <div className="form-group">
      <label className="h6">Name</label>
      <input type="text"
        className="form-control" />
    </div>
    <div className="form-group">
      <label className="h6">Mail</label>
      <input type="mail"
        className="form-control" />
    </div>
    <div className="form-group">
      <label className="h6">Age</label>
      <input type="number"
        className="form-control" />
    </div>
    <button
      className="btn btn-primary">
      Save it!
    </button>
  </div>
}

// ベース・コンポーネント
function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage />
      </div>
    </div>
  )
}

export default App
