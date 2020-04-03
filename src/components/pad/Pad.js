import React from 'react';

import './pad.css';
import { KnobCtrl } from '../knob/Knob';


export class Pad extends React.Component {
    constructor(props, state) {
        super(props, state);
        
        this.fx = new Audio(this.props.soundFx);
        this.state = { active: false };
    }
   
    handleKeyPress = (e) => {
        if (e.key.toUpperCase() === this.props.actionKey) {
            this._btn.backgroundColor = 'pink';
          this.playFx();
        }
      }

    playFx = () => {
        this.setState({active:true});
        this.fx.currentTime = 0;
        this.fx.play();
        setTimeout(() => this.setState({active:false}), 100);
    }

    componentDidMount = () => {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {

        const className = this.state.active ? "pad-button active" : "pad-button"

        return <div className='pad'>
            <div className="pad-label">{this.props.label}</div>
            <div className="pad-knobs">
                <KnobCtrl label="level" />
                <KnobCtrl label="pitch"  />
                <KnobCtrl label="decay"  />
            </div>
            <button   ref={(btn) => this._btn = btn} className={className} onClick={this.playFx}>{this.props.label}<br />{this.props.actionKey}</button>
        </div>
    }
}
