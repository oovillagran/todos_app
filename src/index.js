import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './images/react.svg';
import './App.css';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>
    <h1>Hello from React application</h1>
    <img src={reactLogo} className="logo react" alt="React Logo" />
  </div>
);