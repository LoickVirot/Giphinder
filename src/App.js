import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import AllGifs from './containers/AllGifs';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <AllGifs />
      </div>
    );
  }
}

export default App;
