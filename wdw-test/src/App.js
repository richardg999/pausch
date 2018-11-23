import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Panel from './Panel.js';
import Panels from './Panels.js';
import './styles.css';

class App extends Component {

  constructor() {
    super();

    this.newTheme.bind(this.newTheme);
  }

  newTheme() {}

  render() {
    return (
      <div className="App">
        <Panels />
      </div>
    );
  }
}

export default App;
