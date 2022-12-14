import React from 'react';
import ReactDOM from "react-dom/client"
import './index.css';
import App from './App';
import Game from './tic-tac-toe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Game/>
  </React.StrictMode>
);