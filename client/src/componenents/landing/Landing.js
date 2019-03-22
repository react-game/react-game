import React, { Component } from 'react';
import {withInterfaceStore} from "./../../shared/InterfaceStore"
import './landing.css';


class Landing extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    let mappedUsers = this.props.usersArr.map(user => {
      return (
        <div key={user._id} onClick={() => this.props.selectUser(user._id)} className="user-card">
          <img src={user.imgUrl} alt=""/>
          <h2>{user.username}</h2>
        </div>
      )
    })
    return (
      <div className="landing">
        <h1>THIS IS OUR AMAZING GAME!</h1>
        <h2>USE THE ARROW KEYS OR W, A, S, D TO MOVE. <br/>
            EAT THE FISH TO COLLECT POINTS. <br/>
            KEEP AWAY FROM THE DOG TO SURVIVE!</h2>
        <h2>CHOOSE YOUR PLAYER!</h2>
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