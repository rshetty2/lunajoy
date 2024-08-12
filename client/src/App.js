import './App.css';
import React from 'react';
import HealthFormComponent from './HealthFormComponent'
import GraphComponent from './GraphComponent'

function App() {
  return (
   <div class="flexbox-container">
    <div><HealthFormComponent /></div>
    <div><GraphComponent /></div>
  </div>
  );
}

export default App;
