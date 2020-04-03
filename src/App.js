import React from 'react';


import { Pad } from "./components/pad/Pad";
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="deck">
          <Pad label="Kick 1" actionKey="A" />
          <Pad label="Kick 2" actionKey="S"   />
          <Pad label="Snare" actionKey="D"   />
          <Pad label="Clap" actionKey="F"   />
          <Pad label="Rim" actionKey="G"   />
          <Pad label="CHat" actionKey="H"   />
          <Pad label="Tom" actionKey="J"   />
          <Pad label="Cymbal" actionKey="K"   />
        </div>
    </div>
  );
}

export default App;
