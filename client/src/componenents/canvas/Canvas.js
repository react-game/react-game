import React, { Component } from 'react';
import './canvas.css';
import { withInterfaceStore } from '../../shared/InterfaceStore';
import fish from '../../assets/fish2.png';
class Canvas extends Component {
    constructor() {
        super()
        this.state = {
            left: 0,
            top: 334,
            coins: [],
            mapped: []
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
        this.setState({
            mapped: this.state.coins.map((el, i) => {
            return <img key={i} src={fish} className="coins" style={{top: `${Math.floor(Math.random() * 400)}px`, left: `${Math.floor(Math.random() * 400)}px`, position: "absolute"}} alt="get points here!"/>
            })
        })
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.moveIT)
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
        if(this.state.top < 334) {
            this.setState(prevState => ({
                top: prevState.top + 10
            }), () => {
                const player = document.getElementById('player')
                player.style.top = `${this.state.top}px`
            })
        }
    }

    moveUp = () => {
        if(this.state.top > 0) {
        this.setState(prevState => ({
            top: prevState.top - 10
        }), () => {
            const player = document.getElementById('player')
            player.style.top = `${this.state.top}px`
        })
        }
    }

    moveRight = () => {
        if(this.state.left < 334) {
        this.setState(prevState => ({
            left: prevState.left + 10
        }), () => {
            const player = document.getElementById('player')
            player.style.left = `${this.state.left}px`
        })
    }
    }

    moveLeft = () => {
        if(this.state.left > 0) {
        this.setState(prevState => ({
            left: prevState.left - 10
        }), () => {
            const player = document.getElementById('player')
            player.style.left = `${this.state.left}px`
        })
    }
    }
    

    render() {
        this.state.mapped.forEach(el => {
            return console.log('top:', el.props.style.top.substring(0, el.props.style.top.length - 2), 'left:', el.props.style.left.substring(0, el.props.style.left.length - 2))
        })
        return (
            <div className="canvas-wrapper">
                <img src={this.props.user.imgUrl} id="player" alt="player"/>
                {this.state.mapped}
            </div>
        );
    }
}

export default withInterfaceStore(Canvas);