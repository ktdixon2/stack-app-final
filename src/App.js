import React from 'react';
import stackApp from './stackApp.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={stackApp} className="App-logo" alt="logo" />
        <p>
          A simple way to track your crypto portfolio
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
