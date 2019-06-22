import React, {Component} from 'react';

const alphanumeric = "[a-zA-Z0-9]+$";

export class Lobby extends Component {

  isValid(rid, username) {
    if (rid.length != 10) {
      alert("Room ID must have length 10!");
      return false;
    }
    if (!rid.match(alphanumeric)) {
      alert("Room ID must be alphanumeric!");
      return false;
    }
    if (!username.match(alphanumeric)) {
      alert("Nickname must be alphanumeric!");
      return false;
    }
    return true;
  }

  createMethod() {
    var rid = document.getElementsByName("rid")[0].value;
    var username = document.getElementsByName("username")[0].value;
    if (!this.isValid(rid, username))
      return;
    this.props.createRoom(rid);
    this.props.joinRoom(rid, username);
  }

  joinMethod() {
    var rid = document.getElementsByName("rid")[0].value;
    var username = document.getElementsByName("username")[0].value;
    if (!this.is_valid(rid, username))
      return;
    this.props.joinRoom(rid, username);
  }

  render() {
    return (
      <div className="Lobby-container">
        <div className="Login-box">
          <div className="Content">
            <div className="App-title">
              PLAY SET!
            </div>
            <input type="text" name="rid" placeholder="Room ID"/>
            <input type="text" name="username" placeholder="Nickname"/>
            <button onClick={this.createMethod.bind(this)}>Create</button>
            <button onClick={this.joinMethod.bind(this)}>Join</button>
          </div>
        </div>
      </div>
    )
  }
}
