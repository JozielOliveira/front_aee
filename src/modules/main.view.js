import React, { Suspense, useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import { PrivateRoute, PublicRoute, Alert, Loading, Nav } from '../components'

export const MainView = ({
  alert = Object,
  onCloseAlert = Function,
  onLogout = Function,
  routersAuth = Array,
  routersAuthenticated = Array,
  isAuthenticated = Boolean,
}) => {
  const links = [
    {
      label: 'Usuários',
      route: '/usuarios',
    },
    {
      label: 'Estudantes',
      route: '/estudantes',
    },
    {
      label: 'Testes',
      route: '/testes',
    },
    {
      label: 'Perfil',
      route: '/main/profile',
    },
  ]

  useEffect(() => {}, [isAuthenticated])

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Nav title="AEE" links={links} onLogout={onLogout} />
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
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  container : {
    marginTop: theme.spacing(10)
  }
}))