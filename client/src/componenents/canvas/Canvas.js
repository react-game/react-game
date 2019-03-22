import React, { Component } from 'react';
import './canvas.css';
import { withInterfaceStore } from '../../shared/InterfaceStore';
import Enemy from './Enemy'
import fish from '../../assets/fish2.png';

class Canvas extends Component {
    constructor() {
        super()
        this.state = {
            left: 0,
            top: 400,
            fishesToDisplay: [],
            intervalSpeed: 30
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.movePlayer)
        this.generateFish()
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.movePlayer)
    }

    // Create a random number and save that many image elements to state
    // 'this.state.fishesToDisplay' is in the render
    // Using the img top and left style properties in checkCollision,
    // so this is important! 
    generateFish = () => {
        let amount = Math.floor(Math.random() * 10) + 5
        let fishes = []
            for(var i = 0; i < amount; i++) {
                fishes.push(i)
            }
        this.setState({
            fishesToDisplay: fishes.map((el, i) => {
                return <img key={i} className="fish" src={fish} style={{top: `${Math.floor(Math.random() * 400)}px`, left: `${Math.floor(Math.random() * 400)}px`, position: "absolute"}} alt="get points here!"/>
                })
        })
    }

    movePlayer = (e) => {
        if(e.keyCode === 83 || e.keyCode === 40) {
            this.moveDown()

        } else if (e.keyCode === 38 || e.keyCode === 87) {
            this.moveUp()

        }  else if (e.keyCode === 37 || e.keyCode === 65) {
            this.moveLeft()

        }  else if (e.keyCode === 68 || e.keyCode === 39) {
            this.moveRight()
        }
        this.checkCollision()
    }

    moveDown = () => {
        if(this.state.top < 400) {
            this.setState(prevState => ({
                top: prevState.top + 15
            }), () => {
                const player = document.getElementById('player')
                player.style.top = `${this.state.top}px`
            })
        }
    }

    moveUp = () => {
        if(this.state.top > 0) {
        this.setState(prevState => ({
            top: prevState.top - 15
        }), () => {
            const player = document.getElementById('player')
            player.style.top = `${this.state.top}px`
        })
        }
    }

    moveRight = () => {
        if(this.state.left < 400) {
        this.setState(prevState => ({
            left: prevState.left + 15
        }), () => {
            const player = document.getElementById('player')
            player.style.left = `${this.state.left}px`
        })
        }
    }

    moveLeft = () => {
        if(this.state.left > 0) {
        this.setState(prevState => ({
            left: prevState.left - 15
        }), () => {
            const player = document.getElementById('player')
            player.style.left = `${this.state.left}px`
        })
        }
    }

    checkCollision = () => {
        this.state.fishesToDisplay.forEach(fish => {
            let coin =  {
                // Removing the 'px' and changing str to number
                // for comparison in following if statement
                y: Number(fish.props.style.top.substring(0, fish.props.style.top.length - 2)),
                x: Number(fish.props.style.left.substring(0, fish.props.style.left.length - 2))
            }
            let player =  {
                y: this.state.top,
                x: this.state.left
            }

            if ((Math.abs(coin.x - player.x) <= 35) && (Math.abs(coin.y - player.y) <= 35)) {
                this.setState(prevState => ({
                    fishesToDisplay: prevState.fishesToDisplay.filter(remainingFish => {
                        return remainingFish.key !== fish.key
                    })
                }))
            this.props.incrementPoints()
            }
        }) 

    }
    

    render() {
        return (
            <div className="canvas-wrapper">
                {/* Our enemy, the dog */}
                <Enemy history={this.props.history} playerTop={this.state.top} playerLeft={this.state.left} intervalSpeed={this.state.intervalSpeed} />

                {/* Our player */}
                <img src={this.props.user.imgUrl} id="player" style={{top: "400px", left: "0px"}} alt="player" />

                {/* Our fishes */}
                {this.state.fishesToDisplay}
            </div>
        );
    }
}

export default withInterfaceStore(Canvas);