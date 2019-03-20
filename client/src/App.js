import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import GameDisplay from './componenents/gameDisplay/GameDisplay';
import Footer from './componenents/footer/Footer';
import Landing from './componenents/landing/Landing';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/game" component={GameDisplay}/>
      </Switch>
        
      <Footer />
    </div>
  );
};

export default App;
