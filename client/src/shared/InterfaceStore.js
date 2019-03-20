import React, { Component } from 'react';
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class InterfaceStore extends Component {
    constructor(){
        super()
        this.state = {
            usersArr: [],
            user: []
        }
    }

    getUsers = () => {
        axios.get("/users").then(res => {
            this.setState({usersArr: res.data})
        })
    }

    selectUser = id => {
        let selected = this.state.usersArr.filter(user => user._id === id)
        this.setState({
            user: selected
        })
    }

    render() {
        return (
            <Provider value={{
                getUsers: this.getUsers,
                selectUser: this.selectUser,
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
            {value => <C {...value}{...props}/>}
        </Consumer>
}