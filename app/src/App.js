import React, { Component } from 'react'

// import Rect from './Rect'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      msg: 'count start!',
      flg: 0,
    }

    this.doAction = this.doAction.bind(this)
  }

  doAction(event) {
    this.setState({
      counter: this.state.counter + 1,
      msg: this.state.counter,
      flg: this.state.counter % 2 === 0,
    })
  }

  render() {
    return  <div>
    <h1 className="bg-primary text-white display-4">React</h1>  
    <div className="container">
      <p className="subtitle">カウント数</p>
      {this.state.flg ?
        <div>
          <p className="alert alert-warning">偶数: {this.state.msg}</p>
        </div>
      :
        <div>
          <p className="alert alert-warning">奇数：{this.state.msg}</p>
        </div>
      }
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
