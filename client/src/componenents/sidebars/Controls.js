import React, { Component } from 'react';
import './controls.css'
import { withInterfaceStore } from '../../shared/InterfaceStore';


class Controls extends Component {

    render() {
        return (
            <div className="controls-box">
                {/* <h2>START</h2> */}
                
                <h3>USE THE ARROW KEYS TO EAT THE FISH AND KEEP AWAY FROM THE DOG!</h3>
                
            </div>
        );
    }
}

export default withInterfaceStore(Controls);