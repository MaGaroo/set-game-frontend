import React, { Component } from 'react';
import './App.css';

import { Lobby } from './lobby/Lobby.js';

const LOBBY = 0;
const ROOM = 1;

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      location: LOBBY,
    }
  }

  createRoom(room) {
    //crateRoomAPI(room);
  }

  render() {
    if (this.state.location === LOBBY) {
      return (
        <Lobby />
      );
    }
    else {
      return (
        <div> </div>
      );
    }
  }
}

export default App;
