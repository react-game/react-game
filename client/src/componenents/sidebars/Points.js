import React, { Component } from 'react';
import './points.css'
import { withInterfaceStore } from '../../shared/InterfaceStore';

class Points extends Component {
  render() {
    return (
      <div className="points-box">
        <h2>YOU ARE {this.props.user.username}!</h2>
        <h2>POINTS:</h2>
      </div>
    );
  }
}

export default withInterfaceStore(Points);