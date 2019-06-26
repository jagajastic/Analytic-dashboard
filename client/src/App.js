import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashborad from './views/Dashboard';
import Drivers from './views/Drivers';
import Trips from './views/Trips';
import Home from './views/Home';
import Navbar from './components/Navbars/Navbar';

function App() {
  return (
    <div className="">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={Dashborad} />
        <Route exact path="/trips" component={Trips} />
        <Route exact path="/drivers" component={Drivers} />
      </Switch>
    </div>
  );
}

export default App;
