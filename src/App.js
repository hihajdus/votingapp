import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <BestAnimal>

      </BestAnimal>
    );
  }
}

class BestAnimal extends Component {
  render() {
    return (
      <div className="App">
        <p>dog</p>
        <p>cat</p>
        <p>bird</p>
      </div>
    );
  }
}

export default App;
