import React from 'react';

import {Knob} from 'react-rotary-knob';
import * as skins from 'react-rotary-knob-skin-pack';


import './knob.css';

export class KnobCtrl extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // }

   
    render() {
        return <div className='knob-wrapper'>
            <Knob skin={skins.s5} defaultValue={5} min={0} max={10} unlockDistance={0}
                preciseMode={false}  rotateDegrees="300"   />
            <span className='knob-text'>{this.props.label}</span>
            

        </div>
    }
}
