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
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.movePlayer)
        this.generateFish()
        this.props.clearPoints()
        this.props.setPauseToFalse()
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

    //Keybinding for WSAD and Arrow keys.
    movePlayer = (e) => {
        if(e.keyCode === 83 || e.keyCode === 40) {
            this.moveDown()

        } else if (e.keyCode === 38 || e.keyCode === 87) {
            this.moveUp()

        } else if (e.keyCode === 37 || e.keyCode === 65) {
            this.moveLeft()

        } else if (e.keyCode === 68 || e.keyCode === 39) {
            this.moveRight()
        } else if (e.keyCode === 32) {
            this.props.pauseGame()
        }
        this.checkCollision()
    }

    
    //Player movement functions
    //playerSpeed is from InterfaceStore
    // If statement values are based off the size of the game canvas.
    moveDown = () => {
        let speed = this.props.playerSpeed
        if(this.state.top < 400) {
            this.setState(prevState => ({
                top: prevState.top + speed
            }), () => {
                const player = document.getElementById('player')
                player.style.top = `${this.state.top}px`
            })
        }
    }

    moveUp = () => {
        let speed = this.props.playerSpeed
        if(this.state.top > 0) {
        this.setState(prevState => ({
            top: prevState.top - speed
        }), () => {
            const player = document.getElementById('player')
            player.style.top = `${this.state.top}px`
        })
        }
    }

    moveRight = () => {
        let speed = this.props.playerSpeed
        if(this.state.left < 400) {
        this.setState(prevState => ({
            left: prevState.left + speed
        }), () => {
            const player = document.getElementById('player')
            player.style.left = `${this.state.left}px`
        })
        }
    }

    moveLeft = () => {
        let speed = this.props.playerSpeed
        if(this.state.left > 0) {
        this.setState(prevState => ({
            left: prevState.left - speed
        }), () => {
            const player = document.getElementById('player')
            player.style.left = `${this.state.left}px`
        })
        }
    }


    //Removing the 'px' and changing str to number so that we can read the position as an X,Y coordinate of each fish.
    checkCollision = () => {
        this.state.fishesToDisplay.forEach(item => {
            let fish =  {
                y: Number(item.props.style.top.substring(0, item.props.style.top.length - 2)),
                x: Number(item.props.style.left.substring(0, item.props.style.left.length - 2))
            }
            let player =  {
                y: this.state.top,
                x: this.state.left
            }
            // Math.abs + or - num are adjusting the radii of the player and fish to be in the center of their repective divs.
            // <= value is the sum of the of both radii (less a few pixels) so that a collision can be detected when the radii touch.
            if ((Math.abs((fish.x +15)- (player.x + 30)) <= 40) && (Math.abs((fish.y + 15)- (player.y + 30)) <= 40)) {
                this.setState(prevState => ({
                    fishesToDisplay: prevState.fishesToDisplay.filter(remainingFish => {
                        return remainingFish.key !== item.key
                    })
                }))
            this.props.incrementPoints()
            }
        }) 

        //If you catch all the fish, more fish generate and the Enemy gets faster to increase difficulty.
        if(this.state.fishesToDisplay.length <= 0){
            this.generateFish()
            // this.props.stopInterval()
            this.props.incrementEnemySpeed()
        }

    }
    

    render() {
        return (
            <div className="canvas-wrapper">
                {/* Our enemy, the dog */}
                <Enemy history={this.props.history} playerTop={this.state.top} playerLeft={this.state.left}/>

                <div className={this.props.isPaused ? 'showPaused' : 'hiddenPaused'}>PAUSED</div>

                {/* Our player */}
                <img src={this.props.user.imgUrl} id="player" style={{top: "400px", left: "0px"}} alt="player" />

                {/* Our fishes */}
                {this.state.fishesToDisplay}
            </div>
        );
    }
}

export default withInterfaceStore(Canvas);