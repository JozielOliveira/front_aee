import { AddStudentView } from './add-student.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import { ADD_STUDENT, GET_STUDENTS } from '../resolvers'

const AddStudentGraphQL = graphql(ADD_STUDENT, {
  name: 'onAdd',
  options: {
    errorPolicy: 'all', 
    notifyOnNetworkStatusChange: true,
    update: (proxy, { data: { createStudent } }) => {
      const query = GET_STUDENTS
      const data = proxy.readQuery({ query })
      
      data.students.push(createStudent)
      proxy.writeQuery({ query, data })
    },
  }
})(AddStudentView)

export default AddStudentGraphQL