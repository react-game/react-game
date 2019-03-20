import React, { Component } from 'react';
import Controls from '../sidebars/Controls';
import Canvas from '../canvas/Canvas';
import Points from '../sidebars/Points';
import './gameDisplay.css';

class GameDisplay extends Component {
  render() {
    return (
      <div className="game-display">
        <div className="game-display-box">
          <Controls history={this.props.history}/>
          <Canvas />
          <Points />
        </div>
      </div>
    );
  }
}

export default GameDisplay;