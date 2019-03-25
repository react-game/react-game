import React from 'react';
import { withInterfaceStore } from '../../shared/InterfaceStore';
import './deathPage.css';

const DeathPage = (props) => {

    const resetGame = () => {
      props.resetSpeed()
      props.history.push('/')
      props.clearPoints()
    }

  return (
    <div className="death-page">
      <h1>I'm sorry, {props.user.username}, the dog got you...</h1>
      <img src={props.user.imgUrl} alt={props.user.username}/>
      <h1>You had {props.points} points</h1>
      <h1>Better luck next time!</h1>
      <h2 onClick={resetGame}>PLAY AGAIN</h2>
    </div>
  );
};

export default withInterfaceStore(DeathPage);