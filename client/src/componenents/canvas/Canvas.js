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
            coins: [],
            fishesInBox: []
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.moveIT)
        this.addCoins()
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.moveIT)
    }

    addCoins = () => {
        let amount = Math.floor(Math.random() * 10) + 5
        for(var i = 0; i < amount; i++) {
            this.setState(prevState => ({
                coins: [i, ...prevState.coins]
            }), () => {
                this.showCoins()
            })
        }
    }

    showCoins = () => {
        this.setState(prevState => {
            return {
                fishesInBox: prevState.coins.map((el, i) => {
                    return <img key={i} className="coins" src={fish} style={{top: `${Math.floor(Math.random() * 400)}px`, left: `${Math.floor(Math.random() * 400)}px`, position: "absolute"}} alt="get points here!"/>
                    })
            }
        })
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
        this.state.fishesInBox.map((el, i) => {
            let coin =  {
                y: Number(el.props.style.top.substring(0, el.props.style.top.length - 2)),
                x: Number(el.props.style.left.substring(0, el.props.style.left.length - 2))
            }
            let player =  {
                y: Number(document.getElementById('player').style.top.substring(0, document.getElementById('player').style.top.length - 2)),
                x: Number(document.getElementById('player').style.left.substring(0, document.getElementById('player').style.left.length - 2))
            }

            if ((Math.abs(coin.x - player.x) <= 30) && (Math.abs(coin.y - player.y) <= 30)) {
                this.setState(prevState => ({
                    fishesInBox: prevState.fishesInBox.filter(fish => {
                        return fish.key !== el.key
                    })
                }))
            this.props.incrementPoints()
            }
        }) 

    }
    

    render() {
            return (
            <div className="canvas-wrapper">
                <Enemy playerTop={this.state.top} playerLeft={this.state.left}/>
                <img src={this.props.user.imgUrl} id="player" style={{top: "400px", left: "0px"}} alt="player" />
                {this.state.fishesInBox}
            </div>
        );
    }
}

export default withInterfaceStore(Canvas);