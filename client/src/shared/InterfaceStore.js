import React, { Component } from 'react';
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class InterfaceStore extends Component {
    constructor(){
        super()
        this.state = {
            usersArr: [],
            user: {},
            points: 0
        }
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
                    user: user
            })
        })
    }

    incrementPoints = () => {
        this.setState(prevState => ({
            points: prevState.points += 5
        }))
    }

    render() {
        return (
            <Provider value={{
                getUsers: this.getUsers,
                selectUser: this.selectUser,
                incrementPoints: this.incrementPoints,
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