import React from 'react';
import { withInterfaceStore } from '../../shared/InterfaceStore';

const DeathPage = (props) => {

    const resetGame = () => {
      props.history.push('/')
      props.clearPoints()
    }

  return (
    <div>
      <h1>YOU DIED, BUT YOU HAD {props.points} POINTS!</h1>
      <button onClick={resetGame}>play again</button>
    </div>
  );
};

export default withInterfaceStore(DeathPage);