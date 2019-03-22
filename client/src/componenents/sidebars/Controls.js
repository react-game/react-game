import React from 'react';
import './controls.css'
import { withInterfaceStore } from '../../shared/InterfaceStore';

const Controls = (props) => {

    const resetGame = () => {
        props.history.push("/")
        props.clearPoints()
    }

    return (
        <div className="controls-box">
            
            <h3>
                USE THE ARROW KEYS OR A, W, S, D TO MOVE. 
                <br></br> EAT THE FISH TO COLLECT POINTS. 
                <br></br> KEEP AWAY FROM THE DOG TO SURVIVE!
            </h3>

            <h2 className="button" onClick={resetGame}>RE-START GAME</h2>
            
        </div>
    );
}

export default withInterfaceStore(Controls);