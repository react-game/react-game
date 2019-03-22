import React, { Component } from 'react';

class Enemy extends Component {
    constructor(){
        super()

        this.state = {
            left:0,
            top:0
        }
    }
    //starts movement interval on load
    componentDidMount() {
        this.trigger()
    }

    trigger() {
        setInterval(() => { 
            this.randomMovement()
        }, 50);
    }

    //picks a random direction and moves
    randomMovement = () => {
        const { playerTop, playerLeft } = this.props 
        const { left, top } = this.state 
        // console.log(playerTop)      
        if((playerLeft < left) && (playerTop < top) ){
            console.log(playerLeft < left && playerTop < top)
                this.moveUp()
                this.moveLeft()
        }
        else if((playerLeft > left) && (playerTop > top)){
                this.moveDown()
                this.moveRight()
        }
        else if ((playerLeft < left) && (playerTop > top)){
                this.moveDown()
                this.moveLeft()
        } 
        else if((playerLeft > left) && (playerTop < top)){
                this.moveUp()
                this.moveRight()
        }
        else if((playerLeft === left) && (playerTop < top)){
                this.moveUp()
        }
        else if ((playerLeft === left) && (playerTop > top)){
                this.moveDown()
        }
        else if ((playerLeft < left) && (playerTop === top)){
                this.moveLeft()
        }
        else if ((playerLeft > left) && (playerTop === top)){
                this.moveRight()
        }
        
        this.checkCollision()
    }
   
    moveDown = () => {
        // console.log('should move up')
        if(this.state.top < 310) {
        this.setState(prevState => ({
            top: prevState.top + 1
        }), () => {
            const enemy = document.getElementById('enemy')
            enemy.style.top = `${this.state.top}px`
        })
        }
    }

    moveUp = () => {
        // console.log('should move up')
        if(this.state.top > 0) {
        this.setState(prevState => ({
            top: prevState.top - 1
        }), () => {
            const enemy = document.getElementById('enemy')
            enemy.style.top = `${this.state.top}px`
        })
        }
    }

    moveRight = () => {
        // console.log('should move right')
        if(this.state.left < 310) {
        this.setState(prevState => ({
            left: prevState.left + 1
        }), () => {
            const enemy = document.getElementById('enemy')
            enemy.style.left = `${this.state.left}px`
        })
    }
    }

    moveLeft = () => {
        // console.log('should move left')
        if(this.state.left > 0) {
        this.setState(prevState => ({
            left: prevState.left - 1
        }), () => {
            const enemy = document.getElementById('enemy')
            enemy.style.left = `${this.state.left}px`
        })
    }
    }

    checkCollision = () => {
        const { playerTop, playerLeft } = this.props
        if ((Math.abs(this.state.top - playerTop) <= 30) && (Math.abs(this.state.left - playerLeft) <= 30)) {
            console.log("YOU DEAD")
        }
    }

    render() {
        // console.log(this.props)
        return (
            <div id="enemy" onClick={this.randomMovement}>
                
            </div>
        );
    }
}

export default Enemy;