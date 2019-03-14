import React, { Component } from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  color: blue;
`

class App extends Component {
  render() {
    return (
      <div className="App">
      <Headline>Air Print</Headline>
      <form>
        <input type="text"/>
        <button>Print</button>
      </form>
      </div>
    );
  }
}

export default App;
