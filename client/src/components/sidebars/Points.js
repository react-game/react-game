import React from 'react';
import './points.css'
import { withInterfaceStore } from '../../shared/InterfaceStore';

const Points = (props) => {
    return (
      <div className="points-box">
        <h2>YOU ARE {props.user.username}!</h2>
        <img src={props.user.imgUrl} alt={props.user.username}/>
        <h2>POINTS: {props.points}</h2>
        <h2 className="score-title">HighScores:</h2>
        <h2 className="scores">1st: {props.highScores[0].first}</h2>
        <h2 className="scores">2nd: {props.highScores[0].second}</h2>
        <h2 className="scores">3rd: {props.highScores[0].third}</h2>
      </div>
    );
}

export default withInterfaceStore(Points);