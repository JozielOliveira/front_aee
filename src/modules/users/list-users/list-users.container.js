import { ListUsersView } from './list-users.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { GET_USERS, DELETE_USER } from '../resolvers'

const ListUsersGraphQL = compose(
  graphql(GET_USERS, {
    name: 'getUsers',
    options: {
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
    }
  }),
  graphql(DELETE_USER, {
    name: 'removeUser',
    options: {
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
      update: (cache, { data: { deleteUser } }) => {
          const { users } = cache.readQuery({ query: GET_USERS })

          cache.writeQuery({ 
            query: GET_USERS, 
            data: {
              users:  users.filter(user =>
                user.id !== deleteUser.id ? user : null
              ),
            }, 
          })
      },
    },
  })
)(ListUsersView)

export default ListUsersGraphQL