import React, { Component } from 'react';
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>THIS IS OUR AMAZING GAME!</h1>
        <h1>CLICK TO ENTER!</h1>

        {/* please don't put anything inside this "landing-button" div!  */}
        <div id="landing-button">
          <h2 onClick={() => this.props.history.push("/game")}>ENTER</h2>
        </div>
      </div>
    );
  }
}

export default Landing;