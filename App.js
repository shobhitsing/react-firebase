import React from 'react';
import Dashboard from './screens/Dashboard'
import Register from './screens/Register'
import User from './screens/UserDashboard'
import Plan from './screens/Services/Plan'
import Plan2 from './screens/Services/Plan2'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/plan" exact={true} component={Plan} />
          <Route path="/plan2"  exact={true} component={Plan2} />
          <Route path="/user" component={User} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
