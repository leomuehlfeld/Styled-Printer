import React, { Component } from 'react';

//import Typo
import Headline from './components/typo/headline';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Headline>Printer</Headline>
      <form>
        <input type="text"/>
        <button>Print</button>
      </form>
      </div>
    );
  }
}

export default App;
