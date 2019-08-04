import React, { Component } from 'react'
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
