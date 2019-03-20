import React, { Component } from 'react';
import './canvas.css';
import KeyManager from './KeyManager';




class Canvas extends Component {
    constructor(props){
        super(props)
        this.canvasRef = React.createRef()
        this.state = {
            //imports the methods from the KeyManager.  They are
            input: new KeyManager(),
        }
    }
    
    //when the app loads, it calls the bindkeys function (from KeyManager) and binds WSAD and Arrows.
    componentDidMount(){
        this.state.input.bindKeys();
        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillRect(0, 0, canvas.width, canvas.height)        
    }

    

    //Called before the component closes.  It unbinds the WSAD and Arrow keys.
    componentWillUnmount(){
        this.state.input.unbindKeys()
    }
    update(keys){
        if (keys.right){
            this.posistion.x += this.speed;
        }else if (keys.left){
            this.posistion.x -= this.speed;
        }else if (keys.up){
            this.posistion.y += this.speed;
        }else if (keys.down){
            this.posistion.y -= this.speed;
        }
    }
    


    render() {
        return (
            <div className="canvas-wrapper">
                <canvas ref={this.canvasRef} width="500" height="500" className="ourCanvas"/>
            </div>
        );
    }
}

export default Canvas;