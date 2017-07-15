import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import AllGifs from './containers/AllGifs';
import ModalGif from './containers/ModalGif';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <ModalGif />
          <div className="container">
            <AllGifs />
          </div>
      </div>
    );
  }
}

export default App;
