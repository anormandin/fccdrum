import React from 'react';

import './pad.css';
import { KnobCtrl } from '../knob/Knob';

export class Pad extends React.Component {
    
    
    render() {
        return <div className='pad'>
            <div className="pad-label">{this.props.label}</div>
            <div className="pad-knobs">
                <KnobCtrl label="level" />
                <KnobCtrl label="pitch"  />
                <KnobCtrl label="decay"  />
            </div>
            <button className="pad-button">{this.props.label}<br />{this.props.actionKey}</button>
        </div>
    }
}
