import React, { Component } from 'react';

class Enemy extends Component {
    constructor(){
        super()

        this.state = {
            left:0,
            top:310
        }
    }

    componentDidMount() {
        this.trigger()
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    trigger() {
        setInterval(() => { 
            this.randomMovement()
        }, 1000);
    }

    randomMovement = () => {
        let myNum = Math.floor(Math.random()*4) + 1
        if (myNum === 1){
            this.moveDown()
        }else if (myNum === 2){
            this.moveUp()
        }else if (myNum === 3){
            this.moveLeft()
        }else if (myNum === 4){
            this.moveRight()
        }
    }


    moveDown = () => {
        console.log('should move down')
        if(this.state.top < 310) {
            this.setState(prevState => ({
                top: prevState.top + 5
            }), () => {
                const enemy = document.getElementById('enemy')
                enemy.style.top = `${this.state.top}px`
            })
        }
    }

    moveUp = () => {
        console.log('should move up')
        if(this.state.top > 0) {
        this.setState(prevState => ({
            top: prevState.top - 5
        }), () => {
            const enemy = document.getElementById('enemy')
            enemy.style.top = `${this.state.top}px`
        })
        }
    }

    moveRight = () => {
        console.log('should move right')
        if(this.state.left < 310) {
        this.setState(prevState => ({
            left: prevState.left + 5
        }), () => {
            const enemy = document.getElementById('enemy')
            enemy.style.left = `${this.state.left}px`
        })
    }
    }

    moveLeft = () => {
        console.log('should move left')
        if(this.state.left > 0) {
        this.setState(prevState => ({
            left: prevState.left - 5
        }), () => {
            const enemy = document.getElementById('enemy')
            enemy.style.left = `${this.state.left}px`
        })
    }
    }
    render() {
        return (
            <div id="enemy" onClick={this.moveRight}>
                
            </div>
        );
    }
}

export default Enemy;