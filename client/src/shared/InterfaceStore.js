import React, { Component } from 'react';
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class InterfaceStore extends Component {
    constructor(){
        super()
        this.state = {
            usersArr: [],
            user: {},
            points: 0,
            intervalSpeed: 50,
            canPlay: false,
            userSpeed: 20,
            dogSpeed: 1,
            isPaused: false
        }
    }
    setPauseToFalse = () => {
        this.setState({
            isPaused: false,
            userSpeed: 20,
            dogSpeed: 1
        })
    }

    pauseGame = () => {
        this.state.isPaused ?
    
        this.setState({
            userSpeed: 20,
            dogSpeed: 1,
            isPaused: false
        })
        :
        this.setState({
            userSpeed: 0,
            dogSpeed: 0,
            isPaused: true
        })
    }
    
    getUsers = () => {
        axios.get("/users").then(res => {
            this.setState({usersArr: res.data})
        })
    }

    selectUser = id => {
        this.state.usersArr.map((user, i) => {
            document.getElementsByClassName('user-card')[i].classList.remove('overlay')
            return user._id !== id ? document.getElementsByClassName('user-card')[i].classList.add('overlay') :
                this.setState({
                    user: user,
                    canPlay: true
            })
        })
    }

    incrementPoints = () => {
        this.setState(prevState => ({
            points: prevState.points += 5
        }))
    }

    clearPoints = () => {
        this.setState({
            points: 0
        })
    }

    incrementEnemySpeed = () => {
        let {intervalSpeed} = this.state
        let newSpeed =  Math.floor(intervalSpeed * .2)
        this.setState(prevState=>({
            intervalSpeed: prevState.intervalSpeed - newSpeed
        }))
    }

    resetSpeed = () => {
        this.setState({
            intervalSpeed: 50
        })
    }

    render() {
        return (
            <Provider value={{
                getUsers: this.getUsers,
                selectUser: this.selectUser,
                incrementPoints: this.incrementPoints,
                clearPoints: this.clearPoints,
                incrementEnemySpeed: this.incrementEnemySpeed,
                resetSpeed: this.resetSpeed,
                pauseGame: this.pauseGame,
                setPauseToFalse: this.setPauseToFalse,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default InterfaceStore;

export function withInterfaceStore(C){
    return props =>
        <Consumer>
            {value => <C {...value} {...props}/>}
        </Consumer>
}