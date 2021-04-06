import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" exact component={Register} />
  </Switch>
);

export default Routes;