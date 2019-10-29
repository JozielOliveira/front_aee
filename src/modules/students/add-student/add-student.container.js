import { AddStudentView } from './add-student.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import { ADD_STUDENT, GET_STUDENT } from '../resolvers'

const AddStudentGraphQL = graphql(ADD_STUDENT, {
  name: 'onAdd',
  options: {
    errorPolicy: 'all', 
    notifyOnNetworkStatusChange: true,
    update: (proxy, { data: { createStudent } }) => {
      const query = GET_STUDENT
      const data = proxy.readQuery({ query })
      
      data.users.push(createStudent)
      proxy.writeQuery({ query, data })
    },
  }
})(AddStudentView)

export default AddStudentGraphQL