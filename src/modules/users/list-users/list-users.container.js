import { LoginView } from './list-users.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import { GET_USER } from '../resolvers'

const LoginGraphQL = graphql(GET_USER, {
  name: 'getUsers',
  options: { 
    errorPolicy: 'all', 
    notifyOnNetworkStatusChange: true,
  }
})(LoginView)

export default LoginGraphQL