import React, { Component } from 'react';

class Player extends Component {
    constructor(args){
        super()
        this.posistion = args.posistion;
        this.speed = args.speed;
        this.radius = args.radius;
        this.delete = false;
        this.onDie = args.onDie;
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Player;