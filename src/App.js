import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Rooms } from './components/pages/Rooms';
import Navbar from './components/Navbar/Navbar';
import SingleRoom from './components/pages/SingleRoom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
      </Switch>
  
    </div>
  );
}

export default App;
