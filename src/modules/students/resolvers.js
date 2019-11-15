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
      age
      gender
      date_birth
      school
    }
  }
`

export const ATTEND = gql`
  query ($id: String!){
    attend(id: $id) {
      name
      age
      gender
      grade
      flow
    }
  }
`

export const GET_REFERRAL = gql`
  query ($id: String!){
    formReferral(id: $id) {
      title
      steps
    }
  }
`

export const SAVE_REFERRAL = gql`
  mutation saveReferral(
    $id: String!,
    $referral: JSON!
  ){
    saveReferral (id: $id,referral: $referral) {
      id
      name
    }
  }
`

export const GET_ANAMNESE = gql`
  query ($id: String!){
    formAnamnese(id: $id) {
      title
      steps
    }
  }
`

export const SAVE_ANAMNESE = gql`
  mutation saveAnamnese(
    $id: String!,
    $anamnese: JSON!
  ){
    saveAnamnese (id: $id, anamnese: $anamnese) {
      id
      name
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
      id
      name
      date_birth
      gender
      school
    }
  }
`
export const EDIT_STUDENT = gql`
  mutation editStudent(
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
