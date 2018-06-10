import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HashTableApp from "./components/HashTableApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/boxgames1/hash-tables-app"
        >
          <img
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              border: 0
            }}
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
            alt="Fork me on GitHub"
          />
        </a>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Hash Tables App </h1>
        </header>
        <HashTableApp />
      </div>
    );
  }
}

export default App;
