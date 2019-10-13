import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'

import { PrivateRoute, PublicRoute, Alert, Loading } from '../components'

export const MainView = ({
  alert = Object,
  onCloseAlert = Function,
  sideBarRoutes = Array,
  routersAuth = Array,
  routersAuthenticated = Array,
  history = Object,
  isAuthenticated = Boolean,
}) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {// Routers of Authentication
          routersAuth.map((prop, key) => (
            <PublicRoute
              path={prop.path}
              key={key}
              component={prop.component}
              {...prop}
            />
          ))}
          {// Routers after Authentication
          routersAuthenticated.map((prop, key) => (
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              path={prop.path}
              key={key}
              component={prop.component}
              {...prop}
            />
          ))}
        </Switch>
      </Suspense>
      <Alert
        open={alert.open}
        onClose={onCloseAlert}
        message={alert.message}
        variant={alert.variant}
      />
    </>
  )
}
