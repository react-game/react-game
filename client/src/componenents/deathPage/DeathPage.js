import React from 'react';
import { withInterfaceStore } from '../../shared/InterfaceStore';
import './deathPage.css';

const DeathPage = (props) => {

    const resetGame = () => {
      props.history.push('/')
      props.clearPoints()
    }

  return (
    <div className="death-page">
      <h1>YOU DIED, BUT YOU HAD {props.points} POINTS!</h1>
      <h2 onClick={resetGame}>PLAY AGAIN!</h2>
    </div>
  );
};

export default withInterfaceStore(DeathPage);