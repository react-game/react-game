import React from 'react';
import './points.css'
import { withInterfaceStore } from '../../shared/InterfaceStore';

const Points = (props) => {
    return (
      <div className="points-box">
        <h2>HighScores</h2>
        <p>1st: {props.highScores[0].first}</p>
        <p>2nd: {props.highScores[0].second}</p>
        <p>3rd: {props.highScores[0].third}</p>
        <h2>YOU ARE {props.user.username}!</h2>
        <img src={props.user.imgUrl} alt={props.user.username}/>
        <h2>POINTS: {props.points}</h2>
      </div>
    );
}

export default withInterfaceStore(Points);