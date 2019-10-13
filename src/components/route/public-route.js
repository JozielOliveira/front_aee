import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ component: Component, ...rest }) => {
  const authenticated = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ) : (
            <Component {...props} />
        )
      }
    />
  )
}
