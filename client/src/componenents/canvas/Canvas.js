import React, { Component } from 'react';
import './canvas.css';
// import utils from './utils'

class Canvas extends Component {
    // componentDidMount() {
    //     const canvas = this.refs.canvas
    //     const ctx = canvas.getContext("2d")
    // }


    

    render() {
        return (
            <div className="canvas-wrapper">
                <canvas ref="canvas" width={800} height={500} className="ourCanvas"/>
            </div>
        );
    }
}

export default Canvas;