import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export const PrivateRoute = ({ component: Component, ...rest }) => {
  const notAuthenticated = !localStorage.getItem('token')
  
  return (
    <Route
      {...rest}
      render={props =>
        notAuthenticated ? (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        ) : (
            <Component {...props} />
          )
      }
    />
  )
}
