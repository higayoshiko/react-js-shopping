import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={Signup}></Route>
    </Switch>
  );
}


export default Main;
