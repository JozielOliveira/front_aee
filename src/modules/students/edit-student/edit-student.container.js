import { EditStudentView } from './edit-student.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { GET_STUDENT, EDIT_STUDENT } from '../resolvers'

const EditStudentGraphQL = compose(
  graphql(GET_STUDENT, {
    name: 'getStudent',
    options: props => ({
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
      variables: {
        id: props.match.params.id,
      },
    })
  }),
  graphql(EDIT_STUDENT, {
    name: 'onEdit',
    options: {
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true
    }
  })
)(EditStudentView)

export default EditStudentGraphQL