import { Component } from 'react';

//key codes for arrows and WSAD
// const key = {
//     up: 38 || 87,
//     left: 37 || 65,
//     right: 39 || 68,
//     down: 40 || 83
// }
const key = {
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    w: 87,
    a: 65,
    d: 68,
    s: 83,
    enter: 13,
    space: 32
}

class KeyManager extends Component {
    constructor(){
        super()

        this.keypress = {
            left: 0,
            right: 0,
            up: 0,
            down: 0,
            enterOrSpace: 0
        }
    }
    //binds keys when the app is open
    bindKeys = () =>{
        window.addEventListener('keyup', this.handleKeys.bind(this,false));
        window.addEventListener('keydown', this.handleKeys.bind(this,true));
    }
    //unbinds the keys when the app is closed
    unbindKeys = () => {
        window.removeEventListener('keyup', this.handleKeys);
        window.removeEventListener('keydown', this.handleKeys);
    }

    //These switches just allow multiple keys (up and w) to do the same thing.
    handleKeys = (value, e) => {
        let keys = this.keypress;
        switch (e.keyCode) {
            case key.left:
            case key.a:
                keys.left = value;
                console.log("left, or a");
                break
            case key.right:
            case key.d:
                keys.right = value;
                console.log("right, or d")
                break
            case key.up:
            case key.w:
                keys.up = value;
                console.log("up or w");
                break
            case key.down:
            case key.s:
                keys.down = value;
                console.log('down or s')
                break
            case key.enter:
            case key.space:
                keys.down = value;
                console.log('enter or space was pressed')
                break
            default:
                console.log('No game key was pressed')
        }
        this.keypress = keys
    }

    
}

export default KeyManager;