import React, { Component } from 'react';
import Controls from '../sidebars/Controls';
import Canvas from '../canvas/Canvas';
import Points from '../sidebars/Points';
import './gameDisplay.css';

class GameDisplay extends Component {
  render() {
    return (
      <div className="game-display-box">
        <Controls />
        <Canvas />
        <Points />
      </div>
    );
  }
}

export default GameDisplay;