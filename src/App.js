import React from 'react';


import { Pad } from "./components/pad/Pad";
import './App.css';

import kick1 from './Sounds/kick1.wav';
import kick2 from './Sounds/kick2.wav';
import snare from './Sounds/snare.wav';
import chat from './Sounds/chat.wav';
import cymbal from './Sounds/cymbal.wav';
import rim from './Sounds/rim.wav';
import tom from './Sounds/tom.wav';
import clap from './Sounds/clap.wav';


function App() {

  const samples = [
    { label:'Kick 1', actionKey: 'Q', soundFx: kick1 },
    { label:'Kick 2', actionKey: 'W', soundFx: kick2 },
    { label:'Snare', actionKey: 'E', soundFx: snare },
    { label:'C-Hat', actionKey: 'R', soundFx: chat },
    { label:'Cymbal', actionKey: 'A', soundFx: cymbal },
    { label:'Rim', actionKey: 'S', soundFx: rim },
    { label:'Tom', actionKey: 'D', soundFx: tom },
    { label:'Clap', actionKey: 'F', soundFx: clap },
  ]
 
  return (

    <div className="App">
      <div className="deck">
        <div className="header">Drum Master 3000</div>
          <div className="deck-controls">
            {samples.map(smp => <Pad {...smp} key={smp.actionKey} />)}
          </div>
        </div>
    </div>

  );
}

export default App;
