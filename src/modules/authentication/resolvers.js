import { gql } from 'apollo-boost'

export const LOGIN = gql`
  mutation login(
    $email: String! 
    $password: String! 
  ){
    login (email: $email, password: $password ) {
      token
      user {
        name
      }
    }
  }
`

export const REGISTER = gql`
  mutation register(
    $name: String! 
    $email: String! 
    $profession: String! 
    $password: String! 
  ){
    register (name: $name, email: $email, profession: $profession password: $password){
      token
      user {
        id
        name
        email
        profession
      }
    }
  }
`