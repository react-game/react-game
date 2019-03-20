import React, { Component } from 'react';
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/game")}>enter</button>
      </div>
    );
  }
}

export default Landing;