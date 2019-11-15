import { AttendView } from './attend.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { ATTEND } from '../resolvers'

const AttendGraphQL = compose(
  graphql(ATTEND, {
    name: 'getAttend',
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