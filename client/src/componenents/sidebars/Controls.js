import React, { Component } from 'react';
import './controls.css'


class Controls extends Component {
    render() {
        return (
            <div className="controls-box">
                {/* <h2>START</h2> */}
                <h2 onClick={() => this.props.history.push("/")}>RE-SELECT PLAYER</h2>
                
            </div>
        );
    }
}

export default Controls;