import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Air Print</h1>
      <form>
        <input type="text"/>
        <button>Print</button>
      </form>
      </div>
    );
  }
}

export default App;
