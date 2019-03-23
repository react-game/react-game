import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import GameDisplay from './components/gameDisplay/GameDisplay';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import DeathPage from './components/deathPage/DeathPage';

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
