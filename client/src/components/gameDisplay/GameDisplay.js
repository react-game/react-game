import React, { Component } from 'react';
import Controls from '../sidebars/Controls';
import Canvas from '../canvas/Canvas';
import Points from '../sidebars/Points';
import './gameDisplay.css';
import Media from "react-media";
import space from '../../assets/spacebar.svg';
import { withInterfaceStore } from '../../shared/InterfaceStore';

class GameDisplay extends Component {

  resetGame = () => {
    this.props.resetSpeed()
    this.props.history.push("/")
    this.props.clearPoints()
  }

  render() {
    return (
    <div>
      <Media query="(max-width: 900px)">
      {matches => (
        matches ?

        <div className="game-display">
            <div className="game-display-box small">
              <Points history={this.props.history}/>
              <div className="game-square">
                <h2 className="button restart" onClick={this.resetGame}>RE-START GAME</h2>
                <Canvas history={this.props.history}/>
                <div className="spacebar-text">
                  <p>Press </p><img src={space} alt="spacebar"/><p> to pause</p>
                </div>
              </div>
            </div>
          </div>

        :

          <div className="game-display">
            <div className="game-display-box">
              <Controls history={this.props.history}/>
              <div className="game-square">
                <Canvas history={this.props.history}/>
                <div className="spacebar-text">
                  <p>Press </p><img src={space} alt="spacebar"/><p> to pause</p>
                </div>
              </div>
              <Points history={this.props.history}/>
            </div>
          </div>
      )}

      </Media>
    </div>

    );
  }
}

export default withInterfaceStore(GameDisplay);