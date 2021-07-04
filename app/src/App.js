import React, { Component } from 'react'

import Rect from './Rect'

import './App.css'

class App extends Component {
  constructor(props) {
    super()
    this.title = props.title
    this.message = props.message
  }

  render() {
    return  <div>
    <h1 className="bg-primary text-white display-4">React</h1>  
    <div className="container">
      <p className="subtitle">{this.title}</p>
      <Rect x="200" y="200" w="200" h="200" c="red" r="50" />
      <Rect x="300" y="300" w="200" h="200" c="blue" r="75" />
      <Rect x="400" y="400" w="200" h="200" c="green" r="100" />
    </div>
  </div>
  }
}

export default App
