import React, { Component } from 'react';
import './controls.css'
import { withInterfaceStore } from '../../shared/InterfaceStore';


class Controls extends Component {

    resetGame = () => {
        this.props.history.push("/")
        this.props.clearPoints()
    }

    render() {
        return (
            <div className="controls-box">
                {/* <h2>START</h2> */}
                <h2 onClick={this.resetGame}>RE-SELECT PLAYER</h2>
                
            </div>
        );
    }
}

export default withInterfaceStore(Controls);