import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const allTexts = [
    "This could be a list of movies.",
    "This could be a description of some recipes.",
    "This is just here because I needed 3 tabs."
  ];

  return (
    <div className="App">
      <Tabs allTexts={allTexts}/>
    </div>
  );
}

export default App;
