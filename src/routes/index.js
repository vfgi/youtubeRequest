import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import InitialPage from '../pages/initialPage'
import VideoPage from '../pages/videoPage'

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={InitialPage} />
    <Route exact path="/detalhes/:id" component={VideoPage} />
    <Redirect from="/" exact to="/home" />
  </Switch>
)

export default Routes
