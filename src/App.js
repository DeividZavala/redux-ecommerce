import React from 'react';
import Router from './Router';
import './App.css';
import NavBar from './components/common/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router/>
    </div>
  );
}

export default App;
