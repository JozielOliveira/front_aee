import { gql } from 'apollo-boost'

export const GET_USERS = gql`
  {
    users {
      id,
      name,
      email,
      profession,
    }
  }
`

export const GET_USER = gql`
  query ($id: String!){
    user(id: $id) {
      id
      name
      email
      profession
    }
  }
`

export const ADD_USER = gql`
  mutation addUser(
    $name: String! 
    $email: String! 
    $profession: String! 
    $password: String! 
  ){
    createUser (name: $name, email: $email, profession: $profession password: $password){
      id
      name
      email
      profession
    }
  }
`
export const EDIT_USER = gql`
  mutation addUser(
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

export const DELETE_USER = gql`
  mutation deleteUser($id: String!){
    deleteUser(id: $id) {
      id
    }
  }
`
