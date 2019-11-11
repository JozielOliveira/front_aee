import { AttendView } from './attend.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { GET_STUDENT } from '../resolvers'

const AttendGraphQL = compose(
  graphql(GET_STUDENT, {
    name: 'getStudent',
    options: props => ({
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
      variables: {
        id: props.match.params.id,
      },
    })
  })
)(AttendView)

export default AttendGraphQL