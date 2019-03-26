import React, { Component } from 'react';
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class InterfaceStore extends Component {
    constructor(){
        super()
        this.state = {
            usersArr: [],
            user: {},
            highScores: [],
            points: 0,
            intervalSpeed: 50,
            canPlay: false
        }
    }
    
    getUsers = () => {
        axios.get("/users").then(res => {
            this.setState({usersArr: res.data})
        })
    }

    getScores = () => {
        axios.get("/scores").then(res => {
            this.setState({highScores: res.data})
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

    newScores = () => {
        let {first, second, third, _id} = this.state.highScores[0]
        let {points} = this.state
        console.log(777,first, second, third, _id, points)
        if(points > first){
            // this.setState(prevState => ({
            //     first: points,
            //     second: prevState.first,
            //     third: prevState.second
            // }))
            axios.put(`/scores/${_id}`, {"first": points}).then(res => {
                // this.setState({highScores: res.data})
                console.log(333, res.data)
            })
        } else if(points > second){
            // this.setState(prevState => ({
            //     second: points,
            //     third: prevState.second
            // }))
            axios.put(`/scores/${_id}`, {"second": points}).then(res => {
                // this.setState({highScores: res.data})
                console.log(333, res.data)
            })
        } else if(points > third){
            // this.setState({
            //     third: points
            // })
            axios.put(`/scores/${_id}`, {"third": points}).then(res => {
                // this.setState({highScores: res.data})
                console.log(333, res.data)
            })
        }
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
                getScores: this.getScores,
                selectUser: this.selectUser,
                incrementPoints: this.incrementPoints,
                clearPoints: this.clearPoints,
                newScores: this.newScores,
                incrementEnemySpeed: this.incrementEnemySpeed,
                resetSpeed: this.resetSpeed,
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