import { ListStudentsView } from './list-students.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { GET_STUDENTS } from '../resolvers'

const ListStudentsGraphQL = compose(
  graphql(GET_STUDENTS, {
    name: 'getStudents',
    options: {
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
    }
  })
)(ListStudentsView)

export default ListStudentsGraphQL