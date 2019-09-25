import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import InitialPage from '../pages/initialPage'

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={InitialPage}/>
    <Redirect from="/" exact to="/home" />
  </Switch>
)

export default Routes