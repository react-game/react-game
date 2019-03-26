import React from 'react';
import { withInterfaceStore } from '../../shared/InterfaceStore';
import './deathPage.css';

class DeathPage extends React.Component{
  componentDidMount() {
    this.props.newScores()
  }
  
  resetGame = () => {
    this.props.resetSpeed()
    this.props.history.push('/')
    this.props.clearPoints()
  }

  render(){
    return (
      <div className="death-page">
        <h1>I'm sorry, {this.props.user.username}, the dog got you...</h1>
        {this.props.endGameMsg ? <h2>{this.props.endGameMsg}</h2> : null}
        <img src={this.props.user.imgUrl} alt={this.props.user.username}/>
        <h1>You had {this.props.points} points</h1>
        <h1>Better luck next time!</h1>
        <h2 onClick={this.resetGame}>PLAY AGAIN</h2>
      </div>
    );
  } 
};

export default withInterfaceStore(DeathPage);