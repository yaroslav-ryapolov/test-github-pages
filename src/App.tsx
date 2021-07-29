import React from 'react';
import logo from './logo.svg';
import './App.css';
import {appVersion} from "./version";

function App() {
  fetch("https://raw.githubusercontent.com/yaroslav-ryapolov/test-github-pages/gh-pages/version.txt")
      .then(function(response) {
        response.text()
            .then((rawVersion: string) => {
                console.log("VERSION", rawVersion);

                rawVersion = rawVersion.trim();
                if (rawVersion !== appVersion) {
                    // window.location.replace(`#?v=${text}`);
                }
            });
      });

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
