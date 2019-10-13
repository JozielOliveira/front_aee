import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'

// APOLLO GRAPHQL
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './config/apollo'

// REDUX
import { Provider } from 'react-redux'
import { store } from './config/redux/store'

// CENTRAL ROUTER
import { routersAuth, routersAuthenticated, sideBarRoutes } from './router'

// THEME GLOBAL VARIABLES
import theme from './themes'

import Main from './modules/main.container'

const history = createBrowserHistory()

export default function App() {
  return (
    // Reducer
    <Provider store={store}>
      <ApolloProvider client={client}>
        {/* Theme Material UI */}
        <ThemeProvider theme={theme}>
          {/* React Router Dom */}
          <Router history={history}>
            <Main
              history={history}
              routersAuth={routersAuth}
              routersAuthenticated={routersAuthenticated}
              sideBarRoutes={sideBarRoutes}
            />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  )
}
