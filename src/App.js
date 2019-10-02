import React from 'react';
import Routes from './routes';

import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>
      <div className="content">
        <Routes>
        </Routes>
      </div>
    </div>
  );
}

export default App;
