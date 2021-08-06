import React from 'react';
import logo from './logo.svg';
import './App.css';
import {appVersion} from "./version";

function goToVersionedUrlIfOutdated() {
    fetch(`${window.location.pathname}/version.txt?t=${new Date().getTime()}`,
        {
            headers: {
                "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",
                "Pragma": "no-cache",
                "Expires": "0",
            },
        })
        .then(response => response.text())
        .then(rawVersion => {
            rawVersion = rawVersion.trim();
            if (rawVersion !== appVersion) {
                if ('URLSearchParams' in window) {
                    let searchParams = new URLSearchParams(window.location.search);
                    searchParams.set("v", rawVersion);
                    window.location.search = searchParams.toString();
                } else {
                    window.location.replace(`#?v=${rawVersion}`);
                }
            }
        });
}

function App() {
    goToVersionedUrlIfOutdated();

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
