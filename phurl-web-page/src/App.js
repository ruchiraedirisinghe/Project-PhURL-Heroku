/**
 * The App function returns a div with a className of App, which contains the PhURL component
 * @returns The PhURL component is being returned.
 */
import React from 'react';
import './App.css';
import PhURL from './PhURL';

function App() {
  return (
    <div className="App">
      <PhURL />
    </div>
  );
}

export default App;