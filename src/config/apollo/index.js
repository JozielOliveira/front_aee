import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { store } from '../redux/store'
import { onOpenAlert } from '../../modules/main.state'
import { ApolloLink, from } from 'apollo-link'

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' })

const logoutLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    const { message , extensions } = graphQLErrors[0]
   
    store.dispatch(onOpenAlert('error', message))
    
    if (extensions.code === 'UNAUTHENTICATED')
      localStorage.clear()
  }
  
  if (networkError)
    store.dispatch(onOpenAlert('error', 'Erro na conexão'))
  
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token')
  // add the authorization to the headers
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });

  return forward(operation);
})


export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authMiddleware,
    logoutLink,
    httpLink
  ]),
})