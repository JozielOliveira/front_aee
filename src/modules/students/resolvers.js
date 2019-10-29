import { gql } from 'apollo-boost'

export const GET_STUDENTS = gql`
  {
    students {
      id
      name
      date_birth
      gender
      school
    }
  }
`

export const GET_STUDENT = gql`
  query ($id: String!){
    student(id: $id) {
      id
      name
      gender
      date_birth
      mother
      father
      address
      school
      others
    }
  }
`

export const ADD_STUDENT = gql`
  mutation addStudent(
    $name: String! 
    $date_birth: String! 
    $gender: String! 
    $mother: JSON!,
    $father: JSON!,
    $address: JSON!,
    $school: JSON!,
  ){
    createStudent (
      name: $name,
      gender: $gender
      date_birth: $date_birth,
      mother: $mother,
      father: $father,
      school: $school,
      address: $address,
    ) {
      name
      gender
      date_birth
      mother
      father
      address
      school
    }
  }
`
export const EDIT_STUDENT = gql`
  mutation addStudent(
    $id: String!,
    $name: String
    $email: String
    $profession: String
    $password: String
  ){
    updateUser (id: $id,name: $name, email: $email, profession: $profession password: $password) {
      id
      name
      email
      profession
    }
  }
`

export const DELETE_STUDENT = gql`
  mutation deleteUser($id: String!){
    deleteUser(id: $id) {
      id
    }
  }
`
