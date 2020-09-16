import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import routeDefs from './routes'

export const Router = ({children}) => {
  const routes = routeDefs.map(([rt, Page, props = {}], idx) => (
    <Route path={rt} key={`route-${idx}`} {...props}>
      <Page />
    </Route>
  ))
 
  return (
    <BrowserRouter>
      {children}
      <main>
        <Switch>
          {routes}
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default Router