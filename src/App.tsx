import React from 'react';
import logo from './logo.svg';
import './App.css';
import {appVersion} from "./version";

function renewTimestampIfLongerThanSecond() {
    const searchParams = new URLSearchParams(window.location.search);
    const tString = searchParams.get("t");
    if (tString !== null) {
        const tValue = parseInt(tString);
        const now = Date.now();

        if (now - tValue > 1000) {
            searchParams.set("t", `${new Date().getTime()}`);
            window.location.search = searchParams.toString();
        }
    }
}

function App() {
    renewTimestampIfLongerThanSecond();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>{appVersion}</p>
      </header>
    </div>
  );
}

export default App;
