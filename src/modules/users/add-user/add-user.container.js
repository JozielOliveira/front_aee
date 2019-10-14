import { AddUserView } from './add-user.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import { ADD_USER, GET_USERS } from '../resolvers'

const LoginGraphQL = graphql(ADD_USER, {
  name: 'onAdd',
  options: {
    errorPolicy: 'all', 
    notifyOnNetworkStatusChange: true,
    update: (proxy, { data: { createUser } }) => {
      const query = GET_USERS
      const data = proxy.readQuery({ query })
      
      data.users.push(createUser)
      proxy.writeQuery({ query, data })
    },
  }
})(AddUserView)

export default LoginGraphQL