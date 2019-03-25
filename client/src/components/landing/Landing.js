import React, { Component } from 'react';
import {withInterfaceStore} from "./../../shared/InterfaceStore"
import './landing.css';
import wasd from '../../assets/landingwasd.svg';
import arrows from '../../assets/landingarrows.svg';

class Landing extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  toggleClass = () => {
    document.getElementById('choose-player').classList.toggle('wibble')
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
        <h1>CAT CHASE</h1>
        <h2>USE <img src={arrows} alt="arrow keys"/> OR <img src={wasd} alt="w, a, s, d"/> TO EAT THE FISH AND COLLECT POINTS 
        <br/>KEEP AWAY FROM THE DOG TO SURVIVE!</h2>
        <div className="users">{mappedUsers}</div>
        <h2 id="choose-player">CHOOSE YOUR PLAYER!</h2>
        {/*please don't put anything inside this "landing-button" div!*/} 
        <div id="landing-button">
          <h2 onClick={this.props.canPlay ? () => this.props.history.push("/game") : this.toggleClass}>ENTER</h2>
        </div>
      </div>
    );
  }
}

export default withInterfaceStore(Landing);