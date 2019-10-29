import { ListStudentsView } from './list-students.view'
// APOLLO GRAPHQL
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'
import { GET_STUDENTS, DELETE_STUDENT } from '../resolvers'

const ListStudentsGraphQL = compose(
  graphql(GET_STUDENTS, {
    name: 'getStudents',
    options: {
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
    }
  }),
  graphql(DELETE_STUDENT, {
    name: 'removeStudent',
    options: {
      errorPolicy: 'all', 
      notifyOnNetworkStatusChange: true,
      update: (cache, { data: { deleteStudent } }) => {
          const { students } = cache.readQuery({ query: GET_STUDENTS })

          cache.writeQuery({ 
            query: GET_STUDENTS, 
            data: {
              students:  students.filter(student =>
                student.id !== deleteStudent.id ? student : null
              ),
            }, 
          })
      },
    },
  })
)(ListStudentsView)

export default ListStudentsGraphQL