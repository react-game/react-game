import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import GameDisplay from './components/gameDisplay/GameDisplay';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import DeathPage from './components/deathPage/DeathPage';
import Media from 'react-media';

const App = () => {

  return (
    <div>
      {navigator.userAgent.match(/Android|Mobile|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/ig) ? (
          <div className="app">
            <p>Please use a desktop computer to play our game, as it requires a keyboard.</p>
            <img src="https://robohash.org/flufferkins?set=set4" alt="cat"/>
            <p>Thank you!</p>
          </div>

        ) : (
          
          <Media query="(max-width: 700px)">
            {matches => (
              matches ?
              <div className="app">
                <p>You're gonna need a bigger screen!
                <br></br>Please enlarge this window!</p>
                <img src="https://robohash.org/flufferkins?set=set4" alt="cat"/>
                <p>Thank you!</p>
              </div>

              :
              <div className="app">
                <Switch>
                  <Route exact path="/" component={Landing}/>
                  <Route exact path="/game" component={GameDisplay}/>
                  <Route exact path="/gameover" component={DeathPage}/>
                </Switch>
                  
                <Footer />
              </div>
            )}
          </Media>
        )
      }
    </div>
  );  
};

export default App;
