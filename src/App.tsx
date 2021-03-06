import React from 'react';
import logo from './logo.svg';
import './App.css';
import {appVersion} from "./version";

// function renewTimestampIfLongerThanSecond() {
//     const now = Date.now();
//     const searchParams = new URLSearchParams(window.location.search);
//     const tString = searchParams.get("t");
//     const tValue = tString !== null ? parseInt(tString) : now - 2000;
//
//     if (now - tValue > 1000) {
//         searchParams.set("t", `${new Date().getTime()}`);
//         window.location.search = searchParams.toString();
//     }
// }

function removeTrailingSlash(url: string): string {
    return url.replace(/\/$/, "");
}

function goToTimestampedUrlIfOutdated() {
    if (appVersion === "#dev_version#") {
        return;
    }

    fetch(`${removeTrailingSlash(window.location.pathname)}/versions/${appVersion}.txt?t=${Date.now()}`, { cache: "no-cache" })
        .then(response => {
            if (!response.ok && response.status === 404) {
                const searchParams = new URLSearchParams(window.location.search);
                searchParams.set("t", `${new Date().getTime()}`);
                window.location.search = searchParams.toString();
            }
        });
}

function App() {
    goToTimestampedUrlIfOutdated();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
            Some additional text to re-check cache.
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
