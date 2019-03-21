import React, { Component } from 'react';
import './canvas.css';

class Canvas extends Component {
    constructor() {
        super()
        this.state = {
            left: 0,
            top: 0
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.moveIT)
    }

    moveIT = (e) => {
        
        if(e.keyCode === 83 || e.keyCode === 40) {
            this.moveDown()

        } else if (e.keyCode === 38 || e.keyCode === 87) {
            this.moveUp()

        }  else if (e.keyCode === 37 || e.keyCode === 65) {
            this.moveLeft()

        }  else if (e.keyCode === 68 || e.keyCode === 39) {
            this.moveRight()
        }
    }

    moveDown = () => {
        if(this.state.top < 450) {
            this.setState(prevState => ({
                top: prevState.top + 5
            }), () => {
                const player = document.getElementById('player')
                player.style.top = `${this.state.top}px`
            console.log(this.state.left)
            })
        }
    }

    moveUp = () => {
        if(this.state.top > 0) {
        this.setState(prevState => ({
            top: prevState.top - 5
        }), () => {
            const player = document.getElementById('player')
            player.style.top = `${this.state.top}px`
        })
        }
    }

    moveRight = () => {
        if(this.state.left < 450) {
        this.setState(prevState => ({
            left: prevState.left + 5
        }), () => {
            const player = document.getElementById('player')
            player.style.left = `${this.state.left}px`
        })
    }
    }

    moveLeft = () => {
        if(this.state.left > 0) {
        this.setState(prevState => ({
            left: prevState.left - 5
        }), () => {
            const player = document.getElementById('player')
            player.style.left = `${this.state.left}px`
        })
    }
    }
    

    render() {
        return (
            <div className="canvas-wrapper" style={{position: "relative"}}>
                <div id="player"></div>
            </div>
        );
    }
}

export default Canvas;