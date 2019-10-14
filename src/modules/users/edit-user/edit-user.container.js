import { EditUserView } from './edit-user.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { GET_USER, EDIT_USER } from '../resolvers'

const LoginGraphQL = compose(
  graphql(GET_USER, {
    name: 'getUser',
    options: props => ({
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
      variables: {
        id: props.match.params.id,
      },
    })
  }),
  graphql(EDIT_USER, {
    name: 'onEdit',
    options: {
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true
    }
  })
)(EditUserView)

export default LoginGraphQL