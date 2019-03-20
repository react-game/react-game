import React, { Component } from 'react';
import './canvas.css';
// import utils from './utils'
import KeyManager from './KeyManager'

const width = 800;
const height = window.innerHeight;
const ratio = window.devicePixelRatio || 1;



class Canvas extends Component {
    constructor(){
        super()

        this.state = {
            //imports the methods from the KeyManager.  They are
            input: new KeyManager(),
            screen: {
                width: width,
                height: height,
                ratio: ratio
            }
        }
    }
    //when the app loads, it calls the bindkeys function (from KeyManager) and binds WSAD and Arrows.
    componentDidMount(){
        this.state.input.bindKeys();
        requestAnimationFrame(() => {this.update()})
    }
    //Called before the component closes.  It unbinds the WSAD and Arrow keys.
    componentWillUnmount(){
        this.state.input.unbindKeys()
    }
    //game start loop.
    update(currentDelta){
        requestAnimationFrame(() => {this.update()})
    }


    

    render() {
        return (
            <div className="canvas-wrapper">
                <canvas ref="canvas" width={this.state.screen.width} height={this.state.screen.height} className="ourCanvas"/>
            </div>
        );
    }
}

export default Canvas;