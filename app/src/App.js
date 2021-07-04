import React, { Component } from 'react'

// import Rect from './Rect'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      msg: 'count start!',
    }

    this.doAction = this.doAction.bind(this)
  }

  doAction(event) {
    this.setState({
      counter: this.state.counter + 1,
      msg: "*** count: " + this.state.counter + " ***"
    })
  }

  render() {
    return  <div>
    <h1 className="bg-primary text-white display-4">React</h1>  
    <div className="container">
      <p className="subtitle">カウント数</p>
      <p className="alert alert-warning">{this.state.msg}</p>
      <button
        className="btn btn-primary"
        onClick={this.doAction}
      >
        クリック
      </button>
    </div>
  </div>
  }
}

export default App
