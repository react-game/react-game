import React from 'react';
import './controls.css'
import { withInterfaceStore } from '../../shared/InterfaceStore';
import wasd from '../../assets/wasd.svg';
import arrows from '../../assets/arrows.svg';

const Controls = (props) => {

    const resetGame = () => {
        props.history.push("/")
        props.clearPoints()
    }

    return (
        <div className="controls-box">
            
            <div className="controls-text">
                <h3>KEEP AWAY FROM THE DOG TO SURVIVE!</h3>
                <h3>USE</h3>
                <img src={arrows} alt="arrow keys"/> 
                <h3>OR</h3>
                <img src={wasd} alt="w, a, s, d"/> 
                <h3>TO EAT THE FISH AND COLLECT POINTS </h3>
            </div>

            <h2 className="button" onClick={resetGame}>RE-START GAME</h2>
            
        </div>
    );
}

export default withInterfaceStore(Controls);