import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import GameDisplay from './componenents/gameDisplay/GameDisplay';
import Footer from './componenents/footer/Footer';
import Landing from './componenents/landing/Landing';
import DeathPage from './componenents/deathPage/DeathPage';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/game" component={GameDisplay}/>
        <Route exact path="/gameover" component={DeathPage}/>
      </Switch>
        
      <Footer />
    </div>
  );
};

export default App;
