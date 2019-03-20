import React, { Component } from 'react';
import {withInterfaceStore} from "./../../shared/InterfaceStore"
import './landing.css';


class Landing extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  // select = () => {

  // }

  render() {
    let mappedUsers = this.props.usersArr.map(user => {
      return (
        <div key={user._id} onClick={() => this.props.selectUser(user._id)}className="user-card">
          <img src={user.imgUrl} alt=""/>
          <h2>{user.username}</h2>
        </div>
      )
    })
    return (
      <div className="landing">
        <h1>THIS IS OUR AMAZING GAME!</h1>
        <h1>CLICK TO ENTER!</h1>
        <div className="users">{mappedUsers}</div>
        {/*please don't put anything inside this "landing-button" div!*/} 
        <div id="landing-button">
          <h2 onClick={() => this.props.history.push("/game")}>ENTER</h2>
        </div>
      </div>
    );
  }
}

export default withInterfaceStore(Landing);